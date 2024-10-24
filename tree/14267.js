const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input.shift();

const tree = Array.from({ length: n }, () => []);
const results = Array(n).fill(0);
const dfs = (node, value) => {
  const stack = [node];
  results[node - 1] += value;

  while (stack.length) {
    const cur = stack.pop();
    if (tree[cur - 1])
      for (let i = 0; i < tree[cur - 1].length; i++) {
        const val = tree[cur - 1][i];
        results[val - 1] += value;
      }
  }
};

const ans = () => {
  const queries = input.shift();
  for (let i = 1; i < queries.length; i++) {
    const val = queries[i];
    tree[val - 1].push(i);
  }

  for (let i = 0; i < input.length; i++) {
    const [node, val] = input[i];
    dfs(node, val);
  }
  console.log(tree);
  console.log(results);
};

ans();
while (1) {
  console.log("Hello");
}
