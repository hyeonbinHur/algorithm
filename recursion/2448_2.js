// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const ans = () => {
  const n = +input[0];
  const ans = Array.from({ length: n }, () => Array(n * 2 - 1).fill(" "));
  const recur = (col, row, size) => {
    if (size === 3) {
      ans[row][col + 2] = "*";
      ans[row + 1][col + 1] = "*";
      ans[row + 1][col + 3] = "*";
      for (let i = col; i < col + 5; i++) {
        ans[row + 2][i] = "*";
      }
      return;
    }
    recur(col + size / 2, row, size / 2);
    recur(col, row + size / 2, size / 2);
    recur(col + size, row + size / 2, size / 2);
  };
  recur(0, 0, n);
  console.log(ans.map((e) => e.join("")).join("\n"));
};
ans();
