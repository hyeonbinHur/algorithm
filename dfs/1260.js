const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const bfs = (start, nodes, graph) => {
  const visit = Array(nodes + 1).fill(false);
  const stack = [start];
  const ans = [];
  while (stack.length) {
    const current = stack.pop();
    if (visit[current] === false) {
      visit[current] = true;
      ans.push(current);
      for (let i = graph[current].length - 1; i >= 0; i--) {
        let val = graph[current][i];
        stack.push(val);
      }
    }
  }
  console.log(ans.join(" "));
};
const dfs = (start, nodes, graph) => {
  const visit = Array(nodes + 1).fill(false);
  const q = [start];
  const ans = [];
  while (q.length) {
    const current = q.shift();
    if (visit[current] === false) {
      visit[current] = true;
      ans.push(current);
      for (let i = 0; i < graph[current].length; i++) {
        q.push(graph[current][i]);
      }
    }
  }
  console.log(ans.join(" "));
};

const ans = () => {
  const [node, edges, start] = input.shift();
  const graph = Array.from({ length: node + 1 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [from, to] = input[i];
    graph[from].push(to);
    graph[to].push(from);
  }
  for (let i = 0; i < graph.length; i++) {
    graph[i] = graph[i].sort((a, b) => a - b);
  }
  bfs(start, node, graph);
  dfs(start, node, graph);
};

ans();
