const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');
const ans = (input) => {
    const set_1 = new Set();
    const set_2 = new Set();
    input[1].split(' ').forEach((e) => set_1.add(e.replace('\r', '')));
    input[2].split(' ').forEach((e) => set_2.add(e.replace('\r', '')));
    const arr_1 = [];
    const arr_2 = [];
    input[1].split(' ').forEach((e) => arr_1.push(e.replace('\r', '')));
    input[2].split(' ').forEach((e) => arr_2.push(e.replace('\r', '')));

    let ans = 0;
    for (let i = 0; i < arr_1.length; i++) {
        if (!set_2.has(arr_1[i])) ans++;
    }
    for (let i = 0; i < arr_2.length; i++) {
        if (!set_1.has(arr_2[i])) ans++;
    }

    console.log(ans);
};

ans(input);
