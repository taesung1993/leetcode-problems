/**
 * @param {number[][]} grid
 * @return {number}
 */
const equalPairs = function(grid) {
    const columns = new Map();
    let count = 0;


    for(let i=0; i<grid.length; i++) {
        const column = [];

        for(let j=0; j<grid[i].length; j++) {
            column.push(grid[j][i]);
        }

        const key = JSON.stringify(column);

        columns.set(key, columns.get(key) + 1 || 1);
    }

    for(let i=0; i<grid.length; i++) {
        const row = JSON.stringify(grid[i]);

        if(columns.has(row)) {
            count += columns.get(row);
        }
    }

    return count;
};