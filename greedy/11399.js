const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

const ans = () => {
    const arr = input.sort((a, b) => a - b);
    const arr2 = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i];
        arr2[i] = count;
    }
    console.log(arr2.reduce((prev, next) => prev + next, 0));
};
ans();
