const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const n = input.shift();
const m = input.shift();
const p = Array.from({ length: +n }, (_, i) => i);
const ans = () => {
  const check = input
    .pop()
    .split(" ")
    .map((e) => Number(e));
  const tree = input
    .map((e) => e.split(" "))
    .map((e) => e.map((e2) => Number(e2)));

  const findP = (node) => {
    if (node !== p[node]) {
      p[node] = findP(p[node]);
    }
    return p[node];
  };

  const union = (a, b) => {
    const pa = findP(a);
    const pb = findP(b);
    p[pa] = pb;
  };
  for (let i = 0; i < tree.length; i++) {
    for (let j = 0; j < tree[0].length; j++) {
      const val = tree[i][j];
      if (val === 1) {
        union(Math.max(i, j), Math.min(i, j));
      }
    }
  }
  const temp = findP(p[check[0] - 1]);
  let ans = "YES";
  for (let i = 1; i < check.length; i++) {
    if (findP(check[i] - 1) !== temp) {
      ans = "NO";
      break;
    }
  }
  console.log(ans);
};
ans();
