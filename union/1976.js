// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const n = input.shift()[0];
const p = Array.from({ length: n }, (_, i) => i);
const findPar = (node) => {
  if (node === p[node]) {
    return node;
  } else {
    p[node] = findPar(p[node]);
    return p[node];
  }
};
const unionFind = (a, b) => {
  p[findPar(b)] = p[findPar(a)];
};
const ans = () => {
  input.shift();
  const check = input.pop();
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[i][j] === 1) {
        unionFind(Math.min(i, j), Math.max(i, j));
      }
    }
  }
  const temp = findPar(check[0] - 1);
  let ans = "YES";
  for (let i = 0; i < check.length; i++) {
    if (findPar(check[i] - 1) !== temp) {
      ans = "NO";
      break;
    }
  }
  console.log(ans);
};
ans();
