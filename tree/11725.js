const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const result = Array(input.length + 2).fill(0);
const dfs = (arr) => {
  const visit = Array(input.length + 2).fill(0);
  const stack = [1];
  visit[1] = 1;
  while (stack.length) {
    const cur = stack.pop();
    for (let i = 0; i < arr[cur].length; i++) {
      const node = arr[cur][i];
      if (visit[node] === 0) {
        visit[node] = true;
        result[node] = cur;
        stack.push(node);
      }
    }
  }
};
const ans = () => {
  const arr = Array.from({ length: input.length + 2 }, () => []);
  for (let i = 0; i < input.length; i++) {
    const [node1, node2] = input[i];
    arr[node1].push(node2);
    arr[node2].push(node1);
  }
  dfs(arr);
  result.splice(0, 2);
  console.log(result.join("\n"));
};
ans();
