// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, m] = input.shift();
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
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    const [n1, n2] = input[i];
    if (findPar(n1) === findPar(n2)) {
      ans = i + 1;
      break;
    } else {
      unionFind(Math.min(n1, n2), Math.max(n1, n2));
    }
  }
  console.log(ans);
};
ans();
