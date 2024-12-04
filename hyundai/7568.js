const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const ans = () => {
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    const [curH, curW] = input[i].split(" ").map((e) => Number(e));
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      const [nH, nW] = input[j].split(" ").map((e) => Number(e));
      if (i !== j) {
        if (nH > curH && nW > curW) {
          count++;
        }
      }
    }
    ans.push(count + 1);
  }
  console.log(ans.join(" "));
};
ans();
