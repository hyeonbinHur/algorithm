// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (n, m, map) => {
  const q = [[0, 0, 0]];
  let ans = Infinity;
  const visit = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );
  visit[0][0] = 0;
  while (q.length) {
    const cur = q.shift();
    dir.map((e) => {
      const ny = cur[0] + e[0];
      const nx = cur[1] + e[1];
      const bw = cur[2];
      if (ny >= 0 && ny <= m && nx >= 0 && nx <= n) {
        const nb = bw + map[ny][nx];
        if (visit[ny][nx] > nb) {
          if (ny === m && nx === n) {
            ans = Math.min(nb, ans);
          }
          visit[ny][nx] = nb;
          q.push([ny, nx, nb]);
        }
      }
    });
  }
  console.log(visit[m][n]);
};
const ans = () => {
  const [n, m] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  const map = input
    .map((e) => e.split(""))
    .map((e) => e.map((e2) => Number(e2)));
  bfs(n - 1, m - 1, map);
};
ans();
