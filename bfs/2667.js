//입력값을 2d어레이로, 모두 숫자로 받음
/**
 * [
 * [1,1,1],
 * [1,1,1],
 * [0,1,0]
 * ]
 * 과 같은 형식으로 저장
 */
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(""))
  .map((e) => e.map((e2) => Number(e2)));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const ans = [];

const bfs = (row, col) => {
  // 시작 지점을 q에 담고
  const q = [[row, col]];
  //해당 좌표부터 시작
  let count = 1;
  //해당 좌표를 count 했으므로 0으로 바꿔주고
  input[row][col] = 0;
  // bfs가 끝날때 까지 즉, q가 빌때까지 while문 순회
  while (q.length) {
    const current = q.shift();
    dir.map((e) => {
      const nx = current[1] + e[1];
      const ny = current[0] + e[0];
      if (
        // 다음 좌표가 범위 안에있다면
        nx >= 0 &&
        nx < input[0].length &&
        ny >= 0 &&
        ny < input.length &&
        // 다음 좌표가 아파트라면
        input[ny][nx] === 1
      ) {
        // 해당 좌표를 카운트하고 아파트를 0으로 변경
        input[ny][nx] = 0;
        count++;
        // 해당 좌표를 queue에 넣고 bfs를 이어감
        q.push([ny, nx]);
      }
    });
  }
  ans.push(count);
};

const answer = () => {
  //맵 전체를 순회하며 단지의 시작점을 찾음
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      // 단지의 시작점을 찾았다면 bfs를 시작하고 아파트 갯수를 세기 시작
      if (input[i][j] === 1) {
        bfs(i, j);
      }
    }
  }
};
answer();
// 단지의 갯수 출력
console.log(ans.length);
// 단지안의 아파트 갯수를 소트하고 출력
console.log(ans.sort((a, b) => a - b).join("\n"));
