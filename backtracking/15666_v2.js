const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const [m, n] = input
  .shift()
  .split(" ")
  .map((e) => Number(e));
const arr = input[0]
  .split(" ")
  .map((e) => Number(e))
  .sort((a, b) => a - b);

const answer = [];
const cur = [];
const visit = Array(m).fill(false);

const backTrakin = (k) => {
  if (k === n) {
    if (answer.indexOf(cur.join(" ")) === -1) {
      answer.push(cur.join(" "));
    }
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= cur[k - 1]) {
        cur[k] = arr[i];
        backTrakin(k + 1, i);
      }
    }
  }
};
const ans = () => {
  for (let i = 0; i < arr.length; i++) {
    cur[0] = arr[i];
    backTrakin(1, i);
  }
  console.log(answer.join("\n"));
};
ans();
