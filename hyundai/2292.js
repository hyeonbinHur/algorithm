const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const ans = () => {
  const n = +input[0];
  let count = 0;
  let current = 1;

  while (1) {
    current += count * 6;
    if (current >= n) {
      break;
    }
    count++;
  }
  console.log(count + 1);
};
ans();
