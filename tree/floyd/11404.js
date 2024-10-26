const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const ans = () => {
  const n = parseInt(input[0], 10);
  const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

  for (let i = 0; i < n; i++) {
    dist[i][i] = 0;
  }

  for (let i = 2; i < input.length; i++) {
    const [a, b, c] = input[i].split(" ").map((e) => Number(e));
    dist[a - 1][b - 1] = Math.min(dist[a - 1][b - 1], c);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < +n; k++) {
        dist[k][j] = Math.min(dist[k][j], dist[k][i] + dist[i][j]);
      }
    }
  }

  for (let i = 0; i < dist.length; i++) {
    for (let j = 0; j < dist[0].length; j++) {
      if (dist[i][j] === Infinity) {
        dist[i][j] = 0;
      }
    }
  }
  console.log(dist.map((arr) => arr.join(" ")).join("\n"));
};
ans();
