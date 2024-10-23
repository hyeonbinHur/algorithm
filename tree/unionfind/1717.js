const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, m] = input.shift();
const p = Array.from({ length: n + 1 }, (_, i) => i);
const findParent = (node) => {
  if (node !== p[node]) {
    p[node] = findParent(p[node]);
  }
  return p[node];
};
const unionfind = (a, b) => {
  p[findParent(b)] = p[findParent(a)];
};
const ans = () => {
  const result = [];
  for (const [q, a, b] of input) {
    if (q === 1) {
      if (findParent(a) === findParent(b)) {
        result.push("YES");
      } else {
        result.push("NO");
      }
    } else {
      unionfind(Math.min(a, b), Math.max(a, b));
    }
  }
  console.log(result.join("\n"));
};
ans();
