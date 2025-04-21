// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
  const n = input.shift()[0];
  let ways = [];
  const arr = [];
  const graph = Array.from({ length: n + 1 }, () => Array(0));
  for (let i = 0; i < input.length; i++) {
    const [s, e, d] = input[i];
    graph[s].push([e, d]);
  }
  const bk = (k, cur, dist) => {
    if (graph[cur].length === 0) {
      ways.push([[...arr.slice(0, k)], dist]);
    } else {
      for (let i = 0; i < graph[cur].length; i++) {
        arr[k] = graph[cur][i][0];
        bk(k + 1, graph[cur][i][0], dist + graph[cur][i][1]);
      }
    }
  };
  for (let i = 0; i < graph[1].length; i++) {
    arr[0] = graph[1][i][0];
    bk(1, graph[1][i][0], graph[1][i][1]);
  }
  let isFound = false;
  if (ways.length < 2) {
    return;
  }
  const combination = [];
  const visit = Array(ways.length).fill(false);
  const arr2 = [];

  const bk2 = (k, start) => {
    if (k === 2) {
      combination.push([...arr2]);
    } else {
      for (let i = start; i < ways.length; i++) {
        if (visit[i] === false) {
          arr2[k] = ways[i];
          visit[i] = true;
          bk2(k + 1, start);
          visit[i] = false;
        }
      }
    }
  };
  for (let i = 0; i < ways.length; i++) {
    arr2[0] = ways[i];
    visit[i] = true;
    bk2(1, i);
    visit[i] = false;
  }
  let max = 0;
  const findMax = (curWays) => {
    let par = 1;

    let ans = curWays[0][1] + curWays[1][1];
    let diff = 0;
    for (let i = 0; i < curWays[1][0].length; i++) {
      const cur = curWays[1][0][i];
      for (let j = 0; j < curWays[0][0].length; j++) {
        if (cur === curWays[0][0][j]) {
          isFound = true;
          par = cur;
          break;
        }
      }
      if (isFound) {
        break;
      }
    }
    const dfs = (cur, dist) => {
      if (cur === par) {
        diff = dist;
      } else {
        for (let i = 0; i < graph[cur].length; i++) {
          dfs(graph[cur][i][0], dist + graph[cur][i][1]);
        }
      }
    };
    dfs(1, 0);

    max = Math.max(max, ans - diff * 2);
  };
  for (let i = 0; i < combination.length; i++) {
    findMax(combination[i]);
  }
  console.log(max);
};
ans();
