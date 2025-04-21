const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

const recur = (og, n) => {
  if (og.length === n.length) {
    if (og === n.join("")) {
      console.log(1);
    } else {
      console.log(0);
    }
  } else if (og.length < n.length) {
    if (n[n.length - 1] === "A") {
      n.pop();
      recur(og, n);
    } else {
      const newN = n.reverse();
      newN.shift();
      recur(og, newN);
    }
  }
};

const ans = () => {
  const temp1 = input[0];
  const temp2 = input[1][0].split("");
  recur(temp1[0], temp2);
};
ans();
