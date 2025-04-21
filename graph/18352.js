const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const ans = () => {
  const [n, m, k, x] = input.shift();
  const edges = input;
  const graph = Array.from({ length: n + 1 }, () => []);
  const dist = Array(n + 1).fill(Infinity);
  const visit = Array(n + 1).fill(false);
  for (let i = 0; i < edges.length; i++) {
    const [start, end] = edges[i];
    graph[start].push(end);
  }
  const ans = [];
  const dfs = (start) => {
    const q = [start];
    dist[start] = 0;
    while (q.length) {
      const cur = q.shift();
      if (dist[cur] === k) {
        ans.push(cur);
        continue;
      }
      for (let i = 0; i < graph[cur].length; i++) {
        const next = graph[cur][i];
        if (visit[next] === false && dist[next] > dist[cur] + 1) {
          visit[next] = true;
          dist[next] = dist[cur] + 1;
          q.push(next);
        }
      }
    }
  };
  dfs(x);
  ans.sort((a, b) => a - b);
  console.log(ans.length === 0 ? "-1" : ans.join("\n"));
};
ans();
