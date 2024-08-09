const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i].split(' ')[0] === 'push') {
            arr.push(input[i].split(' ')[1]);
        } else if (input[i].split(' ')[0] === 'pop') {
            arr.length === 0 ? console.log(-1) : console.log(arr.pop());
        } else if (input[i].split(' ')[0] === 'size') {
            console.log(arr.length);
        } else if (input[i].split(' ')[0] === 'empty') {
            arr.length === 0 ? console.log(1) : console.log(0);
        } else if (input[i].split(' ')[0] === 'top') {
            if (arr.length === 0) {
                console.log(-1);
            } else {
                console.log(arr[arr.length - 1]);
            }
        }
    }
};

ans(input);
