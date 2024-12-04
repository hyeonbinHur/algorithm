const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const dir = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const findAns = (col, row, map) => {
  const graph = Array.from({ length: row }, () => Array(col).fill(0));

  for (let i = 0; i < map.length; i++) {
    const [col, row] = map[i];
    graph[row][col] = 1;
  }
  let ans = 0;
  const dfs = (row, col) => {
    const stack = [[row, col]];
    graph[row][col] = 0;
    while (stack.length) {
      const cur = stack.pop();
      dir.map((e) => {
        const nx = e[1] + cur[1];
        const ny = e[0] + cur[0];

        if (
          nx >= 0 &&
          nx < graph[0].length &&
          ny >= 0 &&
          ny < graph.length &&
          graph[ny][nx] === 1
        ) {
          graph[ny][nx] = 0;
          stack.push([ny, nx]);
        }
      });
    }
  };

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        ans++;
      }
    }
  }
  console.log(ans);
};

const ans = () => {
  for (let i = 0; i < input.length; i++) {
    const [col, row, num] = input[i];
    const map = input.splice(i + 1, num);
    findAns(col, row, map);
  }
};
ans();
