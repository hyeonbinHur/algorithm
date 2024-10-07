const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''));
const ans = () => {
    const arr = [...input];
    const result = [];
    const hash = (newArr) => {
        newArr = newArr.map((e) => e.split(' '));
        const map = new Map(newArr.map((e) => [e[1], 0]));
        for (let i = 0; i < newArr.length; i++) {
            const [name, type] = newArr[i];
            map.set(type, map.get(type) + 1);
        }
        const arr = [];
        map.forEach((e) => arr.push(e + 1));
        if (arr.length > 0) {
            result.push(arr.reduce((a, b) => a * b, 1) - 1);
        } else {
            result.push(0);
        }
    };

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (!isNaN(+val)) {
            const newArr = arr.slice(i + 1, i + +val + 1);
            hash(newArr);
        }
    }
    console.log(result.join('\n'));
};

ans();
