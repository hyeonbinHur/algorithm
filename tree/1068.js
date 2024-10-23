const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const dfs = (tree, target, root) => {
  const visit = Array(tree.length).fill(0);
  const stack = [root];
  visit[root] = 1;
  let count = 0;
  while (stack.length) {
    const cur = stack.pop();
    if (cur !== target) {
      let flag = false;
      for (let i = 0; i < tree[cur].length; i++) {
        const val = tree[cur][i];
        if (visit[val] === 0 && val !== target) {
          flag = true;
          visit[val] = 1;
          stack.push(val);
        }
      }
      if (!flag) {
        count++;
      }
    }
  }
  console.log(count);
};

const ans = () => {
  const nodes = input.shift()[0];
  const target = input.pop()[0];
  const tree = Array.from({ length: nodes }, () => []);
  let root;
  for (let i = 0; i < input[0].length; i++) {
    const val = i;
    const par = input[0][i];
    if (par !== -1) {
      tree[par].push(val);
      tree[val].push(par);
    } else if (par === -1) {
      root = val;
    }
  }

  dfs(tree, target, root);
};
ans();
