const { constrainedMemory } = require('process');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const ans = (input) => {
    const n = parseInt(input[0]);
    const m = parseInt(input[2]);
    const arr_1 = input[1].split(' ').map((e) => Number(e));
    const arr_2 = input[3].split(' ').map((e) => Number(e));
    const map = new Map();
    arr_1.forEach((e) => {
        if (map.has(e)) {
            map.set(e, map.get(e) + 1);
        } else {
            map.set(e, 1);
        }
    });
    let ans = [];
    arr_2.forEach((e) => {
        if (map.has(e)) {
            ans.push(map.get(e));
        } else {
            ans.push(0);
        }
    });

    console.log(ans.join(' '));
};

ans(input);
