let input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let arr = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 1; i < input.length; i++) {
    const coordinateX = +input[i].split(' ')[0];
    const coordinateY = +input[i].split(' ')[1];
    for (let j = coordinateX; j < coordinateX + 10; j++) {
        for (let k = coordinateY; k < coordinateY + 10; k++) {
            arr[j][k] = 1;
        }
    }
}
let count = 0;

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        if (arr[i][j] === 1) {
            count++;
        }
    }
}
console.log(count);
