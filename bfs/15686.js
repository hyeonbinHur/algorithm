// @ts-nocheck

const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const ans = () => {
  const [n, m] = input.shift();
  const hArr = [];
  const cArr = [];
  const newCArr = [];
  const arr = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (input[i][j] === 1) {
        hArr.push([i, j]);
      } else if (input[i][j] === 2) {
        cArr.push([i, j]);
      }
    }
  }
  const visit = Array(cArr.length).fill(false);

  const bk = (k, start) => {
    if (arr.length >= m) {
      newCArr.push([...arr]);
    } else {
      for (let i = start; i < cArr.length; i++) {
        if (visit[i] === false) {
          visit[i] = true;
          arr[k] = cArr[i];
          bk(k + 1, i);
          visit[i] = false;
        }
      }
    }
  };
  for (let i = 0; i < cArr.length; i++) {
    visit[i] = true;
    arr[0] = cArr[i];
    bk(1, i);
    visit[i] = false;
  }

  const findMinChick = (chickens, houses) => {
    let min = 0;
    for (let i = 0; i < houses.length; i++) {
      let curMin = Infinity;
      for (let j = 0; j < chickens.length; j++) {
        curMin = Math.min(
          curMin,
          Math.abs(houses[i][0] - chickens[j][0]) +
            Math.abs(houses[i][1] - chickens[j][1])
        );
      }
      min += curMin;
    }
    return min;
  };
  let ans = Infinity;
  for (let i = 0; i < newCArr.length; i++) {
    ans = Math.min(ans, findMinChick(newCArr[i], hArr));
  }
  console.log(ans);
};
ans();
