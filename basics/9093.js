const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = (input) => {
    let ans = [];
    for (let i = 1; i < input.length; i++) {
        const arr = input[i].split(' ');
        for (let j = 0; j < arr.length; j++) {
            arr[j] = arr[j].split('').reverse().join('');
        }
        ans.push(arr.join(' '));
    }

    console.log(ans.join('\n'));
};

ans(input);
