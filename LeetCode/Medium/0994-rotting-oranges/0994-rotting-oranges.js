/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
    let freshOrangeCount = 0;
    const queue = grid.reduce((result, row, rowIndex) => {
        result.push(...(row.reduce((result, cell, cellIndex) => {
            switch(cell) {
                case 1:
                    freshOrangeCount += 1;
                    break;
                case 2:
                    result.push([rowIndex, cellIndex, 0]);
                    break;
            }

            return result;
        }, [])))

        return result;
    }, []);
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const isRange = {
        row: (value) => value >= 0 && value < grid.length,
        col: (value) => value >= 0 && value < grid[0].length
    }
    let answer = 0;

    while(queue.length > 0) {
        const [currentRow, currentCol, currentMinute] = queue.shift();

        for(const [dr, dc] of directions) {
            const nextRow = currentRow + dr;
            const nextCol = currentCol + dc;

            if(
                isRange.row(nextRow) && isRange.col(nextCol) && grid[nextRow][nextCol] === 1
            ) {
                freshOrangeCount -= 1;
                grid[nextRow][nextCol] = 2;
                queue.push([nextRow, nextCol, currentMinute + 1]);
            }
        }

        answer = currentMinute;
    }

    return freshOrangeCount > 0 ? -1 : answer;
};