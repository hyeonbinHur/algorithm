// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const n = input.shift()[0];
  const arr = input.sort((a, b) => a[0] - b[0]);
  arr.forEach((e) => console.log(e));
  let max = 0;
  let ans = Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    ans[i] = 1;
    for (let j = 0; j < i; j++) {
      if (arr[i][1] > arr[j][1]) {
        ans[i] = Math.max(ans[j] + 1, ans[i]);
      }
    }
  }
  console.log(arr.length - Math.max(...ans));
};
ans();

//monolistic stack ?, simply increment?

//가장 긴 증가하는 부분수열
