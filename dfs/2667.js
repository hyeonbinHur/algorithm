const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const dfs = (node, graph) => {
  const stack = [1];
  const visit = Array(node).fill(false);
  while (stack.length) {
    const current = stack.pop();
    if (visit[current] === false) {
      stack.push(...graph[current]);
      visit[current] = true;
    }
  }
  const result = [];
  for (let i = 1; i < node; i++) {
    if (visit[i] === true) result.push(i);
  }
  console.log(result.length - 1);
};

const ans = () => {
  const node = input.shift()[0];
  const edges = input.shift()[0];
  const graph = Array.from({ length: node + 1 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [from, to] = input[i];
    graph[from].push(to);
    graph[to].push(from);
  }
  dfs(node + 1, graph);
};
ans();
