const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .splice(1)
    .map((e) => e.split(' ').map((e2) => parseInt(e2, 10)));

const ans = (arr) => {
    let ans = arr.sort((a, b) => {
        if (a[1] === b[1]) {
            if (a[0] < b[0]) return -1;
        }
        return a[1] - b[1];
    });

    return ans.map((e) => e.join(' ')).join('\n');
};

console.log(ans(input));
