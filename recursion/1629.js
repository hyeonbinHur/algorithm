const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("/n")[0]
  .split(" ")
  .map((e) => BigInt(e));

const [a, b, c] = input;
const recursion = (curA, curB) => {
  if (curB === 1n) {
    return curA % c;
  } else if (curB % 2n === 0n) {
    const cur = recursion(curA, curB / 2n);
    return (cur * cur) % c;
  } else {
    const cur = recursion(curA, (curB - 1n) / 2n);
    return (cur * cur * curA) % c;
  }
};
const ans = () => {
  console.log(recursion(a, b).toString());
};

if (b === 0n) {
  return 1;
} else {
  ans();
}
