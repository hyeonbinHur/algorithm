const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .split('\n');

const num = +input[0].split(' ')[0];
const loop = +input[0].split(' ')[1];

let arr = Array.from({ length: num }, (v, i) => i + 1);

const reverseArray = (startIdx, endIdx, arr) => {
    const subArray = arr.slice(startIdx, endIdx + 1).reverse();
    arr.splice(startIdx, subArray.length, ...subArray);
    return arr;
};

for (let i = 0; i < loop; i++) {
    const string = input[i + 1].split(' ');
    const s1 = string[0];
    const s2 = string[1];
    arr = reverseArray(s1 - 1, s2 - 1, arr);
}

for (let i = 0; i < num; i++) {
    process.stdout.write(arr[i] + ' ');
}
