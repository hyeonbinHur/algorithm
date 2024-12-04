const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m] = input.shift();
  const ind = Array(n + 1).fill(0);
  const adj = Array.from({ length: n + 1 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [prev, next] = input[i];
    ind[next]++;
    adj[prev].push(next);
  }
  const q = [];
  for (let i = 1; i <= n; i++) {
    if (ind[i] === 0) {
      q.push(i);
    }
  }

  const ans = [];
  while (q.length) {
    let min = Infinity;
    let idx = 0;
    for (let i = 0; i < q.length; i++) {
      if (q[i] < min) {
        min = q[i];
        idx = i;
      }
    }
    ans.push(min);
    q.splice(idx, 1);
    for (let i = adj[min].length - 1; i >= 0; i--) {
      const val = adj[min][i];
      ind[val]--;
      if (ind[val] === 0) {
        q.push(val);
      }
    }
  }
  console.log(ans.join(" "));
};
ans();
