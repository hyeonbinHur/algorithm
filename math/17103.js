const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => parseInt(e))
    .slice(1);

const findPrimes = (n) => {
    let flags = Array(n).fill(true);
    flags[0] = flags[1] = false;
    let primes = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        for (let j = i * 2; j <= n; j += i) {
            if (flags[j]) {
                flags[j] = false;
            }
        }
    }
    for (let i = 0; i <= n; i++) {
        if (flags[i]) {
            primes.push(i);
        }
    }
    return primes;
};

const findAns = (n, primes, set) => {
    let i = 0;
    let ans = 0;
    while (primes[i] <= n / 2) {
        if (set.has(n - primes[i])) {
            ans++;
        }
        i++;
    }
    return ans;
};
const ans = (input) => {
    const max = Math.max(...input);
    const primes = findPrimes(max);
    const set = new Set(primes);
    let ans = [];

    for (let i = 0; i < input.length; i++) {
        ans.push(findAns(input[i], primes, set));
    }
    console.log(ans.join('\n'));
};

ans(input);
