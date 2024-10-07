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
    const groupData = {};
    const teamName = [];
    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        if (count === n) {
            input.splice(0, i + +input[i - 1]);
            break;
        }
        if (!isNaN(+val)) {
            count++;
            let groupName = input[i - 1];
            let group = input.slice(i + 1, i + +val + 1);
            teamName.push(groupName);
            groupData[groupName] = group;
        }
    }
    const result = [];
    for (let i = 0; i < input.length; i++) {
        const val = input[i];
        if (!isNaN(+val)) {
            const find = input[i - 1];
            if (+val === 1) {
                for (let j = 0; j < teamName.length; j++) {
                    if (groupData[teamName[j]].includes(find)) {
                        result.push(teamName[j]);
                        break;
                    }
                }
            } else if (+val === 0) {
                result.push(...groupData[find].sort());
            }
        }
    }
    console.log(result.join('\n'));
};
ans();
