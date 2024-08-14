const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split(' ');

const ans = (input) => {
    let big = 0;
    let sm = 0;
    const [n, m] = input;

    if (+n > +m) {
        big = Number(n);
        sm = Number(m);
    } else {
        big = Number(m);
        sm = Number(n);
    }

    const findGCD = (big, sm) => {
        let a = big;
        let b = sm;
        let c = a % b;
        while (c !== 0) {
            a = b;
            b = c;
            c = a % b;
        }
        return b;
    };
    const findLCM = (big, sm, gcd) => {
        return (big * sm) / gcd;
    };

    let GCD = findGCD(big, sm); // Greatest Common Divisor
    let LCM = findLCM(big, sm, GCD); // Leaset Common Multiple

    console.log(GCD);
    console.log(LCM);
};
ans(input);
