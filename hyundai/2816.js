const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1);
const ans = () => {
  const set = new Set();
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    let [comment, value] = input[i].split(" ");
    value = Number(value);
    // console.log(comment);
    if (comment === "add") {
      set.add(value);
    } else if (comment === "remove") {
      set.delete(value);
    } else if (comment === "check") {
      if (set.has(value)) {
        console.log(1);
      } else {
        console.log(0);
      }
    } else if (comment === "toggle") {
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
    } else if (comment === "all") {
      set.clear();
      for (let j = 1; j <= 20; j++) {
        set.add(j);
      }
    } else if (comment === "empty") {
      set.clear();
    }
  }
};
ans();
