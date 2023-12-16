/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    let freshOrangeCount = 0;
    const queue = grid.reduce((r, row, ridx) => {
        r.push(...row.reduce((r, cell, cidx) => {
            if(cell === 1) {
                freshOrangeCount += 1;
            }

            if(cell === 2) {
                r.push([ridx, cidx, 0]);
            }
            
            return r;
        }, []));
        
        return r;
    }, []);
    const limit = {
        row: grid.length,
        col: grid[0].length
    }

    const directions = [[0,1], [0,-1], [1,0], [-1,0]];
    const visited = new Set();
    let answer = 0;

    while(queue.length > 0) {
        const [currentRow, currentCol, currentMinute] = queue.shift();

        for(const [dr, dc] of directions) {
            const nextRow = currentRow + dr;
            const nextCol = currentCol + dc;
            const key = JSON.stringify([nextRow, nextCol]);

            if(nextRow >= 0 && nextRow < limit.row && nextCol >=0 && nextCol < limit.col && !visited.has(key) && grid[nextRow][nextCol] === 1) {
                grid[nextRow][nextCol] = 2;
                freshOrangeCount -= 1;
                queue.push([nextRow, nextCol, currentMinute + 1]);
                visited.add(key);
            }
        }

        answer = currentMinute;
    }

    return freshOrangeCount > 0 ? -1 : answer;
};