const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const arr = [];
const visit = Array(input.length + 1).fill(false);
let min = Infinity;
const bk = (k, start) => {
  if (k === input.length / 2) {
    let teamA = [];
    let teamB = [];
    for (let i = 0; i < input.length; i++) {
      if (visit[i] === true) {
        teamA.push(i);
      } else {
        teamB.push(i);
      }
    }
    let valA = 0;
    let valB = 0;
    for (let i = 0; i < teamA.length; i++) {
      for (let j = i + 1; j < teamA.length; j++) {
        valA += input[teamA[i]][teamA[j]] + input[teamA[j]][teamA[i]];
        valB += input[teamB[i]][teamB[j]] + input[teamB[j]][teamB[i]];
      }
    }
    min = Math.min(min, Math.abs(valA - valB));
  } else {
    for (let i = start; i < input.length; i++) {
      if (visit[i] === false) {
        arr[k] = i;
        visit[i] = true;
        bk(k + 1, i);
        visit[i] = false;
      }
    }
  }
};
bk(0, 0);
console.log(min);
