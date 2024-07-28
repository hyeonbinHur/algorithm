const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const start = +input[0];
const end = +input[1];

const sieveOfErasthothenes = (end) => {
    let primes = Array(end + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i <= Math.sqrt(end); i++) {
        for (let j = 2; j <= end / i; j++) {
            if (primes[i * j]) primes[i * j] = false;
        }
    }
    return primes.reduce((acc, isPrime, index) => {
        if (isPrime) {
            acc.push(index);
        }
        return acc;
    }, []);
};

const primes = sieveOfErasthothenes(end);

const results = primes.filter((e) => e >= start && e <= end);
if (results.length === 0) {
    console.log('-1');
} else {
    console.log(results.reduce((prev, next) => prev + next, 0));
    console.log(results[0]);
}
