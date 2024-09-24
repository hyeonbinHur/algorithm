const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => BigInt(e2)));

const [n, m] = input[0];

const ans = () => {
    let arr = input[1].sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    for (let i = BigInt(0); i < m; i++) {
        const current = BigInt(arr[0] + arr[1]);
        arr[0] = current;
        arr[1] = current;
        arr = arr.sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        });
    }
    let result = BigInt(0);
    for (let i = BigInt(0); i < n; i++) {
        result += arr[i];
    }
    console.log(result.toString());
};
ans();
