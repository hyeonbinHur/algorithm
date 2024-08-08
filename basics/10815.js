const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let [n, ns, m, ms] = input;
    ns = ns.split(' ');
    let set = new Set(ns);
    ms = ms.split(' ');
    const ans = [];
    for (let i = 0; i < ms.length; i++) {
        set.has(ms[i]) ? ans.push(1) : ans.push(0);
    }
    return ans.join(' ');
};

console.log(ans(input));
