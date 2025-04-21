// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const num = +input.shift();
const [start, end] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
const num2 = +input.shift();
const ans = () => {
  const raw = input
    .map((e) => e.split(" "))
    .map((e) => e.map((e2) => Number(e2)));
  const graph = Array.from({ length: num + 1 }, () => []);
  for (let i = 0; i < raw.length; i++) {
    const [p, c] = raw[i];
    graph[p].push(c);
    graph[c].push(p);
  }
  let ans = 0;
  const visit = Array(num + 1).fill(false);
  const dfs = (node, level) => {
    visit[node] = true;
    for (let i = 0; i < graph[node].length; i++) {
      const curChar = graph[node][i];
      if (curChar === end) {
        ans = level + 1;
        return;
      }
      if (visit[curChar] === false) {
        dfs(curChar, level + 1);
      }
    }
  };
  dfs(start, 0);
  console.log(ans === 0 ? -1 : ans);
};

ans();
