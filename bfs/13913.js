const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map((e) => Number(e));

const [n, k] = input;
const bfs = () => {
  const q = [[n, 0]];
  const visit = [];
  const path = [];
  while (q.length) {
    const [cur, curTime] = q.shift();
    if (cur === k) {
      val = visit[cur];
      path.push(cur);
      path.push(val);
      while (val !== n) {
        val = visit[val];
        path.push(val);
      }
      console.log(curTime);
      console.log(path.reverse().join(" "));
      break;
    }
    const dir1 = cur + 1;
    const dir2 = cur - 1;
    const dir3 = cur * 2;
    if (!visit[dir1]) {
      visit[dir1] = cur;
      q.push([dir1, curTime + 1]);
    }
    if (!visit[dir2]) {
      visit[dir2] = cur;
      q.push([dir2, curTime + 1]);
    }
    if (!visit[dir3]) {
      visit[dir3] = cur;
      q.push([dir3, curTime + 1]);
    }
  }
};
bfs();
