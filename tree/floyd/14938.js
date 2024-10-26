const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m, r] = input.shift();
  const arr = input.shift();

  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i];
    dist[a - 1][b - 1] = Math.min(dist[a - 1][b - 1], c);
    dist[b - 1][a - 1] = Math.min(dist[b - 1][a - 1], c);
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        dist[k][j] = Math.min(dist[k][j], dist[k][i] + dist[i][j]);
        dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
      }
    }
  }

  let max = 0;
  for (let i = 0; i < dist.length; i++) {
    let count = 0;
    for (let j = 0; j < dist[0].length; j++) {
      if (dist[i][j] <= m) {
        count += arr[j];
      }
    }
    max = Math.max(max, count);
  }
  console.log(max);
};
ans();
