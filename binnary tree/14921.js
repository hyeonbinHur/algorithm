const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

let diff = Infinity;
let diffAbs = Infinity;

const twoPointerSearch = (start, end, arr) => {
    while (start < end) {
        const localDiff = arr[start] + arr[end];

        if (localDiff === 0) {
            diff = 0;
            break;
        }

        if (Math.abs(localDiff) < diffAbs) {
            diff = localDiff;
            diffAbs = Math.abs(localDiff);
        }
        if (localDiff > 0) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    console.log(diff);
};
twoPointerSearch(0, input.length - 1, input);
