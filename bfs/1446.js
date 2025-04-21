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
  const graph = new Map();
  const edges = input;
  for (let i = 0; i < edges.length; i++) {
    const [start, end, diff] = edges[i];
    if (graph.has(start)) {
      const arr = graph.get(start);
      arr.push([end, diff]);
      graph.set(start, arr);
    } else {
      graph.set(start, [[end, diff]]);
    }
  }
  const dist = Array(m + 1).fill(Infinity);
  dist[0] = 0;
  for (let i = 0; i <= m; i++) {
    if (i > 0) {
      dist[i] = Math.min(dist[i - 1] + 1, dist[i]);
    }
    if (graph.has(i)) {
      const arr = graph.get(i);
      for (let j = 0; j < arr.length; j++) {
        const [end, diff] = arr[j];
        dist[end] = Math.min(dist[end], dist[i] + diff);
      }
    }
  }
  console.log(dist[m]);
};
ans();
