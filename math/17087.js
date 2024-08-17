const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', '').split(' '));

const findGCD = (n1, n2) => {
    let a = 0;
    let b = 0;
    let c = 0;

    if (n1 > n2) {
        a = n1;
        b = n2;
    } else {
        a = n2;
        b = n1;
    }
    c = a % b;

    while (c !== 0) {
        a = b;
        b = c;
        c = a % b;
    }
    return b;
};

const ans = (input) => {
    const s = +input[0][1];
    let arr = [];
    for (let i = 0; i < input[1].length; i++) {
        arr.push(Math.abs(s - +input[1][i]));
    }
    if (arr.length === 1) {
        console.log(arr[0]);
    } else {
        let gcd = findGCD(arr[0], arr[1]);
        for (let i = 2; i < arr.length; i++) {
            gcd = findGCD(gcd, arr[i]);
        }
        console.log(gcd);
    }
};

ans(input);
