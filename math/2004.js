const { count } = require('console');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => parseInt(e, 10));

const findFive = (n) => {
    let num = 0;
    for (let i = 5; i <= n; i *= 5) {
        if (n / i >= 1) {
            num += parseInt(n / i);
        } else {
            break;
        }
    }
    return num;
};
const findTwo = (n) => {
    let num = 0;
    for (let i = 2; i <= n; i *= 2) {
        if (n / i >= 1) {
            num += parseInt(n / i);
        } else {
            break;
        }
    }
    return num;
};
const ans = (input) => {
    let [n, r] = input;
    const numOfTwo = findTwo(n) - findTwo(r) - findTwo(n - r);
    const numOfFive = findFive(n) - findFive(r) - findFive(n - r);
    console.log(numOfTwo > numOfFive ? numOfFive : numOfTwo);
};
ans(input);

//5 = 1;
//25 = 2 => 5 * 5;
//125 = 3 => 5* 5 * 5;
