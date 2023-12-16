/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const nearestExit = function(maze, entrance) {
  const queue = [[...entrance, 0]];
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ]; // left, right, top, bottom
  const limits = {
    row: maze.length,
    col: maze[0].length,
  };
  const visited = new Set(JSON.stringify(entrance));

  while (queue.length > 0) {
    const [currentRow, currentCol, steps] = queue.shift();

    if (
      (currentCol === 0 ||
      currentCol === limits.col - 1 ||
      currentRow === 0 ||
      currentRow === limits.row - 1) && 
      (currentRow !== entrance[0] || currentCol !== entrance[1])
    ) {
      return steps;
    }

    for (const [row, col] of directions) {
      const nextRow = row + currentRow;
      const nextCol = col + currentCol;

      if (
        nextRow >= 0 &&
        nextRow < limits.row &&
        nextCol >= 0 &&
        nextCol < limits.col &&
        maze[nextRow][nextCol] === "." && 
        !visited.has(JSON.stringify([nextRow, nextCol]))
      ) {
        visited.add(JSON.stringify([nextRow, nextCol]));
        queue.push([nextRow, nextCol, steps + 1]);
      }
    }
  }

  return -1;
};