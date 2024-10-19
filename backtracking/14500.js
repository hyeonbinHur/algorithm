const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

let max = 0;
let maxVal = Math.max(...input.flat());
const arr = [];
const visit = Array.from({ length: input.length }, () =>
  Array(input[0].length).fill(false)
);
const bk = (k, row, col) => {
  if (k === 4) {
    max = Math.max(
      arr.reduce((a, b) => a + b, 0),
      max
    );
  } else {
    for (let i = 0; i < 4; i++) {
      const nx = dir[i][1] + col;
      const ny = dir[i][0] + row;
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < input[0].length &&
        ny < input.length &&
        visit[ny][nx] === false
      ) {
        arr[k] = input[ny][nx];
        visit[ny][nx] = true;
        bk(k + 1, ny, nx);
        visit[ny][nx] = false;
      }
    }
  }
};

const bfs = (row, col) => {
  const right = col + 1;
  const left = col - 1;
  const top = row + 1;
  const bottom = row - 1;
  let dir1 = 0,
    dir2 = 0,
    dir3 = 0,
    dir4 = 0;

  if (top < input.length && bottom >= 0 && right < input[0].length) {
    dir1 =
      input[row][col] +
      input[top][col] +
      input[bottom][col] +
      input[row][right];
  }

  if (top < input.length && bottom >= 0 && left >= 0) {
    dir2 =
      input[row][col] + input[top][col] + input[bottom][col] + input[row][left];
  }
  if (right < input[0].length && left >= 0 && top < input.length) {
    dir3 =
      input[row][col] + input[row][right] + input[row][left] + input[top][col];
  }
  if (right < input[0].length && left >= 0 && bottom >= 0) {
    dir4 =
      input[row][col] +
      input[row][right] +
      input[row][left] +
      input[bottom][col];
  }
  max = Math.max(dir1, dir2, dir3, dir4, max);
};

const ans = () => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      visit[i][j] = true;
      arr[0] = input[i][j];
      bk(0, i, j);
      visit[i][j] = false;

      bfs(i, j);
    }
  }
  console.log(max);
};
ans();
