const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', '').split(' '));

const ans = (input) => {
    let result = new Set();

    for (let i = 0; i < input.length; i++) {
        if (input[i][1] === 'enter') {
            result.add(input[i][0]);
        } else {
            result.delete(input[i][0]);
        }
    }
    return Array.from(result).sort().reverse().join('\n');
};
console.log(ans(input));
