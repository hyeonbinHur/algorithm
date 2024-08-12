const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    let ans = [];
    let old = input[0].split('');
    old.push(' ');
    let temp = [];
    let reverse = true;

    for (let i = 0; i < old.length; i++) {
        if (old[i] === '<') {
            reverse = false;
            temp.reverse();
            for (let j = 0; j < temp.length; j++) {
                ans.push(temp[j]);
            }
            temp = [];
        }

        if (reverse) {
            if (old[i] === ' ') {
                temp.reverse();
                for (let j = 0; j < temp.length; j++) {
                    ans.push(temp[j]);
                }
                temp = [];
                ans.push(' ');
            } else {
                temp.push(old[i]);
            }
        }

        if (!reverse) {
            ans.push(old[i]);
            if (old[i] === '>') {
                reverse = true;
            }
        }
    }

    console.log(ans.join('').trim());
};

ans(input);
