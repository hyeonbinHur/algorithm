const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(""));
const ans = () => {
  const n1 = input[0].length;
  const n2 = input[1].length;
  const dp = Array.from({ length: n2 + 1 }, () => Array(n1 + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= n2; i++) {
    let iCur = input[1][i - 1];
    for (let j = 1; j <= n1; j++) {
      let jCur = input[0][j - 1];
      if (iCur === jCur) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      max = Math.max(max, dp[i][j]);
    }
    console.log(dp);
  }
  console.log(dp);
  console.log(max);
};
ans();
