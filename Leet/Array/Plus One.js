const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(',')
    .map((e) => Number(e));

const digits = input;

const ans = () => {
    const arr = digits.join('');
    const ans = BigInt(arr) + 1n;
    console.log(
        ans
            .toString()
            .split('')
            .map((e) => Number(e))
    );
    return ans
        .toString()
        .split('')
        .map((e) => Number(e));
};
ans();
