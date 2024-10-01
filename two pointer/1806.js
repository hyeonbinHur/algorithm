const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const [min, target] = input.shift();
    const arr = [...input[0]];
    let start = 0;
    let end = 0;
    let result = Infinity;
    let current = 0;
    while (start <= end && end <= arr.length) {
        if (current >= target) {
            if (end - start < result) {
                result = end - start;
            }
            current -= arr[start];
            start++;
        } else {
            current += arr[end];
            end++;
        }
    }
    if (result === Infinity) {
        console.log(0);
    } else {
        console.log(result);
    }
};
ans();
