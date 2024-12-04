const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((e) => Number(e));

const ans = () => {
  const [H, W, N, M] = input;
  const row = Math.ceil(H / (N + 1));
  const col = Math.ceil(W / (M + 1));
  console.log(row * col);
};
ans();
