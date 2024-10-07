const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = () => {
    const arr = input[0];
    const set = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (!set.has(arr.slice(i, j + 1))) {
                set.add(arr.slice(i, j + 1));
            }
        }
    }
    console.log(set.size);
};

ans();
