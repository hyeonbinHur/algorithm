const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const ans = () => {
  const [n, k] = input
    .shift()
    .split(" ")
    .map((e) => Number(e));

  const newArr = input
    .map((e) => e.split(" "))
    .map((e) => e.map((e2) => Number(e2)))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[2] === b[2]) {
          return a[3] - b[3];
        } else {
          return a[2] - b[2];
        }
      }
      if (a[2] === b[2]) {
        if (a[1] === b[1]) {
          return a[3] - b[3];
        } else {
          return a[1] - b[1];
        }
      } else {
        return a[1] - b[1];
      }
    });
  let ans = 0;

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][0] === k) {
      ans = i;
      break;
    }
  }
  let count = 0;
  const [num, g, s, b] = newArr[ans];
  for (let i = 0; i < ans; i++) {
    const [tn, tg, ts, tb] = newArr[i];
    if (tg === g && ts === s && tb === b) {
      count++;
    }
  }
  console.log(ans - count + 1);
};
ans();
