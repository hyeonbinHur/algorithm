const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const string = input[0];
const arr = Array(26).fill(-1);
for (let i = 0; i < string.length; i++) {
    if (arr[string[i].charCodeAt(0) - 97] === -1) {
        arr[string[i].charCodeAt(0) - 97] = i;
    }
}

for (let i = 0; i < 26; i++) {
    process.stdout.write(arr[i] + ' ');
}
