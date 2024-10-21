const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.replace('\r', ''));

const ans = () => {
    const [n, m] = input
        .shift()
        .split(' ')
        .map((e) => Number(e));
    let count = 0;
    const data = {};
    const groupNames = [];
    for (let i = 0; i < input.length; i++) {
        if (count === n) {
            input.splice(0, i + +input[i - 1]);
            break;
        }
        const val = input[i];
        if (!isNaN(+val)) {
            count++;
            const groupName = input[i - 1];
            groupNames.push(groupName);
            const groupMember = input.slice(i + 1, i + +val + 1);
            data[groupName] = groupMember.sort();
        }
    }

    const result = [];
    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        if (!isNaN(+val)) {
            const find = input[i - 1];

            if (val === '1') {
                for (let i = 0; i < groupNames.length; i++) {
                    if (data[groupNames[i]].includes(find)) {
                        result.push(groupNames[i]);
                        break;
                    }
                }
            } else {
                result.push(...data[find].sort());
            }
        }
    }
    console.log(result.join('\n'));
};

ans();