const { parse } = require('path');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

let arr = input
    .join(', ')
    .split(' ')
    .map((i) => parseInt(i, 10));
console.log(arr.reduce((pre, next) => pre + next, 0) / arr.length);

const findMedian = (arr) => {
    let sortedArray = arr.sort((a, b) => a - b);
    let mid = parseInt(sortedArray.length / 2);
    if (sortedArray.length % 2 === 0) {
        console.log((sortedArray[mid] + sortedArray[mid - 1]) / 2);
    } else {
        console.log(sortedArray[mid]);
    }
};
findMedian(arr);
