const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let ans = 0;
    const set = new Set();

    for (let i = 0; i < input[0].length; i++) {
        for (let j = 1; j <= input[0].length; j++) {
            if (!set.has(input[0].slice(i, j))) {
                if (input[0].slice(i, j).length !== 0) {
                    set.add(input[0].slice(i, j));
                }
            }
        }
    }

    console.log(set.size);
};

ans(input);
