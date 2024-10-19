const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  let min = Infinity;
  for (let i = 1; i < 1 << input.length; i++) {
    let val = i.toString(2).padStart(input.length, "0");
    let sour = 1;
    let bit = 0;
    for (let j = 0; j < input.length; j++) {
      if (val[j] === "1") {
        sour *= input[j][0];
        bit += input[j][1];
      }
    }
    min = Math.min(min, Math.abs(sour - bit));
  }
  console.log(min);
};
ans();
