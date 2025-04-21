// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace("\r", ""))
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const result = [];
const [n, m] = input.shift();
const arr = input.shift().sort((a, b) => a - b);
const isCheck = (value) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Math.floor(arr[i] / value);
  }
  if (count >= n) {
    return true;
  } else {
    return false;
  }
};
const binarySearch = (start, end) => {
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    const flag = isCheck(mid);
    if (flag) {
      result.push(mid);
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

const ans = () => {
  binarySearch(0, Math.max(...arr));
  console.log(Math.max(...result));
};
ans();
