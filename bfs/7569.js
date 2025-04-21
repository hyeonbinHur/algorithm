// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const [m, n, h] = input.shift();

const dir = [
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

const ans = () => {
  const q = [];
  const rq = [];
  const newMap = [];
  for (let i = 0; i < h; i++) {
    const arr = input.splice(0, n);
    newMap.push(arr);
  }
  let zeroCount = 0;
  for (let k = 0; k < h; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (newMap[k][i][j] === 1) {
          q.push([k, i, j]);
        }
        if (newMap[k][i][j] === 0) {
          zeroCount++;
        }
      }
    }
  }
  let max = 1;
  let idx = 0;
  const bfs = () => {
    while (q.length > idx) {
      const cur = q[idx++];
      dir.map((e) => {
        const nz = cur[0] + e[0];
        const ny = cur[1] + e[1];
        const nx = cur[2] + e[2];
        if (
          ny >= 0 &&
          ny < n &&
          nx >= 0 &&
          nx < m &&
          nz >= 0 &&
          nz < h &&
          newMap[nz][ny][nx] === 0
        ) {
          q.push([nz, ny, nx]);
          max = Math.max(max, newMap[cur[0]][cur[1]][cur[2]] + 1);
          zeroCount--;
          newMap[nz][ny][nx] = newMap[cur[0]][cur[1]][cur[2]] + 1;
        }
      });
    }
  };
  bfs();
  if (zeroCount !== 0) {
    console.log(-1);
  } else {
    if (max === 1) {
      console.log(0);
    } else {
      console.log(max - 1);
    }
  }
};
ans();
