const input = require("fs").readFileSync(0).toString().trim().split("\n");

const [h, k, r] = input[0].split(" ").map(Number);

const leaf = Math.pow(2, h); // 리프 노드 개수
const n = Math.pow(2, h + 1) - 1; // 전체 노드 개수

// 배열 이진트리
const works = Array.from({ length: n }, () => [[], []]);

// 말단 노드에 작업 추가
for (let i = n - leaf; i < n; i++) {
  const jobs = input[i - (n - leaf) + 1].split(" ").map(Number);
  works[i][0].push(...jobs);
}

let answer = 0;
let current = 1;

while (current <= r) {
  //부사장 일 처리
  if (current % 2 === 1 && works[0][0].length > 0) {
    answer += works[0][0].shift();
  } else if (current % 2 === 0 && works[0][1].length > 0) {
    answer += works[0][1].shift();
  }

  // 중간직원 일 처리
  // 0은 부서장 n-leaf 이후로는 말단 직원 범위는 1 ~ n-leaf까지
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

  // 말단직원 일처리
  // 전체 노드 갯수 - leaf는 말단직원 시작.
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
