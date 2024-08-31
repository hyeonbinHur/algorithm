const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ')
    .map((e) => BigInt(e));
const [a, b, c] = input;

const ans = (current, n) => {
    if (n === 1n) {
        return current % c;
    } else if (n % 2n === 0n) {
        let result = ans(current, n / 2n);
        return (result * result) % c;
    } else {
        let result = ans(current, (n - 1n) / 2n);
        return (result * result * current) % c;
    }
};

if (b === 0n) {
    console.log(1);
} else {
    console.log(ans(a, b).toString());
}
