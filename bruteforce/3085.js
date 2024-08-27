const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => e.split(''));

const swapCol = (dp) => {
    let max = 0;
    for (let i = 0; i < dp[0].length; i++) {
        for (let j = 0; j < dp[0].length - 1; j++) {
            if (dp[i][j] !== dp[i][j + 1]) {
                const dpTemp = JSON.parse(JSON.stringify(dp));
                let temp = dpTemp[i][j];
                dpTemp[i][j] = dpTemp[i][j + 1];
                dpTemp[i][j + 1] = temp;
                let maxTemp = checkAll(dpTemp);
                if (maxTemp > max) {
                    max = maxTemp;
                }
            }
        }
    }
    return max;
};
const checkCol = (dp, col, row) => {
    let max = 0;
    let count = 1;
    for (let j = 0; j < dp[0].length - 1; j++) {
        if (dp[col][j] === dp[col][j + 1]) {
            count++;
        } else {
            count = 1;
        }

        if (count > max) {
            max = count;
        }
    }
    count = 1;
    for (let j = row; j < row + 1; j++) {
        let count = 1;

        for (let i = 0; i < dp[0].length - 1; i++) {
            if (dp[i][j] === dp[i + 1][j]) {
                count++;
            } else {
                count = 1;
            }
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
};
const swapRow = (dp) => {
    let max = 0;
    for (let j = 0; j < dp[0].length; j++) {
        for (let i = 0; i < dp[0].length - 1; i++) {
            if (dp[i][j] !== dp[i + 1][j]) {
                const dpTemp = JSON.parse(JSON.stringify(dp));
                let temp = dpTemp[i][j];
                dpTemp[i][j] = dpTemp[i + 1][j];
                dpTemp[i + 1][j] = temp;
                let maxTemp = checkAll(dpTemp);
                if (maxTemp > max) {
                    max = maxTemp;
                }
            }
        }
    }
    return max;
};
const checkRow = (dp, col, row) => {
    let max = 0;
    let count = 1;
    for (let i = 0; i < dp[0].length - 1; i++) {
        if (dp[i][row] === dp[i + 1][row]) {
            count++;
        } else {
            count = 1;
        }
        if (count > max) {
            max = count;
        }
    }
    count = 1;
    for (let i = col; i < col + 1; i++) {
        let count = 1;

        for (let j = 0; j < dp[0].length - 1; j++) {
            if (dp[i][j] === dp[i][j + 1]) {
                count++;
            } else {
                count = 1;
            }
            if (count > max) {
                max = count;
            }
        }
    }
    return max;
};
const checkAll = (dp) => {
    let count = 1;
    let max = 0;
    for (let i = 0; i < dp[0].length; i++) {
        count = 1;
        for (let j = 0; j < dp[0].length - 1; j++) {
            if (dp[i][j] === dp[i][j + 1]) {
                count++;
            } else {
                count = 1;
            }
            if (max < count) {
                max = count;
            }
        }
    }
    count = 1;
    for (let j = 0; j < dp[0].length; j++) {
        count = 1;

        for (let i = 0; i < dp[0].length - 1; i++) {
            if (dp[i][j] === dp[i + 1][j]) {
                count++;
            } else {
                count = 1;
            }
            if (max < count) {
                max = count;
            }
        }
    }
    return max;
};
const ans = (input) => {
    const dp = [...input];
    const maxRow = swapRow(dp);
    const maxCol = swapCol(dp);

    console.log(Math.max(maxRow, maxCol));

    // console.log(max, maxRow, maxCol);
};

ans(input);
