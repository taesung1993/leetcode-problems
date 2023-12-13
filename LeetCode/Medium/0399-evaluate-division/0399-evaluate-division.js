/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function(equations, values, queries) {
    const graph = new Map();
    const answers = [];

    const dfs = (start, end, visited) => {
        if(!graph.has(start) || !graph.has(end)) {
            return -1.0;
        }

        if(start === end) {
            return 1.0;
        }

        visited.add(start);

        for(const [neighbor, value] of graph.get(start).entries()) {
            if(!visited.has(neighbor)) {
                const result = dfs(neighbor, end, visited);
                
                if(result !== -1.0) {
                    return value * result;
                }
            }
        }

        return -1.0;
    }

    for(let i=0; i<equations.length; i++) {
        const [numerator, denominator] = equations[i];
        const value = values[i];

        if(!graph.has(numerator)) graph.set(numerator, new Map());
        if(!graph.has(denominator)) graph.set(denominator, new Map());

        graph.get(numerator).set(denominator, value);
        graph.get(denominator).set(numerator, 1.0 / value);
    }

    for(const query of queries) {
        const result = dfs(query[0], query[1], new Set());
        answers.push(result);
    }

    return answers;
};