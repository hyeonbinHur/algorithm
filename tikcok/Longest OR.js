const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const mn = input[1];
    const mx = input[2];
    const arr = [...input[0]];
    let left = 0;
    let maxLength = 0;
    let testArr = [];
    for (let right = 0; right < arr.length; right++) {
        testArr.push(arr[right]);
        while (left < right) {
            const num = testBit(testArr);
            if (num >= mn && num <= mx) {
                const current = testArr.length;
                if (current > maxLength) {
                    maxLength = current;
                }
                break;
            } else if (num > mx) {
                testArr.shift();
                left++;
            }
        }
    }
    console.log(maxLength);
};

const testBit = (arr) => {
    const num = arr.reduce((prev, next) => prev | next, 0);
    const binary = num.toString(2).split('');
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            count++;
        }
    }
    return count;
};

ans();
testBit([1, 2]);
// 36min
