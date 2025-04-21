const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const n = input.shift()[0];
const e = input.shift()[0];

const ans = () => {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < e; i++) {
    const curPar = input[i][0];
    const curChi = input[i][1];
    graph[curPar].push(curChi);
    graph[curChi].push(curPar);
  }
  const visit = Array(n + 1).fill(false);
  const stack = graph[1];
  let count = 0;
  while (stack.length) {
    const curNode = stack.pop();
    if (visit[curNode] === false) {
      count++;
      visit[curNode] = true;
      stack.push(...graph[curNode]);
    }
  }

  console.log(count >= 1 ? count - 1 : 0);
};

ans();
