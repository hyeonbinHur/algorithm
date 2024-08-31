const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

let count = 0;
const zFunction = (n, r, c) => {
    const value = (Math.pow(2, n) - 1) / 2;
    if (n == 1) {
        if (r === 1) {
            if (c === 1) {
                count += 3;
            } else {
                count += 2;
            }
        } else {
            if (c === 1) {
                count += 1;
            } else {
                count += 0;
            }
        }
        return;
    }
    if (r > value) {
        if (c > value) {
            count += Math.pow(Math.pow(2, n - 1), 2) * 3;
            zFunction(n - 1, r - Math.pow(2, n - 1), c - Math.pow(2, n - 1));
        } else {
            count += Math.pow(Math.pow(2, n - 1), 2) * 2;
            zFunction(n - 1, r - Math.pow(2, n - 1), c);
        }
    } else if (r < value) {
        if (c > value) {
            count += Math.pow(Math.pow(2, n - 1), 2);
            zFunction(n - 1, r, c - Math.pow(2, n - 1));
        } else {
            zFunction(n - 1, r, c);
        }
    }
};
zFunction(input[0], input[1], input[2]);
console.log(count);
