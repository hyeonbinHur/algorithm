const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const [n, s] = input[0];
const nums = input[1];
const arr = Array(n).fill(Infinity);
const used = Array(n + 1).fill(false);
let count = 0;

const backTrackin = (k, last) => {
    if (k === n) {
        return;
    }

    for (let i = last; i < arr.length; i++) {
        if (!used[i]) {
            arr[k] = nums[i];

            let value = 0;
            for (let i = 0; i <= k; i++) {
                value += arr[i];
            }
            if (value === s) {
                count++;
            }
            used[i] = true;
            backTrackin(k + 1, i);
            used[i] = false;
        }
    }
};
backTrackin(0, 0);
console.log(count);
