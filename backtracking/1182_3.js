const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, s] = input.shift();
const nums = input[0];

const arr = [];
const visited = Array(n).fill(false);
let count = 0;
const backTrackin = (k, start) => {
    if (k > n) return;
    let val = 0;
    if (k !== 0) {
        for (let i = 0; i < k; i++) {
            val += arr[i];
        }
        if (val === s) {
            count++;
        }
    }
    for (let i = start; i < nums.length; i++) {
        if (visited[i] === false) {
            arr[k] = nums[i];
            visited[i] = true;
            backTrackin(k + 1, i + 1);
            visited[i] = false;
        }
    }
};
backTrackin(0, 0);
console.log(count);
