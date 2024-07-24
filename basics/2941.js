const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let str = input[0];
const find = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;
for (let i = 0; i < 8; i++) {
    while (1) {
        if (!str.includes(find[i])) break;
        str = str.replace(find[i], ' ');
        count++;
    }
}

console.log(str.length);
