const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

const findResult = (array) => {
  let count = 0;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[i] > array[j]) {
        count++;
      }
    }
  }
  return count;
};

const ans = () => {
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    const arr = input[i].split(" ").map((e) => Number(e));
    arr.shift();
    ans.push(findResult(arr));
  }
  for (let i = 0; i < ans.length; i++) {
    console.log(`${i + 1} ${ans[i]}`);
  }
};
ans();
