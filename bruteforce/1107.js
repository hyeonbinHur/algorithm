const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    let A, B, C;

    if (input.length === 3) {
        A = input[0];
        B = input[1];
        C = input[2];
    } else {
        A = input[0];
        B = input[2];
        C = '11';
    }

    C = C.split(' ');
    let stringA = A.toString().split('');
    let dif = Math.abs(+A - 100);
    if (dif < stringA.length) {
        console.log(dif);
    } else {
        let ans = [];
        let channel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (let i = 0; i < C.length; i++) {
            let index = channel.indexOf(+C[i]);
            if (index !== -1) {
                channel.splice(index, 1);
            }
        }
        let diff = Infinity;
        for (let i = 0; i <= 999999; i++) {
            const str = i
                .toString()
                .split('')
                .map((e) => Number(e));
            let isValid = true;
            for (let j = 0; j < str.length; j++) {
                const index = channel.indexOf(str[j]);
                if (index === -1) {
                    isValid = false;
                }
                if (!isValid) break;
            }

            if (isValid) {
                if (diff > str.length + Math.abs(i - +A)) {
                    diff = str.length + Math.abs(i - +A);
                }
            }
        }
        console.log(Math.min(dif, diff));
    }
};

ans(input);
