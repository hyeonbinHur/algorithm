const { captureRejectionSymbol } = require('events');
const { copyFileSync } = require('fs');

let input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let max = 0;
let ans1 = 0;
let ans2 = 0;
const string = input.map((i, row) => {
    const arr = i.split(' ').map((e) => Number(e));
    let maxTemp = Math.max(...arr);
    if (maxTemp > max) {
        max = maxTemp;
        ans1 = row;
        ans2 = arr.indexOf(maxTemp);
    }
});
console.log(max);
console.log(ans1 + 1, ans2 + 1);
