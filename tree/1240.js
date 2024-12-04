const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const [n, m] = input.shift();

const ans = () => {
  const queries = input.splice(input.length - m, m);
  const tree = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [s, e, d] = input[i];
    tree[e].push([s, d]);
    tree[s].push([e, d]);
  }
  const result = [];
  const bfs = (start, end) => {
    const visit = Array(n + 1).fill(0);
    const q = [[start, 0]];
    visit[start] = 1;
    while (q.length) {
      const [node, dist] = q.shift();
      if (node === end) {
        result.push(dist);
        break;
      }
      for (let i = 0; i < tree[node].length; i++) {
        const [cur, dist2] = tree[node][i];
        if (visit[cur] === 0) {
          q.push([cur, dist + dist2]);
          visit[cur] = 1;
        }
      }
    }
  };
  for (let i = 0; i < queries.length; i++) {
    const [e, s] = queries[i];
    bfs(e, s);
  }
  console.log(result.join("\n"));
};
ans();
