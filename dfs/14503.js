// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

const bfs = (r, c, d, map) => {
  let count = 0;
  const q = [[r, c, d]];
  while (q.length) {
    const cur = q.shift();
    const cr = cur[0];
    const cc = cur[1];
    if (map[cr][cc] === 0) {
      count++;
      map[cr][cc] = 2;
    }

    dir.map((e) => {
        const nc
    })
  }
};

const ans = () => {
  const [n, m] = input.shift();
  const [r, c, d] = input.shift();
  const map = input;
};
ans();
