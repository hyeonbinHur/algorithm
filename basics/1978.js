let input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const arr = input[1].split(' ').map((e) => Number(e));
const max = Math.max(...arr);

const Eratosthenes = (max) => {
    let primes = Array(max + 1).fill(true);
    primes[0] = primes[1] = false;
    for (let i = 2; i <= Math.sqrt(max); i++) {
        for (j = 2; j <= max / i; j++) {
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

const primes = Eratosthenes(max);
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (primes.some((e) => e === arr[i])) count++;
}
console.log(count);
