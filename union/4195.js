const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .slice(1);

const parMap = new Map();

const findPar = (f) => {
  if (parMap.get(f) === f) {
    return f;
  } else {
    parMap.set(f, findPar(parMap.get(f)));
    return parMap.get(f);
  }
};

const unionFind = (f1, f2) => {
  const pf1 = findPar(f1);
  const pf2 = findPar(f2);
  parMap.set(pf2, pf1);
};

const findFriends = (friends) => {
  parMap.clear();
  for (let i = 0; i < friends.length; i++) {
    const [f1, f2] = friends[i].sort();
    if (!parMap.has(f1)) {
      parMap.set(f1, f1);
    }
    if (!parMap.has(f2)) {
      parMap.set(f2, f2);
    }
    unionFind(f1, f2);
    const curPar = parMap.get(f1);
    let count = 0;
    for (let keys of parMap) {
      if (keys[1] === curPar) count++;
    }
    console.log(parMap);
    console.log(count);
  }
};

const ans = () => {
  for (let i = 0; i < input.length; i++) {
    const tc = +input[i][0];
    const tcs = input.splice(i + 1, tc);
    findFriends(tcs);
  }
};
ans();
