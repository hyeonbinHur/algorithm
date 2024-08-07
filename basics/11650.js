const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .splice(1)
    .map((i) => i.split(' ').map((e) => parseInt(e, 10)));

let arr = input;
arr.sort((a, b) => {
    if (a[0] === b[0]) {
        if (a[1] < b[1]) return -1;
    }
    return a[0] - b[0];
});

arr = arr.map((i) => i.join(' ')).join('\n');
console.log(typeof arr);
