const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];

const estroThenes = (target) => {
    const first = Math.sqrt(target);
    const arr = Array.from({ length: target + 1 }, (_, i) => i);
    for (let i = 2; i <= first; i++) {
        if (arr[i] !== false) {
            for (let j = i * i; j <= target; j += i) {
                arr[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] !== false) {
            primes.push(arr[i]);
        }
    }
    return primes;
};

const ans = () => {
    const target = +input;
    const primes = estroThenes(target);
    let start = 0;
    let end = 0;
    let current = 0;
    let count = 0;
    while (start <= end && end <= primes.length) {
        if (current === target) {
            count++;

            current += primes[end++];
        } else if (current > target) {
            current -= primes[start++];
        } else {
            current += primes[end++];
        }
    }
    console.log(count);
};

ans();
