// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const n = input.shift()[0];
let max = -Infinity;
let min = Infinity;

const bk = (i, p, k) => {
  if (k === n) {
    if (p > max) {
      max = p;
    }
    if (p < min) {
      min = p;
    }
  } else {
    let newP = p + input[k][i];
    if (i === 0) {
      bk(i, newP, k + 1);
      bk(i + 1, newP, k + 1);
    } else if (i === 1) {
      bk(i, newP, k + 1);
      bk(i + 1, newP, k + 1);
      bk(i - 1, newP, k + 1);
    } else if (i === 2) {
      bk(i, newP, k + 1);
      bk(i - 1, newP, k + 1);
    }
  }
};
const ans = () => {
  bk(0, 0, 0);
  bk(1, 0, 0);
  bk(2, 0, 0);
  console.log(max, min);
};

ans();
