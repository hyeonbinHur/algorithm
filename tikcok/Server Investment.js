const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '))
    .map((e) => e.map((e2) => Number(e2)));

const ans = () => {
    const n = input[0];
    const m = input[1];
    const s = input[2];
    const u = input[3];
    const result = [];

    for (let i = 0; i < n.length; i++) {
        let [n1, m1, s1, u1] = [n[i], m[i], s[i], u[i]];
        let max = 0;
        for (let i = 0; i <= n1; i++) {
            const money = (n1 - i) * s1;
            const numOfUpgrade = Math.floor((m1 + money) / u1);
            if (numOfUpgrade <= n1 - (n1 - i)) {
                if (max < numOfUpgrade) {
                    max = numOfUpgrade;
                }
            } else if (numOfUpgrade > n1 - (n1 - i)) {
                if (max < n1 - (n1 - i)) {
                    max = n1 - (n1 - i);
                }
            }
        }
        result.push(max);
    }
    console.log(result);
};
ans();
//25 min
