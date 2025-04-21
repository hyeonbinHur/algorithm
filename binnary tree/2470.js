// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .splice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const arr = input[0].sort((a, b) => a - b);

  let curLeft = 0;
  let curRight = arr.length - 1;
  let ans = Infinity;
  let leftAns = arr[curLeft];
  let rightAns = arr[curRight];

  while (1) {
    if (curLeft < 0) break;
    if (curRight >= arr.length) break;
    if (curLeft === curRight) break;

    if (Math.abs(arr[curLeft] + arr[curRight]) < Math.abs(ans)) {
      ans = arr[curLeft] + arr[curRight];
      leftAns = arr[curLeft];
      rightAns = arr[curRight];
    }
    if (arr[curLeft] + arr[curRight] > 0) {
      curRight--;
    } else if (arr[curLeft] + arr[curRight] < 0) {
      curLeft++;
    } else {
      break;
    }
  }
  console.log(leftAns, rightAns);
};
ans();
