const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    const n = parseInt(input[0].split(' ')[0]);
    const m = parseInt(input[0].split(' ')[1]);

    const arr_1 = new Set(input.slice(1, n + 1));
    const arr_2 = input.slice(n + 1);

    const ans = [];

    for (let i = 0; i < m; i++) {
        if (arr_1.has(arr_2[i])) {
            ans.push(arr_2[i]);
        }
    }

    console.log(ans.length);
    console.log(ans.sort().join('\n'));
};

ans(input);
