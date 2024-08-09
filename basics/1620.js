const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    const n = parseInt(input[0].split(' ')[0]);
    const arr = input.slice(1, n + 1);
    const q = input.slice(n + 1);
    const map = new Map(arr.map((e, i) => [e, i]));

    for (let i = 0; i < q.length; i++) {
        if (isNaN(+q[i])) {
            console.log(map.get(q[i]) + 1);
        } else {
            console.log(arr[q[i] - 1]);
        }
    }
};

ans(input);

// console.log(ans(input));
