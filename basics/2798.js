const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n');

const N = +input[0].split(' ')[0];
const M = +input[0].split(' ')[1];
let cards = input[1].split(' ').map((e) => Number(e));
const makeCombination = (N, M, cards) => {
    let ans = 0;
    for (let i = 0; i < cards.length - 2; i++) {
        for (let j = i + 1; j < cards.length - 1; j++) {
            for (let k = j + 1; k < cards.length; k++) {
                if (cards[i] + cards[j] + cards[k] <= M) {
                    if (ans < cards[i] + cards[j] + cards[k]) {
                        ans = cards[i] + cards[j] + cards[k];
                    }
                }
            }
        }
    }
    return ans;
};

console.log(makeCombination(N, M, cards));
