const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, m] = input.shift();
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const dfs = (row, col, grid) => {
  const q = [[row, col]];
  let count = 1;
  while (q.length) {
    const cur = q.shift();
    dir.map((e) => {
      const ny = cur[0] + e[0];
      const nx = cur[1] + e[1];
      if (ny >= 0 && ny < n && nx >= 0 && nx < m && grid[ny][nx] === 1) {
        count++;
        q.push([ny, nx]);
        grid[ny][nx] = 0;
      }
    });
  }
  return count;
};

const ans = () => {
  const grid = input;
  let max = 0;
  let first = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        grid[i][j] = 0;
        first++;
        max = Math.max(dfs(i, j, grid), max);
      }
    }
  }
  console.log(first);
  console.log(max);
};
ans();
