const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let nums = input[1];

let numnum = nums.split(' ').map((i) => Number(i));
// nums.filter((a, b) => b - a);
numnum.sort((a, b) => b - a);

console.log(`${numnum[numnum.length - 1]} ${numnum[0]}`);
