const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const binarySearch = (start, end, value, arr) => {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        if (value === arr[mid]) {
            return 1;
        } else if (arr[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
};

const ans = () => {
    const arr1 = input[1].sort((a, b) => a - b);
    const arr2 = input[3];
    const result = arr2.map((e) => binarySearch(0, input[2][0], e, arr1));
    console.log(result.join(' '));
};
ans();
