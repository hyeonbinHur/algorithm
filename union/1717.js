// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, m] = input.shift();
const p = Array.from({ length: n + 1 }, (_, i) => i);

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
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i];
    if (a === 1) {
      if (findPar(b) === findPar(c)) {
        ans.push("YES");
      } else {
        ans.push("NO");
      }
    } else {
      unionFind(Math.min(b, c), Math.max(b, c));
    }
  }
  console.log(ans.join("\n"));
};
ans();
