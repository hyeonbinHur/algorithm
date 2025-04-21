// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => Number(e));

const ans = () => {
  const n = input.shift();
  const dp = Array(n).fill(0);
  dp[0] = input[0];
  dp[1] = input[0] + input[1];
  dp[2] = Math.max(dp[0] + input[2], dp[1], input[1] + input[2]);
  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 1],
      dp[i - 2] + input[i],
      dp[i - 3] + input[i - 1] + input[i]
    );
  }
  console.log(dp[n - 1]);
};
ans();
