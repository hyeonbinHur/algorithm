const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => BigInt(e2)));
const visit = Array(input.length).fill(false);
const arr = [];
let max = BigInt(0);
const bk = (k, to, start) => {
  if (k === input.length - 1) {
    if (input[to][start] !== 0n) {
      arr[input.length - 1] = input[to][start];
      if (max === BigInt(0)) {
        max = arr.reduce((a, b) => a + b, BigInt(0));
      } else {
        max =
          max < arr.reduce((a, b) => a + b, BigInt(0))
            ? max
            : arr.reduce((a, b) => a + b, BigInt(0));
      }
    }
  } else {
    for (let i = 0; i < input.length; i++) {
      if (visit[i] === false && input[to][i] !== 0n) {
        arr[k] = input[to][i];
        visit[i] = true;
        bk(k + 1, i, start);
        visit[i] = false;
      }
    }
  }
};
for (let i = 0; i < input.length; i++) {
  visit[i] = true;
  bk(0, i, i);
  visit[i] = false;
}

console.log(max.toString());
