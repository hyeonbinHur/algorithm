const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
const num = +input[0].split(' ')[0];
const loop = +input[0].split(' ')[1];
let arr = Array.from({ length: num }, (v, i) => i + 1);
for (let i = 0; i < loop; i++) {
    const string = input[i + 1].split(' ');
    const s1 = +string[0];
    const s2 = +string[1];
    let temp = arr[s1 - 1];
    arr[s1 - 1] = arr[s2 - 1];
    arr[s2 - 1] = temp;
}
for (let i = 0; i < num; i++) {
    process.stdout.write(arr[i] + ' ');
}
