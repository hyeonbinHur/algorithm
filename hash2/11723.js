const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "));

const ans = () => {
  let set = new Set();
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const [command, val] = input[i];
    if (command === "add") {
      if (!set.has(val)) {
        set.add(val);
      }
    } else if (command === "remove") {
      if (set.has(val)) {
        set.delete(val);
      }
    } else if (command === "check") {
      if (set.has(val)) {
        result.push(1);
      } else {
        result.push(0);
      }
    } else if (command === "toggle") {
      if (set.has(val)) {
        set.delete(val);
      } else {
        set.add(val);
      }
    } else if (command === "all") {
      set = new Set();
      for (let i = 1; i <= 20; i++) {
        set.add(`${i}`);
      }
    } else if (command === "empty") {
      set = new Set();
    }
  }
  console.log(result.join("\n"));
};
ans();
