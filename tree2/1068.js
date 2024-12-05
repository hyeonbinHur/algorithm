const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const dfs = (tree, target, root) => {
  const stack = [root];
  const visit = Array(tree.length).fill(false);
  let leafCount = 0;
  while (stack.length) {
    const current = stack.pop();
    visit[current] = true;
    let isLeaf = true;
    if (current !== target) {
      for (let i = 0; i < tree[current].length; i++) {
        const val = tree[current][i];
        if (visit[val] === false && val !== target) {
          isLeaf = false;
          stack.push(val);
        }
      }
      if (isLeaf) {
        leafCount++;
      }
    }
  }
  console.log(leafCount);
};

const ans = () => {
  const n = input.shift()[0];
  const arr = input.shift();
  const target = input.shift()[0];
  const tree = Array.from({ length: n }, () => []);
  let root = 0;
  for (let i = 0; i < arr.length; i++) {
    const par = arr[i];
    const child = i;
    if (par === -1) {
      root = i;
    } else {
      tree[par].push(child);
      tree[child].push(par);
    }
  }
  dfs(tree, target, root);
};
ans();
