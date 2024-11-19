const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m] = input.shift();
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let i = 0; i < m; i++) {
    const [a, b, c] = input[i];
    dist[a - 1][b - 1] = Math.min(dist[a - 1][b - 1], c);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        dist[k][j] = Math.min(dist[k][j], dist[k][i] + dist[i][j]);
      }
    }
  }

  const cities = input.pop();
  const result = {};
  let ans = Infinity;
  for (let i = 0; i < dist[0].length; i++) {
    let max = 0;
    for (let j = 0; j < cities.length; j++) {
      max = Math.max(max, dist[cities[j] - 1][i] + dist[i][cities[j] - 1]);
    }
    ans = Math.min(ans, max);
    result[i + 1] = max;
  }
  const keys = Object.keys(result);
  const results = [];
  for (let i = 0; i < keys.length; i++) {
    if (result[keys[i]] === ans) {
      results.push(keys[i]);
    }
  }
  console.log(results.join(" "));
};
ans();
