const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('');

const ans = () => {
    let temp = '';
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '+' || input[i] === '-') {
            arr.push(+temp);
            arr.push(input[i]);
            temp = '';
        } else {
            temp += input[i];
        }
        if (i === input.length - 1) {
            arr.push(+temp);
        }
    }

    let ans = 0;
    let isMinus = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '-') {
            isMinus = true;
        }
        if (arr[i] !== '-' && arr[i] !== '+') {
            if (isMinus) {
                ans -= arr[i];
            } else {
                ans += arr[i];
            }
        }
    }

    console.log(ans);
};

ans();
