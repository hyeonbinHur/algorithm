const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')
    .slice(1)
    .map((e) => e.replace('\r', ''))
    .map((e) => Number(e));

const ans = () => {
    let result = 0;
    let negArray = [];
    let posArray = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            posArray.push(input[i]);
        } else if (input[i] <= 0) {
            negArray.push(input[i]);
        }
    }
    posArray.sort((a, b) => b - a);
    negArray.sort((a, b) => a - b);
    let posNum = 0;
    let negNum = 0;

    for (let i = 0; i < posArray.length; i++) {
        if (posArray[i] * posArray[i + 1] > posArray[i] + posArray[i + 1]) {
            posNum += posArray[i] * posArray[i + 1];
            i++;
        } else {
            posNum += posArray[i];
        }
    }

    for (let i = 0; i < negArray.length; i++) {
        if (negArray[i] * negArray[i + 1] > negArray[i] + negArray[i + 1]) {
            negNum += negArray[i] * negArray[i + 1];
            i++;
        } else {
            negNum += negArray[i];
        }
    }

    console.log(negNum + posNum);
};

ans();
