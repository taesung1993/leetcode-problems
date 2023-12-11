/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
const minReorder = function(n, connections) {
    const graph = new Array(n).fill(null).map(() => []);
    let changeCount = 0;

    const dfs = (visiting, from) => {
        for(const [city, direction] of graph[visiting]) {
            if(city !== from) {
                changeCount += direction;
                dfs(city, visiting);
            }
        }
    };

    for(const [from, to] of connections) {
        graph[from].push([to, 1]);
        graph[to].push([from, 0]);
    }

    dfs(0, -1, 0);
    return changeCount;
};