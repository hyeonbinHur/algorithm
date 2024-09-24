const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

const ans = () => {
    const arr = input;
    const pos = [];
    for (let i = 0; i < arr.length; i++) {
        pos[arr[i]] = i;
    }
    pos.shift();
    const d = [];
    for (let i = 0; i < arr.length; i++) {
        if (pos[i] > pos[i - 1]) {
            d[i] = d[i - 1] + 1;
        } else {
            d[i] = 1;
        }
    }
    console.log(arr.length - Math.max(...d));
};

ans();
