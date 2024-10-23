const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, m] = input.shift();
const p = Array.from({ length: n }, (_, i) => i);

const find = (node) => {
  if (node !== p[node]) {
    p[node] = find(p[node]);
  }
  return p[node];
};
const union = (a, b) => {
  const pa = find(a);
  const pb = find(b);
  p[pa] = pb;
};
const ans = () => {
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i];
    if (find(a) === find(b)) {
      ans = i + 1;
      break;
    }
    union(Math.max(a, b), Math.min(a, b));
  }
  console.log(ans);
};
ans();
