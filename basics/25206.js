const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
let mark = ['A+', 'A0', 'B+', 'B0', 'C+', 'C0', 'D+', 'D0', 'F'];
let num = [4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0];
let count = 0;
let total = 0;
let pointTotal = 0;
for (let i = 0; i < input.length; i++) {
    let current = input[i].split(' ')[2].trim();
    let point = +input[i].split(' ')[1].trim();
    if (current !== 'P') {
        count++;
        let idx = mark.indexOf(current);
        if (idx !== -1) {
            total += num[idx] * point;
            pointTotal += point;
        }
    }
}
console.log(total / pointTotal);
