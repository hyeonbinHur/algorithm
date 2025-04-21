const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const [h, k, r] = input[0].split(" ").map(Number);

const leaf = Math.pow(2, h); // 리프 노드 개수
const n = Math.pow(2, h + 1) - 1; // 전체 노드 개수

const works = Array.from({ length: n }, () => [[], []]);

// 리프 노드의 작업 추가
for (let i = n - leaf; i < n; i++) {
  const jobs = input[i - (n - leaf) + 1].split(" ").map(Number);
  works[i][0].push(...jobs);
}

let answer = 0;
let current = 1;

while (current <= r) {
  if (current % 2 === 1 && works[0][0].length > 0) {
    answer += works[0][0].shift();
  } else if (current % 2 === 0 && works[0][1].length > 0) {
    answer += works[0][1].shift();
  }

  for (let i = 1; i < n - leaf; i++) {
    const parent = Math.floor((i - 1) / 2);
    if (current % 2 === 1 && works[i][0].length > 0) {
      const task = works[i][0].shift();
      if (i % 2 === 1) {
        works[parent][0].push(task);
      } else {
        works[parent][1].push(task);
      }
    } else if (current % 2 === 0 && works[i][1].length > 0) {
      const task = works[i][1].shift();
      if (i % 2 === 1) {
        works[parent][0].push(task);
      } else {
        works[parent][1].push(task);
      }
    }
  }

  for (let i = n - leaf; i < n; i++) {
    const parent = Math.floor((i - 1) / 2);
    if (works[i][0].length > 0) {
      const task = works[i][0].shift();
      if (i % 2 === 1) {
        works[parent][0].push(task);
      } else {
        works[parent][1].push(task);
      }
    }
  }

  current++;
}

console.log(answer);
