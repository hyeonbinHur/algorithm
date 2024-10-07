const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));

const ans = () => {
    const result = [];
    const arr = [...input];

    const fn = (newArr) => {
        const newMap = new Map();
        for (let i = 0; i < newArr.length; i++) {
            const [name, key] = newArr[i].split(' ');
            if (newMap.has(key)) {
                newMap.set(key, newMap.get(key) + 1);
            } else {
                newMap.set(key, 1);
            }
        }
        let ans = 1;
        for (let [key, val] of newMap) {
            ans *= val + 1;
        }
        if (newMap.size === 0) {
            result.push(0);
        } else {
            result.push(ans - 1);
        }
    };

    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        if (!isNaN(+val)) {
            const newArr = arr.slice(i + 1, +val + 1 + i);
            fn(newArr);
        }
    }
    console.log(result.join('\n'));
};
ans();
