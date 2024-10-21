const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const results = [];

const findTree = (t, nodes, arr) => {
  if (nodes === 0) return;
  const tree = Array.from({ length: nodes + 1 }, () => []);

  for (let i = 0; i < arr.length; i++) {
    const [s, e] = arr[i];
    if (!tree[s]) {
      tree[s] = [];
    }
    if (!tree[e]) {
      tree[e] = [];
    }
    tree[e].push(s);
    tree[s].push(e);
  }
  const visit = Array(nodes + 1).fill(0);
  const isCycle = (par, cur) => {
    visit[cur] = true;
    for (let i = 0; i < tree[cur].length; i++) {
      const n = tree[cur][i];
      if (visit[n] === 0) {
        if (isCycle(cur, n)) return true;
      } else if (par !== n) {
        return true;
      }
    }
    return false;
  };

  let count = 0;

  for (let i = 1; i <= nodes; i++) {
    if (visit[i] === 0) {
      if (!isCycle(i, i)) {
        count++;
      }
    }
  }

  if (count === 1) {
    results.push(`Case ${t}: There is one tree.`);
  } else if (count > 1) {
    results.push(`Case ${t}: A forest of ${count} trees.`);
  } else {
    results.push(`Case ${t}: No trees.`);
  }
};

const ans = () => {
  for (let i = 0; i < input.length; i++) {
    const [n, e] = input[i];
    const arr = input.splice(i + 1, e);
    findTree(i + 1, n, arr);
  }
  console.log(results.join("\n"));
};

ans();
