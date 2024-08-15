const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => +e);

const ans = (input) => {
    const [N, M] = input;

    const arr = Array(M + 1).fill(true);
    arr[1] = arr[0] = false;
    const ans = [];

    for (let i = 2; i <= Math.sqrt(M); i++) {
        for (let j = i + i; j <= M; j += i) {
            arr[j] = false;
        }
    }

    for (let i = N; i <= M; i++) {
        if (arr[i]) {
            ans.push(i);
        }
    }
    const a = 2;
    console.log(ans.join('\n'));
};

ans(input);
