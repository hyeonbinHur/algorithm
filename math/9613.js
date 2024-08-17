const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) =>
        e
            .replace('\r', '')
            .split(' ')
            .map((e2) => parseInt(e2, 10))
    );

const countGCD = (n1, n2) => {
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
    // console.log(b);
    return b;
};

const ans = (input) => {
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        let ans = 0;
        for (let j = 1; j < input[i].length; j++) {
            for (let k = j + 1; k < input[i].length; k++) {
                ans += countGCD(input[i][j], input[i][k]);
            }
        }
        // console.log('--------');
        arr.push(ans);
    }

    console.log(arr.join('\n'));
};

ans(input);
