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
  const map = input;
  const visit = Array.from({ length: n }, () => Array(n).fill(-1));
  visit[n - 1][n - 1] = 1;
  //   console.log(visit);
  let ans = 0;
  const dfs = (row, col, dir) => {
    if (visit[row][col] !== -1) {
      ans++;
      return visit[row][col];
    } else {
      let count = 0;
      if (dir === 0) {
        if (col + 1 < n && map[row][col + 1] !== 1) {
          count += dfs(row, col + 1, 0);
        }
        if (
          row + 1 < n &&
          col + 1 < n &&
          map[row + 1][col + 1] !== 1 &&
          map[row + 1][col] !== 1 &&
          map[row][col + 1] !== 1
        ) {
          count += dfs(row + 1, col + 1, 1);
        }
      } else if (dir === 1) {
        if (col + 1 < n && map[row][col + 1] !== 1) {
          count += dfs(row, col + 1, 0);
        }
        if (
          row + 1 < n &&
          col + 1 < n &&
          map[row + 1][col + 1] !== 1 &&
          map[row + 1][col] !== 1 &&
          map[row][col + 1] !== 1
        ) {
          count += dfs(row + 1, col + 1, 1);
        }
        if (row + 1 < n && map[row + 1][col] !== 1) {
          count += dfs(row + 1, col, 2);
        }
      } else if (dir === 2) {
        if (
          row + 1 < n &&
          col + 1 < n &&
          map[row + 1][col + 1] !== 1 &&
          map[row + 1][col] !== 1 &&
          map[row][col + 1] !== 1
        ) {
          count += dfs(row + 1, col + 1, 1);
        }
        if (row + 1 < n && map[row + 1][col] !== 1) {
          count += dfs(row + 1, col, 2);
        }
      }
      //   visit[row][col] = count;
      return count;
    }
  };
  dfs(0, 1, 0);
  //   console.log(visit);
  console.log(ans);
};
ans();
