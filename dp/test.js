const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.replace("\r", ""))
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const meetings = [...input].sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  console.log(meetings);

  let ans = 0;
  let currentStart = 0;
  let currentEnd = 0;
  for (let i = 0; i < meetings.length; i++) {
    const [start, end] = meetings[i];
    if (currentEnd <= start) {
      ans++;
      currentStart = start;
      currentEnd = end;
    }
  }
  console.log(ans);
};
ans();
