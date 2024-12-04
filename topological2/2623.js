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
    const arr = [...input[i]];
    arr.shift();
    for (let j = 1; j < arr.length; j++) {
      const prev = arr[j - 1];
      const next = arr[j];
      ind[next]++;
      adj[prev].push(next);
    }
  }
  const q = [];
  for (let i = 1; i < ind.length; i++) {
    if (ind[i] === 0) {
      q.push(i);
    }
  }
  const ans = [];
  while (q.length) {
    const cur = q.shift();
    ans.push(cur);
    for (let i = 0; i < adj[cur].length; i++) {
      const current = adj[cur][i];
      ind[current]--;
      if (ind[current] === 0) {
        q.push(current);
      }
    }
  }

  const addArr = ind.reduce((a, b) => a + b, 0);
  if (addArr !== 0) {
    console.log(0);
  } else {
    console.log(ans.join("\n"));
  }
};
ans();
