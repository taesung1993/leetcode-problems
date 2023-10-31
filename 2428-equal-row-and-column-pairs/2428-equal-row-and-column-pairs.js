/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function(grid) {
    const hash = new Map();
    let answer = 0;

    for(let i=0; i<grid[0].length; i++) {
        const column = [];
        for(let j=0; j<grid.length; j++) {
            column.push(grid[j][i]);
        }
        const key = JSON.stringify(column);
        hash.set(key, hash.get(key) + 1 || 1);
    }

    for(let i=0; i<grid.length; i++) {
        const key = JSON.stringify(grid[i]);
        if(hash.has(key)) {
            answer += hash.get(key);
        }
    }

    return answer;
};