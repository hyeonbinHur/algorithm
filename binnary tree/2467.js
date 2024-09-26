const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ')
    .map((e) => Number(e));

let diff = Infinity;
const result = [];

const binarySearch = (start, end, arr) => {
    while (start < end) {
        const localDiff = arr[start] + arr[end];
        if (localDiff === 0) {
            result[0] = arr[start];
            result[1] = arr[end];
            break;
        }

        if (Math.abs(localDiff) < diff) {
            result[0] = arr[start];
            result[1] = arr[end];
            diff = Math.abs(localDiff);
        }

        if (localDiff > 0) {
            end -= 1;
        } else {
            start += 1;
        }
    }
    console.log(result.sort((a, b) => a - b).join(' '));
};
binarySearch(
    0,
    input.length - 1,
    input.sort((a, b) => a - b)
);
