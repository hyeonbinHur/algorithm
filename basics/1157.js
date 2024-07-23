const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

//대문자는 -65
//소문자는 빼기 97;

let arr = Array(26).fill(0);

for (let i = 0; i < input[0].length; i++) {
    let idx = input[0][i].charCodeAt(0);
    if (idx < 97) {
        idx -= 65;
    } else {
        idx -= 97;
    }
    arr[idx] += 1;
}

let max = Math.max(...arr);
let count = 0;
let index;

for (let i = 0; i < 26; i++) {
    if (arr[i] === max) {
        count++;
        index = i;
    }
}
if (count > 1) {
    console.log('?');
} else {
    console.log(String.fromCharCode(index + 65));
}
