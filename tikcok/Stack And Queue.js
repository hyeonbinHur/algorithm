const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const ans = () => {
    const arr = input;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const current = [...result];
        current.reverse();
        current.push(arr[i]);
        result = [...current];
    }
    console.log(result);
};

ans();
// 7min
