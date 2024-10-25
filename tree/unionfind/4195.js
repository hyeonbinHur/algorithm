const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n");

const runTestCase = (queries) => {
  const findP = (node) => {
    if (node !== p[node].parent) {
      p[node].parent = findP(p[node].parent);
    }
    return p[node].parent;
  };
  const union = (a, b) => {
    const pa = findP(a); // barney
    const pb = findP(b); //fred
    p[pa].parent = pb;
    p[pb].num += p[pa].num;
  };

  const p = {}; // num, parents
  const results = [];
  for (let i = 0; i < queries.length; i++) {
    const [f1, f2] = queries[i].split(" ");
    if (!p[f1]) {
      p[f1] = {};
      p[f1].parent = f1;
      p[f1].num = 1;
    }
    if (!p[f2]) {
      p[f2] = {};
      p[f2].parent = f2;
      p[f2].num = 1;
    }
    //사전순으로 작은거의 부모는 큰거
    if (findP(f1) !== findP(f2)) {
      const result = f1.localeCompare(f2);
      if (result < 0) {
        union(f1, f2); //f1의 부모는 f2
        results.push(p[findP(f2)].num);
      } else {
        union(f2, f1); //f2의 부모는 f1
        results.push(p[findP(f1)].num);
      }
    } else {
      results.push(p[findP(f1)].num);
    }
  }
  console.log(results.join("\n"));
};

const ans = () => {
  const t = Number(input.shift());
  for (let i = 0; i < input.length; i++) {
    const n = input[i];
    const queries = input.splice(i + 1, n);
    runTestCase(queries);
  }
};
ans();
