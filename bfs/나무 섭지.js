const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(""));
const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (row, col, target) => {
  let val = Infinity;
  const q = [[row, col, 0]];
  const visit = Array.from({ length: input.length }, () =>
    Array(input[0].length).fill(false)
  );
  visit[row][col] = true;
  let isFound = false;
  if (input[row][col] === target) isFound = true;
  while (q.length) {
    const cur = q.shift();
    if (isFound) break;
    dir.map((e) => {
      const nx = e[1] + cur[1];
      const ny = e[0] + cur[0];
      const time = cur[2];

      if (
        nx >= 0 &&
        nx < input[0].length &&
        ny >= 0 &&
        ny < input.length &&
        !visit[ny][nx]
      ) {
        if (target === "N") {
          if (input[ny][nx] === "." || input[ny][nx] === taget) {
            q.push([ny, nx, time + 1]);
            visit[ny][nx] = true;
            if (input[ny][nx] === target) {
              val = time + 1;
              isFound = true;
            }
          }
        } else {
          q.push([ny, nx, time + 1]);
          visit[ny][nx] = true;
          if (input[ny][nx] === target) {
            val = time + 1;
            isFound = true;
          }
        }
      }
    });
  }
  return val;
};
const ans = () => {
  const dCoor = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === "D") {
        dCoor.push(i, j);
        break;
      }
    }
  }
  const nCount = bfs(dCoor[0], dCoor[1], "N");
  const gCount = bfs(dCoor[0], dCoor[1], "G");
  if (nCount !== Infinity && nCount < gCount) {
    console.log(nCount, gCount);
    console.log("Yes");
  } else {
    console.log("No");
  }
};
ans();
