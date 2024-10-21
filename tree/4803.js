const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const findTree = (t, nodes, arr) => {
  if (nodes === 0) return;

  const tree = Array.from({ length: nodes + 1 }, () => []);
  for (let i = 0; i < arr.length; i++) {
    const [s, e] = arr[i];
    tree[s].push(e);
    tree[e].push(s);
  }
  const visit = Array(nodes + 1).fill(0);
  const isCycle = (current, parent) => {
    visit[current] = 1;
    for (let i = 0; i < tree[current].length; i++) {
      const node = tree[current][i];
      if (visit[node] === 1) {
        if (parent !== node) return true;
      } else if (visit[node] === 0) {
        if (isCycle(node, current)) return true;
      }
    }
    return false;
  };
  let count = 0;
  for (let i = 1; i < nodes + 1; i++) {
    if (visit[i] === 0) {
      if (!isCycle(i, i)) count++;
    }
  }
  console.log(count);
};

const ans = () => {
  for (let i = 0; i < input.length; i++) {
    const [nodes, edges] = input[i];
    const arr = input.splice(i + 1, edges);
    findTree(i + 1, nodes, arr);
  }
};
ans();
