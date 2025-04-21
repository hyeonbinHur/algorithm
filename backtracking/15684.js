// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
let answer = -1;

const runGame = (map, start) => {
  let row = 0;
  let col = start;

  while (1) {
    if (row >= map.length) {
      break;
    }
    if (map[row][col] === 1) {
      col++;
    } else if (map[row][col - 1] === 1) {
      col--;
    }
    row++;
  }
  return col === start;
};
const startGame = (map) => {
  for (let i = 0; i < map[0].length; i++) {
    if (runGame(map, i) === false) {
      return false;
    }
  }
  return true;
};
const bk = (map, level, current, num, k) => {
  if (answer !== -1) return;

  if (num > k) {
    return;
  } else {
    if (startGame(map)) {
      answer = num;
      return;
    } else {
      for (let i = level; i < map.length; i++) {
        for (let j = 0; j < map[0].length - 1; j++) {
          if (map[i][j] === 0 && map[i][j - 1] !== 1 && map[i][j + 1] !== 1) {
            map[i][j] = 1;
            bk(map, i, j, num + 1, k);
            map[i][j] = 0;
          }
        }
      }
    }
  }
};

const ans = () => {
  const [n, m, h] = input.shift();
  const arr = input;
  const map = Array.from({ length: h }, () => Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    const [level, start] = arr[i];
    map[level - 1][start - 1] = 1;
  }
  if (startGame(map)) {
    console.log(0);
    return;
  }
  const newMap = JSON.parse(JSON.stringify(map));
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length - 1; j++) {
      if (
        newMap[i][j] === 0 &&
        newMap[i][j - 1] !== 1 &&
        newMap[i][j + 1] !== 1
      ) {
        newMap[i][j] = 1;
        bk(newMap, i, j, 1, 3);
        newMap[i][j] = 0;
      }
    }
  }
  console.log(answer);
};

ans();
