const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");
const T = +input[0];
const ans = () => {
  let idx = 1;
  for (let i = 0; i < T; i++) {
    const bfs = (X, Y) => {
      const deque = [[X, Y]];
      while (deque.length) {
        const [x, y] = deque[0];
        deque.shift();
        if (Math.abs(x - festival[0]) + Math.abs(y - festival[1]) <= 1000) {
          check = true;
          return;
        }
        for (let k = 0; k < N; k++) {
          if (!visited[k]) {
            if (Math.abs(x - place[k][0]) + Math.abs(y - place[k][1]) <= 1000) {
              visited[k] = true;
              deque.push([place[k][0], place[k][1]]);
            }
          }
        }
      }
      return;
    };

    const N = +input[idx];
    idx += 1;
    const visited = Array.from({ length: N }).fill(false);
    const start = input[idx].split(" ").map(Number);
    let place = [];
    let check = false;
    for (let j = 1; j <= N; j++) {
      place.push(input[idx + j].split(" ").map(Number));
    }
    idx += N + 1;
    const festival = input[idx].split(" ").map(Number);
    idx += 1;
    bfs(...start);
    console.log(check ? "happy" : "sad");
  }
};
ans();
