//루트가 어디?
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const [n, e] = input.shift();
const p = Array.from({ length: n + 1 }, (_, i) => i);
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

const ans = () => {
  let cutCount = 0;
  for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i];
    if (findP(a) === findP(b)) {
      cutCount++;
    } else {
      union(Math.max(findP(a), findP(b)), Math.min(findP(a), findP(b)));
    }
  }

  const result = new Set();
  for (let i = 1; i <= n; i++) {
    const curP = findP(i);
    if (!result.has(curP)) {
      result.add(curP);
    }
  }

  console.log(result.size - 1 + cutCount);
};
ans();
