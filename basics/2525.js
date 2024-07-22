const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const clock = input[0].split(' ');

const hour = +clock[0];
const min = +clock[1];
const oven = +input[1];

let newMin = min + oven;
let newHour = hour;
while (1) {
    if (newMin < 60) break;
    newMin = newMin - 60;
    newHour++;
}

while (1) {
    if (newHour < 24) break;
    newHour -= 24;
}

console.log(newHour + ' ' + newMin);
