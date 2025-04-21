// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const isValid = (colMap, map, l, n) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let toRightFlag = true;
    let toLeftFlag = true;
    for (let j = 0; j < n - 1; j++) {
      if (Math.abs(map[i][j] - map[i][j + 1]) > 1) {
        toRightFlag = false;
      }
      if (map[i][j] === map[i][j + 1]) {
        continue;
      } else {
        if (map[i][j] === map[i][j + 1] - 1) {
          if (colMap[i][j] >= l) {
            colMap[i][j] = 0;
            for (let k = 0; k < l; k++) {
              colMap[i][j - k] = 0;
            }
          } else {
            toRightFlag = false;
            break;
          }
        }
      }
    }
    for (let j = n - 1; j > 0; j--) {
      if (Math.abs(map[i][j] - map[i][j - 1]) > 1) {
        toLeftFlag = false;
      }
      if (map[i][j] === map[i][j - 1]) {
        continue;
      } else {
        if (map[i][j] === map[i][j - 1] - 1) {
          if (colMap[i][j] >= l) {
            colMap[i][j] = 0;
            for (let k = 0; k < l; k++) {
              colMap[i][j + k] = 0;
            }
          } else {
            toLeftFlag = false;
            break;
          }
        }
      }
      if (!toLeftFlag) break;
    }
    if (toLeftFlag && toRightFlag) {
      ans++;
    } else {
      console.log("col", i, toLeftFlag, toRightFlag);
    }
  }
  return ans;
};

const isValidRow = (colMap, map, l, n) => {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let toRightFlag = true;
    let toLeftFlag = true;

    for (let j = 0; j < n - 1; j++) {
      if (Math.abs(map[j][i] - map[j + 1][i]) > 1) {
        toRightFlag = false;
      }
      if (map[j][i] === map[j + 1][i]) {
        continue;
      } else {
        if (map[j][i] === map[j + 1][i] - 1) {
          if (colMap[j][i] >= l) {
            colMap[j][i] = 0;
            for (let k = 0; k < l; k++) {
              colMap[j - k][i] = 0;
            }
          } else {
            toRightFlag = false;
            break;
          }
        }
      }
    }
    for (let j = n - 1; j > 0; j--) {
      if (Math.abs(map[j][i] - map[j - 1][i]) > 1) {
        toLeftFlag = false;
      }
      if (map[j][i] === map[j - 1][i]) {
        continue;
      } else {
        if (map[j][i] === map[j - 1][i] - 1) {
          if (colMap[j][i] >= l) {
            colMap[j][i] = 0;
            for (let k = 0; k < l; k++) {
              colMap[j + k][i] = 0;
            }
          } else {
            toLeftFlag = false;
            break;
          }
        }
      }
      if (!toLeftFlag) break;
    }
    if (toLeftFlag && toRightFlag) {
      ans++;
    } else {
      console.log("row", i, toLeftFlag, toRightFlag);
    }
  }
  return ans;
};

const ans = () => {
  const [n, l] = input.shift();
  const rowMap = Array.from({ length: n }, () => Array(n).fill(0));
  const colMap = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (count === 0) {
        colMap[i][j] = 1;
        count = 1;
      } else {
        if (input[i][j - 1] === input[i][j]) {
          colMap[i][j] = count + 1;
          count++;
        } else {
          colMap[i][j] = 1;
          count = 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (count === 0) {
        rowMap[j][i] = 1;
        count = 1;
      } else {
        if (input[j - 1][i] === input[j][i]) {
          rowMap[j][i] = count + 1;
          count++;
        } else {
          rowMap[j][i] = 1;
          count = 1;
        }
      }
    }
  }
  const mapForRow = input;
  const mapForCol = input;
  console.log(colMap);

  console.log(
    isValid(colMap, mapForCol, l, n) + isValidRow(rowMap, mapForRow, l, n)
  );
};
ans();
