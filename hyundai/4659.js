const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const vowl = ["a", "e", "i", "o", "u"].map(
  (e) => e.charCodeAt() - "a".charCodeAt()
);

const isValid = (string) => {
  let vowlCount = 0;
  let consCount = 0;
  for (let i = 0; i < string.length; i++) {
    const cur = string[i].charCodeAt() - "a".charCodeAt();
    const idx = vowl.indexOf(cur);
    if (i >= 1) {
      if (string[i] === string[i - 1]) {
        if (string[i] !== "e" && string[i] !== "o") {
          return false;
        }
      }
    }

    if (idx === -1) {
      consCount++;
      vowlCount = 0;
    } else {
      vowlCount++;
      consCount = 0;
    }
    if (vowlCount === 3 || consCount === 3) {
      return false;
    }
  }
  let vowl2 = 0;
  const testArr = string
    .split(" ")
    .map((e) => e.charCodeAt() - "a".charCodeAt());
  vowl.forEach((e) => {
    const idx = testArr.indexOf(e);
    if (idx !== -1) {
      vowl2 = 1;
    }
  });
  if (vowl2 === 0) return false;
  return true;
};

const ans = () => {
  input.pop();
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    if (isValid(input[i])) {
      ans.push(`<${input[i]}> is acceptable.`);
    } else {
      ans.push(`<${input[i]}> is not acceptable.`);
    }
  }
  console.log(ans.join("\n"));
};
ans();
