const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const arrA = input[0].sort((a, b) => a - b);
    const arrB = input[1].sort((a, b) => b - a);
    let num = 0;
    for (let i = 0; i < input[0].length; i++) {
        num += arrA[i] * arrB[i];
    }
    console.log(num);
};
ans();
