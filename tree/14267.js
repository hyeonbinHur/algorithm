const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input.shift();

const tree = Array.from({ length: n + 1 }, () => []);
const results = Array(n + 1).fill(0);
const dfs = (node, value) => {
  const stack = [node];
  results[node] += value;

  while (stack.length) {
    const cur = stack.pop();
    if (tree[cur])
      for (let i = 0; i < tree[cur].length; i++) {
        const val = tree[cur][i];
        stack.push(val);
        results[val] += value;
      }
  }
};

const ans = () => {
  const queries = input.shift();
  for (let i = 1; i < queries.length; i++) {
    const val = queries[i];
    tree[val].push(i + 1);
  }
  for (let i = 0; i < input.length; i++) {
    const [node, val] = input[i];
    dfs(node, val);
  }
  results.shift();
  console.log(results.join(" "));
};

ans();
