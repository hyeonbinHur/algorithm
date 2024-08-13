const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0];
const ans = (input) => {
    const ans = [];
    ans.push(input);
    let str = input.split('');
    for (let i = 0; i < input.length - 1; i++) {
        str.shift();
        ans.push(str.join(''));
    }

    ans.sort();
    console.log(ans.join('\n'));
};
ans(input);
