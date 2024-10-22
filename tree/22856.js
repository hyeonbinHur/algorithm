const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const n = input.shift();
  const right = Array.from({ length: n[0] + 1 }, () => -1);
  for (let i = 0; i < input.length; i++) {
    const [node, ln, rn] = input[i];
    right[node] = rn;
  }
  let right_node = 0;

  const dfs = (current) => {
    if (current === -1) return;
    right_node++;
    dfs(right[current]);
  };
  dfs(right[input[0][0]]);
  console.log((n[0] - 1) * 2 - right_node);
};
ans();
