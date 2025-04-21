// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const ans = () => {
  let n = +input.shift();
  let ans = 0;
  const arr = input[0]
    .split(" ")
    .map((e) => Number(e))
    .sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 2 <= n) {
      ans += arr[i];
      n -= arr[i] + 1;
    } else {
      ans += n - 1;
      break;
    }
  }
  console.log(ans);
};
ans();
