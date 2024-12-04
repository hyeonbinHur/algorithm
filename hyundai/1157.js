const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const ans = () => {
  const str = input[0]
    .toLowerCase()
    .split("")
    .map((e) => e.charCodeAt() - 97);
  const arr = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    arr[str[i]]++;
  }
  const max = Math.max(...arr);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) count++;
  }
  if (count > 1) {
    console.log("?");
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === max) {
        console.log(String.fromCharCode(i + 65));
      }
    }
  }
};
ans();
