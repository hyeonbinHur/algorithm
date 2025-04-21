// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((e) => Number(e));
const max = Math.max(input[0], input[1]);
const visit = Array(100000).fill(0);
visit[input[0]] = 1;
const ans = () => {
  let q = [input[0]];
  while (q.length) {
    const cur = q.shift();
    for (let i = 0; i < 3; i++) {
      let val = 0;
      if (i === 0) {
        val = cur + 1;
      } else if (i === 1) {
        val = cur - 1;
      } else if (i === 2) {
        val = cur * 2;
      }
      if (visit[val] === 0 || visit[val] > visit[cur]) {
        if (i !== 2) {
          visit[val] = visit[cur] + 1;
        } else {
          visit[val] = visit[cur];
        }
        q.push(val);
      }
    }
  }
  console.log(visit[input[1]] - 1);
};
ans();
