const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map((e) => Number(e));

const results = [];

const arr = [];
const visit = Array(input.length).fill(false);
const bk = (k) => {
  if (k === input.length) {
    results.push([...arr]);
  } else {
    for (let i = 0; i < input.length; i++) {
      if (visit[i] === false) {
        arr[k] = input[i];
        visit[i] = true;
        bk(k + 1);
        visit[i] = false;
      }
    }
  }
};

const ans = () => {
  bk(0);
  let max = 0;
  for (let i = 0; i < results.length; i++) {
    let val = 0;
    for (let j = 0; j < results[0].length - 1; j++) {
      val += Math.abs(results[i][j] - results[i][j + 1]);
    }
    max = Math.max(max, val);
  }

  console.log(max);
};

ans();
