const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => +e);

const ans = (input) => {
    const [M, N] = input;
    const ans = Array(N + 1).fill(true);
    const arr = [];
    for (let i = 2; i < Math.sqrt(N); i++) {
        for (let j = i + 1; j <= N; j++) {
            if (ans[j]) {
                if (j % i === 0) {
                    ans[j] = false;
                }
            }
        }
    }
    for (let i = M; i <= N; i++) {
        if (ans[i]) {
            arr.push(i);
        }
    }
    console.log(arr.join('\n'));
};

ans(input);
