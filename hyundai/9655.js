const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")[0];
const ans = () => {
  let count = parseInt(+input / 3);
  const n = +input % 3;
  if (n === 1) {
    count += 1;
  } else if (n === 2) {
    count += 2;
  }
  console.log(count % 2 === 0 ? "CY" : "SK");
};
ans();
