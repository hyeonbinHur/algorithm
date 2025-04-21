// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
const grid = input
  .map((e) => e.split(""))
  .map((e) => e.map((e2) => Number(e2)));
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
grid[0][0] = 2;
const dfs = () => {
  const q = [[0, 0]];
  while (q.length) {
    const cur = q.shift();
    dir.map((e) => {
      const ny = cur[0] + e[0];
      const nx = cur[1] + e[1];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m && grid[ny][nx] == 1) {
        grid[ny][nx] = grid[cur[0]][cur[1]] + 1;
        q.push([ny, nx]);
      }
    });
  }
  console.log(grid[n - 1][m - 1] - 1);
};
dfs();
