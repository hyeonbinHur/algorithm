const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const [n, r, q] = input.shift();
  const queries = input.splice(input.length - q, q);

  const result = [];
  const semiTree = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < input.length; i++) {
    const [s, e] = input[i];
    semiTree[s].push(e);
    semiTree[e].push(s);
  }
  const counts = Array(n + 1).fill(0);
  let visit = Array(n + 1).fill(0);
  const dfs = (cur) => {
    visit[cur] = true;
    let count = 0;
    for (let i = 0; i < semiTree[cur].length; i++) {
      const val = semiTree[cur][i];
      if (visit[val] === 0) {
        count++;
        count += dfs(val);
      }
    }
    counts[cur] = count + 1;
    return count;
  };
  dfs(r);

  for (let i = 0; i < queries.length; i++) {
    result.push(counts[queries[i]]);
  }
  console.log(result.join("\n"));
};
ans();
