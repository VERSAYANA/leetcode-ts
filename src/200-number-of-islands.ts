function numIslands(grid: string[][]): number {
  const visitedSquares = new Set<number>();
  const rows = grid.length;
  const columns = grid[0].length;
  let islands = 0;

  function traverse(row: number, column: number): void {
    if (
      row >= 0 &&
      row < rows &&
      column >= 0 &&
      column < columns &&
      !visitedSquares.has(row * columns + column)
    ) {
      visitedSquares.add(row * columns + column);
      if (grid[row][column] === '1') {
        traverse(row - 1, column);
        traverse(row + 1, column);
        traverse(row, column - 1);
        traverse(row, column + 1);
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (visitedSquares.has(row * columns + column) || grid[row][column] === '0') {
        continue;
      } else {
        islands += 1;
        traverse(row, column);
      }
    }
  }

  return islands;
}

function numIslands2(grid: string[][]): number {
  const visitedSquares = new Set<number>();
  const rows = grid.length;
  const columns = grid[0].length;
  let islands = 0;

  function traverse(row: number, column: number): void {
    if (grid[row]?.[column] === '1' && !visitedSquares.has(row * columns + column)) {
      visitedSquares.add(row * columns + column);
      traverse(row - 1, column);
      traverse(row + 1, column);
      traverse(row, column - 1);
      traverse(row, column + 1);
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (grid[row][column] === '1' && !visitedSquares.has(row * columns + column)) {
        islands += 1;
        traverse(row, column);
      }
    }
  }

  return islands;
}

function numIslands3(grid: string[][]): number {
  let islands = 0;

  function exploreIsland(row: number, column: number): void {
    if (grid[row]?.[column] === '1') {
      grid[row][column] = '0';
      exploreIsland(row - 1, column);
      exploreIsland(row + 1, column);
      exploreIsland(row, column - 1);
      exploreIsland(row, column + 1);
    }
  }

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[0].length; column++) {
      if (grid[row][column] === '1') {
        islands += 1;
        exploreIsland(row, column);
      }
    }
  }

  return islands;
}
