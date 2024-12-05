const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m] = input.shift();
  const queries = [];
  for (let i = 0; i < m; i++) {
    queries.push(input.pop());
  }
  const tree = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [start, end, dist] = input[i];
    tree[start].push([end, dist]);
    tree[end].push([start, dist]);
  }
  const dfs = (start, end) => {
    const stack = [[start, 0]];
    const visit = Array(n + 1).fill(false);
    visit[start] = true;
    let dist = 0;
    while (stack.length) {
      const [curNode, curDist] = stack.pop();
      visit[curNode] = true;
      if (curNode === end) {
        dist = curDist;
        break;
      }
      for (let i = 0; i < tree[curNode].length; i++) {
        const [childNode, childDist] = tree[curNode][i];
        if (visit[childNode] === false) {
          stack.push([childNode, curDist + childDist]);
        }
      }
    }
    console.log(dist);
  };
  const ans = [];

  for (let i = queries.length - 1; i >= 0; i--) {
    const [start, end] = queries[i];
    dfs(start, end);
  }
};
ans();
