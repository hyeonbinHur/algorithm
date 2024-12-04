const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const [R, C] = input.shift();
const visit = Array.from({ length: R }, () => Array(C).fill(-1));
visit[R - 1][C - 1] = 1;
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
const dfs = (row, col) => {
  if (visit[row][col] !== -1) {
    return visit[row][col];
  }
  let count = 0;
  dir.map((e) => {
    const nx = col + e[1];
    const ny = row + e[0];
    if (
      nx >= 0 &&
      nx < input[0].length &&
      ny >= 0 &&
      ny < input.length &&
      input[row][col] > input[ny][nx]
    ) {
      count += dfs(ny, nx);
    }
  });
  visit[row][col] = count;
  return visit[row][col];
};
const ans = () => {
  dfs(0, 0);
  console.log(visit);
  console.log(visit[0][0]);
};
ans();
