const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let [n, x] = input;
    x = x.split(' ').map((e) => Number(e));
    const set = [...new Set(x)];
    set.sort((a, b) => a - b);

    let obj = {};
    set.map((e, i) => (obj[e] = i));

    const ans = [];

    for (let i = 0; i < x.length; i++) {
        ans.push(obj[x[i]]);
    }
    return ans.join(' ');
};

console.log(ans(input));
