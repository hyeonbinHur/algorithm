// @ts-nocheck
const { copyFileSync } = require("fs");

const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const arr = input.shift();
  input.shift();
  const map = Array.from({ length: arr.length }, () =>
    Array(arr.length).fill(2)
  );
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        map[i][j] = 1;
      } else {
        if (arr[i] === arr[j]) {
          if (map[i - 1][j + 1] === 1 || map[i - 1][j + 1] === 2) {
            map[i][j] = 1;
          } else {
            map[i][j] = 0;
          }
        } else {
          map[i][j] = 0;
        }
      }
    }
  }
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    let [start, end] = input[i];
    ans.push(map[end - 1][start - 1]);
  }
  console.log(ans.join("\n"));
};
ans();
