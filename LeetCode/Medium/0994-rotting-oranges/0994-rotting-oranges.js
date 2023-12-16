/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  const queue = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const value = grid[i][j];

      if (value === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = new Set();
  let minute = 0;

  while (queue.length > 0) {
    const [rottenRow, rottenCol, step] = queue.shift();

    for (const [dr, dc] of directions) {
      const nextRow = dr + rottenRow;
      const nextCol = dc + rottenCol;
      const visitedKey = JSON.stringify([nextRow, nextCol]);

      if (
        nextRow >= 0 &&
        nextRow <= grid.length - 1 &&
        nextCol >= 0 &&
        nextCol <= grid[0].length - 1 &&
        !visited.has(visitedKey) &&
        grid[nextRow][nextCol] === 1
      ) {
        visited.add(visitedKey);
        grid[nextRow][nextCol] = 2;
        queue.push([nextRow, nextCol, step + 1]);
      }
    }

    minute = step;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const value = grid[i][j];

      if (value === 1) {
        return -1;
      }
    }
  }

  return minute;
};