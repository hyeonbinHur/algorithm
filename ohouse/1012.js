// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const n = input.shift()[0];

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const calc = (n, m, queries) => {
  const map = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 0; i < queries.length; i++) {
    const [row, col] = queries[i];
    map[row][col] = 1;
  }
  const bfs = (row, col) => {
    const q = [[row, col]];
    map[row][col] = 0;
    let idx = 0;
    while (q.length > idx) {
      const cur = q[idx++];
      dir.map((e) => {
        const ny = cur[0] + e[0];
        const nx = cur[1] + e[1];
        if (ny >= 0 && ny < n && nx >= 0 && nx < m && map[ny][nx] === 1) {
          map[ny][nx] = 0;
          q.push([ny, nx]);
        }
      });
    }
  };
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 1) {
        count++;
        bfs(i, j);
      }
    }
  }
  console.log(count);
};
const ans = () => {
  for (let i = 0; i < n; i++) {
    const [n, m, r] = input.shift();
    const queries = input.splice(0, r);
    calc(n, m, queries);
  }
};

ans();
