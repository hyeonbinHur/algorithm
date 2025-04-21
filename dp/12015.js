const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map((e) => Number(e));
const ans = () => {
  const arr = input;
  const dp = Array(arr.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        if (dp[i] <= dp[j]) {
          dp[i] = Math.max(dp[i], dp[j]);
          dp[i]++;
        }
      }
    }
  }
  console.log(Math.max(...dp));
};
ans();
