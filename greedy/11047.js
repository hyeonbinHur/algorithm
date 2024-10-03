const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));
const ans = () => {
    let [n, k] = input.shift().split(' ');
    const coins = [...input].map((e) => Number(e));
    let ans = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        const val = Math.floor(k / coins[i]);
        if (val >= 1) {
            k -= val * coins[i];
            ans += val;
        }
    }
    console.log(ans);
};

ans();
