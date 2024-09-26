const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(',')
    .map((e) => Number(e));

const nums = input;

const ans = () => {
    const max = Math.max(...nums);
    let flag = true;
    for (let i = 0; i < nums.length; i++) {
        if (max < i * 2) {
            flag = false;
            break;
        }
    }

    if (flag) {
        const input = nums.indexOf(max);
        console.log(input);
    } else {
        console.log(-1);
    }
};

ans();
