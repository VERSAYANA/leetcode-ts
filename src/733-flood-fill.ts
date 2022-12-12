function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const currentColor = image[sr][sc];
  const visitedSquares = new Set<number>();
  const numberOfColumns = image[0].length;

  function traverse(sr: number, sc: number): void {
    if (
      image[sr] !== undefined &&
      image[sr][sc] !== undefined &&
      image[sr][sc] === currentColor &&
      !visitedSquares.has(sr * numberOfColumns + sc)
    ) {
      image[sr][sc] = color;
      visitedSquares.add(sr * numberOfColumns + sc);

      traverse(sr - 1, sc);
      traverse(sr + 1, sc);
      traverse(sr, sc - 1);
      traverse(sr, sc + 1);
    }
  }

  traverse(sr, sc);
  return image;
}

function floodFill2(image: number[][], sr: number, sc: number, color: number): number[][] {
  const currentColor = image[sr][sc];
  if (color === currentColor) return image;

  function dfs(row: number, column: number): void {
    if (
      image[row] !== undefined &&
      image[row][column] !== undefined &&
      image[row][column] === currentColor
    ) {
      image[row][column] = color;
      dfs(row - 1, column);
      dfs(row + 1, column);
      dfs(row, column - 1);
      dfs(row, column + 1);
    }
  }

  dfs(sr, sc);
  return image;
}

function floodFill3(image: number[][], sr: number, sc: number, color: number): number[][] {
  const currentColor = image[sr][sc];
  if (color === currentColor) return image;

  function dfs(row: number, column: number): void {
    if (
      row >= 0 &&
      row < image.length &&
      column >= 0 &&
      column < image[0].length &&
      image[row][column] === currentColor
    ) {
      image[row][column] = color;
      dfs(row - 1, column);
      dfs(row + 1, column);
      dfs(row, column - 1);
      dfs(row, column + 1);
    }
  }

  dfs(sr, sc);
  return image;
}
