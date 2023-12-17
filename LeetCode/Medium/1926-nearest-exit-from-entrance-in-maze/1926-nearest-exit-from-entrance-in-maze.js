/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function(maze, entrance) {
    /**
        1. entrance는 출구로 치지 않는다.
        2. entrance에서 위, 아래, 왼쪽, 오른쪽으로 이동시킬 수 있다.
        3. 출구는 maze의 모서리에 있는 모든 곳

        입구에서 출구까지가는 가장 지름길 경로의 step의 최솟값을 반환해라.
        만약 step이 없는 경우 -1을 반환해라.
     */

     const queue = [[...entrance, 0]];
     const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 오른쪽, 왼쪽, 위쪽, 아래쪽
     const visited = new Set();
     const isRange = {
        row: (value) => value >=0 && value < maze.length,
        col: (value) => value >=0 && value < maze[0].length,
     }

     while(queue.length > 0) {
         const [currentRow, currentCol, currentStep] = queue.shift();

         if(
             (currentRow !== entrance[0] || currentCol !== entrance[1]) &&
             (currentRow === 0 || currentRow === maze.length -1 || currentCol === 0 || currentCol === maze[0].length - 1)
         ) {
             return currentStep;
         }

         for(const [dr, dc] of directions) {
             const nextRow = currentRow + dr;
             const nextCol = currentCol + dc;
             const visitingKey = JSON.stringify([nextRow, nextCol]);

             if(
                isRange.row(nextRow) &&
                isRange.col(nextCol) &&
                maze[nextRow][nextCol] === '.' &&
                !visited.has(visitingKey)
             ) {
                 visited.add(visitingKey);
                 queue.push([nextRow, nextCol, currentStep + 1]);
             }
         }
     }

     return -1;
};