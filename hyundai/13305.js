const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => BigInt(e2)));

const ans = () => {
  let ans = BigInt(0);
  let current = 0;
  for (let i = 1; i < input[1].length; i++) {
    ans += input[1][current] * input[0][i - 1];
    if (input[1][i] < input[1][current]) {
      current = i;
    }
  }
  console.log(ans.toString());
};
ans();
