const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(""));

const n = input.shift();
const temp = input[0];
const map = Array.from({ length: n }, () => Array.from({ length: n }));
const arr = Array.from({ length: n });

const isValid = (index) => {
  const newArr = arr.slice(index, n);

  for (let i = n - 1; i >= index; i--) {
    for (let j = n - 1; j >= index; j--) {}
  }

  return true;
};
const bk = (k) => {
  if (k === 0) {
  } else {
    if (map[k - 1][k - 1] === "+") {
      for (let i = 1; i < 10; i++) {}
    } else if (map[k - 1][k - 1] === "-") {
      for (let i = -10; i < -1; i++) {}
    } else if (map[k - 1][k - 1] === "0") {
      arr[k - 1] = 0;
    }
  }
};

const ans = () => {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= i; j--) {
      const val = temp.pop();
      map[i][j] = val;
    }
  }

  bk(n);
};

ans();

const arr1 = [0, 1, 2, 3, 4];
console.log(arr1.slice(3, arr1.length));
