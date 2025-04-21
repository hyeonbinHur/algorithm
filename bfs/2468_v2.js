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
const bfs = (row, col, level, map) => {
  const q = [[row, col]];
  let idx = 0;
  map[row][col] = -1;
  while (q.length > idx) {
    const cur = q[idx++];
    dir.map((e) => {
      const ny = cur[0] + e[0];
      const nx = cur[1] + e[1];
      if (
        ny >= 0 &&
        ny < input.length &&
        nx >= 0 &&
        nx < input.length &&
        map[ny][nx] > level
      ) {
        q.push([ny, nx]);
        map[ny][nx] = -1;
      }
    });
  }
};
const ans = () => {
  let max = 0;
  for (let i = 0; i <= 100; i++) {
    const newMap = JSON.parse(JSON.stringify(input));
    let maxTemp = 0;
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (newMap[j][k] > i) {
          maxTemp++;
          bfs(j, k, i, newMap);
        }
      }
    }
    max = Math.max(maxTemp, max);
  }
  console.log(max);
};
ans();
