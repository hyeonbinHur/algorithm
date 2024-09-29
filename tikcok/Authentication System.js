const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(' '));

const ans = () => {
    const data = {};
    const result = [];
    const id = [];
    const t = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 3) {
            const [a, b, c] = input[i];
            if (a === 'generate') {
                data[b] = +c + t - 1;
            } else if (a === 'renew') {
                if (data[b] > +c) {
                    data[b] = +c + t - 1;
                }
            }
        } else if (input[i].length === 2) {
            const [a, b] = input[i];

            const keys = Object.keys(data);
            let count = 0;
            for (let i = 0; i < keys.length; i++) {
                if (data[keys[i]] >= +b) {
                    count++;
                }
            }
            result.push(count);
        }
    }
    console.log(result);
};
ans();
