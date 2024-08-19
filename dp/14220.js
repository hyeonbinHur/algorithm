const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)[0]
    .split(' ');
const ans = (input) => {
    const arr = [];
    arr[0] = [input[0]];
    const dp = [];
    let index = 0;

    for (let i = 0; i < input.length; i++) {
        dp[i] = 1;
        arr[i] = [];
        for (let j = 0; j < i; j++) {
            if (+input[i] > +input[j]) {
                if (dp[i] < dp[j] + 1) {
                    arr[i] = [...arr[j]];
                    dp[i] = dp[j] + 1;
                }
            }
        }
        arr[i].push(+input[i]);
        if (dp[i] >= Math.max(...dp)) {
            index = i;
        }
    }
    console.log(Math.max(...dp));
    console.log(arr[index].join(' '));
};
ans(input);
