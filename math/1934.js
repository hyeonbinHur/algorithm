const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', '').split(' '));

const GCD_LCM = (num1, num2) => {
    let a = 0;
    let b = 0;
    let c = 0;

    if (num1 > num2) {
        a = num1;
        b = num2;
    } else {
        a = num2;
        b = num1;
    }
    c = a % b;
    while (c !== 0) {
        a = b;
        b = c;
        c = a % b;
    }

    const gcd = b;
    const lcm = (num1 * num2) / gcd;
    return lcm;
};

const ans = (input) => {
    const ans = [];
    for (let i = 0; i < input.length; i++) {
        ans.push(GCD_LCM(+input[i][0], Number(input[i][1])));
    }
    console.log(ans.join('\n'));
};

ans(input);
