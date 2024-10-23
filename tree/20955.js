//루트가 어디?
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, e] = input.shift();
  const tree = {};
  for (let i = 0; i < input.length; i++) {
    const [s, e] = input[i];
    if (!tree[s]) {
      tree[s] = [];
    }
    if (!tree[e]) {
      tree[e] = [];
    }
    tree[s].push(e);
    tree[e].push(s);
  }
  const keys = Object.keys(tree);
  const visit = {};
  for (let i = 0; i < keys.length; i++) {
    const val = keys[i];
    visit[val] = 0;
  }
  let count = 0;
  const bfs = (current) => {
    const q = [current];
    while (q.length) {
      const cur = q.shift();
      for (let i = 0; i < tree[cur].length; i++) {
        const val = tree[cur][i];
        if (visit[val] === 0) {
          q.push(val);
          visit[val] = 1;
        }
      }
    }
  };
  for (let i = 0; i < keys.length; i++) {
    const isVisit = visit[keys[i]];
    if (isVisit === 0) {
      count++;
      visit[keys[i]] = 1;
      bfs(keys[i]);
    }
  }
  console.log(count - 1);
};
ans();
