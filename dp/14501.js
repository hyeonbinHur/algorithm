const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .slice(1)
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const dp = [];
    dp[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        dp[i] = [];
        const [curT, curC] = input[i];
        let max = 0;
        for (let j = dp.length - 1; j >= 0; j--) {
            const [t, cost] = dp[j];
            if (j + t - 1 < i) {
                if (max < cost) {
                    max = cost;
                }
            }
        }
        dp[i] = [curT, max + curC];
    }
    let ans = 0;
    for (let i = 0; i < dp.length; i++) {
        const [curT, curC] = dp[i];
        if (i + curT <= dp.length && curC > ans) {
            ans = curC;
        }
    }

    console.log(ans);
};
ans();
