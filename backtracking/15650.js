const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => Number(e));

const [n, m] = input;

const arr = Array(m + 1).fill(0);
const used = Array(n + 1).fill(false);

const result = [];

const backTracking = (k, last) => {
    if (k === m) {
        let current = [];
        for (let i = 0; i < k; i++) {
            current.push(arr[i]);
        }
        result.push(current);
        return;
    }

    for (let i = last + 1; i <= n; i++) {
        if (!used[i]) {
            arr[k] = i;
            used[i] = true;
            backTracking(k + 1, i);
            used[i] = false;
        }
    }
};

const ans = () => {
    backTracking(0, 0);
};

ans();

console.log(result.map((e) => e.join(' ')).join('\n'));
