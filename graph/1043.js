// @ts-nocheck
const { captureRejectionSymbol } = require("events");

// @ts-nocheck
const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));
const ans = () => {
  const map = new Map();
  const [n, m] = input.shift();
  const knows = input.shift().slice(1);

  for (let i = 0; i < knows.length; i++) {
    map.set(knows[i], []);
  }

  const party = input;
  for (let i = 0; i < party.length; i++) {
    const curParty = party[i].slice(1);
    for (let j = 0; j < curParty.length; j++) {
      if (map.has(curParty[j])) {
        map.set(curParty[j], [...map.get(curParty[j]), ...curParty]);
      } else {
        map.set(curParty[j], [...curParty]);
      }
    }
  }
  const arr = Array(n + 1).fill(false);

  const findLier = (node) => {
    arr[node] = true;
    const newKnows = map.get(node);
    for (let i = 0; i < newKnows.length; i++) {
      if (arr[newKnows[i]] === false) {
        findLier(newKnows[i]);
      }
    }
  };

  for (let i = 0; i < knows.length; i++) {
    findLier(knows[i]);
  }

  let ans = 0;
  for (let i = 0; i < party.length; i++) {
    const curParty = party[i].slice(1);
    let flag = false;
    for (let j = 0; j < curParty.length; j++) {
      if (arr[curParty[j]] === true) {
        flag = true;
        break;
      }
    }
    if (flag === false) {
      ans++;
    }
  }
  console.log(ans);
};
ans();
