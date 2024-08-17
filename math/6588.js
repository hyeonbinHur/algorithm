const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => parseInt(e));

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
    flags[2] = false;
    for (let i = 0; i <= n; i++) {
        if (flags[i]) {
            primes.push(i);
        }
    }
    return primes;
};

const findAns = (n, primes, set) => {
    let i = 0;
    let ans = false;
    while (primes[i] <= n / 2) {
        if (set.has(n - primes[i])) {
            ans = `${n} = ${primes[i]} + ${n - primes[i]}`;
            break;
        }
        i++;
    }
    return !ans ? `Goldbach's congecture is wrong` : ans;
};
const ans = (input) => {
    const max = Math.max(...input);
    const primes = findPrimes(max);
    const set = new Set(primes);
    let ans = [];
    i = 0;
    while (input[i] !== 0) {
        ans.push(findAns(input[i], primes, set));
        i++;
    }
    console.log(ans.join('\n'));
};

ans(input);
