// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const n = input.shift()[0];
  const dist = Array.from({ length: n }, () => Array(n).fill(0));
  const graph = Array.from({ length: n }, () => []);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === 1) {
        graph[i].push(j);
      }
    }
  }
  const dij = (start) => {
    const q = [start];
    const visit = Array(n).fill(false);
    while (q.length) {
      const cur = q.shift();
      for (let i = 0; i < graph[cur].length; i++) {
        const nn = graph[cur][i];
        if (visit[nn] === false) {
          console.log(start, nn);
          visit[nn] = true;
          dist[start][nn] = 1;
          q.push(nn);
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    dij(i);
  }
  console.log(dist.map((e) => e.join(" ")).join("\n"));
};
ans();
