const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));
let count = 0;
let globalResult = [];
const binarySearch = (start, end, value, arr) => {
    let found = true;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (value === arr[mid]) {
            found = false;
            break;
        } else if (value > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    if (found) {
        count++;
        globalResult.push(value);
        return value;
    }
};
const ans = () => {
    const arrA = input[0];
    const arrB = input[1].sort((a, b) => a - b);
    const result = arrA.map((e) => binarySearch(0, arrB.length - 1, e, arrB));
    if (globalResult.length === 0) {
        console.log(globalResult.length);
    } else {
        console.log(globalResult.length);
        console.log(globalResult.sort((a, b) => a - b).join(' '));
    }
};

ans();
