const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .split('\n');

let arr = Array(31).fill(0);

for (let i = 0; i < 30; i++) {
    arr[+input[i]] = 1;
}

for (let i = 1; i <= 30; i++) {
    if (arr[i] !== 1) {
        console.log(i);
    }
}
