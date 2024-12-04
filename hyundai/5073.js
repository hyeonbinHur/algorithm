const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const ans = [];
  for (let i = 0; i < input.length - 1; i++) {
    const tri = input[i].sort((a, b) => a - b);
    if (tri[0] === tri[1] && tri[1] === tri[2]) {
      ans.push("Equilateral");
    } else {
      if (tri[1] === tri[0] || tri[1] === tri[2]) {
        if (tri[0] + tri[1] > tri[2]) {
          ans.push("Isosceles");
        } else {
          ans.push("Invalid");
        }
      } else if (tri[0] + tri[1] > tri[2]) {
        ans.push("Scalene");
      } else {
        ans.push("Invalid");
      }
    }
  }
  console.log(ans.join("\n"));
};
ans();
