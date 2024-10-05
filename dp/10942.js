const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const arr = input.shift();
    input.shift();
    const q = input;
    const dp = Array.from({ length: arr.length }, () =>
        Array(arr.length).fill(0)
    );

    for (let i = 0; i < dp.length; i++) {
        dp[i][i] = 1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            dp[i][i + 1] = 1;
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = i + 2; j < arr.length; j++) {
            if (arr[i] === arr[j] && dp[i + 1][j - 1] === 1) {
                dp[i][j] = 1;
            }
        }
    }

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 2; j < arr.length; j++) {
    //         if (arr[i] === arr[j] && dp[i + 1][j - 1] === 1) {
    //             dp[i][j] = 1;
    //         }
    //     }
    // }
    const result = [];

    for (let i = 0; i < q.length; i++) {
        const [start, end] = q[i];
        result.push(dp[start - 1][end - 1]);
    }
    console.log(dp);
    console.log(result.join('\n'));
};
ans();
