// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m] = input.shift();
  const edges = input;
  const graph = Array.from({ length: n + 1 }, () => []);
  const visit = Array(n + 1).fill(false);
  const dist = Array(n + 1).fill(Infinity);

  for (let i = 0; i < edges.length; i++) {
    const [start, end, diff] = edges[i];
    graph[start].push([end, diff]);
    graph[end].push([start, diff]);
  }
  const dij = (start) => {
    const q = [[0, start]];
    dist[start] = 0;
    while (q.length) {
      let minIdx = 0;
      let minDist = Infinity;
      for (let i = 0; i < q.length; i++) {
        if (q[i][0] < minDist) {
          minDist = q[i][0];
          minIdx = i;
        }
      }
      const [curDist, curNode] = q[minIdx];
      q.splice(minIdx, 1);
      if (visit[curNode]) continue;
      visit[curNode] = true;
      for (let i = 0; i < graph[curNode].length; i++) {
        const nextNode = graph[curNode][i][0];
        const nextDist = graph[curNode][i][1];
        const newDist = nextDist + curDist;
        if (newDist < dist[nextNode]) {
          dist[nextNode] = newDist;
          q.push([newDist, nextNode]);
        }
      }
    }
  };
  dij(1);
  console.log(dist[n]);
};

ans();
