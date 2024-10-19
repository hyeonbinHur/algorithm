const sol = (input) => {
  const [N, K] = input.split(" ").map(Number);
  const path = [];
  const visit = [];
  const bfs = () => {
    const queue = [[N, 0]];
    visit[N] = 1;
    while (queue.length) {
      const [cur, time] = queue.shift();
      if (cur === K) {
        console.log(time);
        const result = [];
        result.push(cur);
        let val = path[cur];
        result.push(val);
        while (val !== N) {
          val = path[val];
          result.push(val);
        }
        console.log(result.reverse().join(" "));
        break;
      }
      for (const next of [cur - 1, cur + 1, cur * 2]) {
        if (next >= 0 && next <= 100000 && !visit[next]) {
          path[next] = cur;
          visit[next] = 1; // 방문 체크
          queue.push([next, time + 1]); // 큐에 추가
        }
      }
    }
  };
  bfs();
};
// 입력 파일에서 데이터를 읽어옴 (표준 입력)
const input = require("fs").readFileSync("./dev/stdin.txt", "utf-8").trim();
sol(input);
