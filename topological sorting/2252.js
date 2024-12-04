const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.replace("\r", ""))
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, m] = input.shift();
  const arr = [...input];
  const indegree = Array(n).fill(0);

  // 인접 리스트 생성
  const adjList = Array.from({ length: n }, () => []);

  for (let i = 0; i < arr.length; i++) {
    const [prev, next] = arr[i];
    indegree[next - 1]++;
    adjList[prev - 1].push(next - 1);
  }
  const queue = [];
  const result = [];

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  console.log(adjList);
  console.log(queue);
  console.log(indegree);

  while (queue.length) {
    const current = queue.shift();
    result.push(current + 1);

    for (let next of adjList[current]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  console.log(result.join(" "));
};
ans();
