const { Console } = require('console');

const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split('\n')[0]
    .split('');
const ans = (input) => {
    const stack = [];
    const ans = [];

    /**
     * 스택에 있는 오퍼레이터들을 엔스에 추가할 경우는 총 세가지이다
     * 1. )를 만났을때
     * 2. * or / 를 만났을때
     * 3. for문이 끝났을때
     *
     * 아닌 경우
     * 1. 문자를 만났을때 => 무조건 ans에 push
     * 2. +, -를 만났을때 => 무조건 stack에 push
     */

    for (let i = 0; i < input.length; i++) {
        const now = input[i];

        if (now === '(') {
            stack.push(now);
        } else if (now === ')') {
            while (1) {
                if (!stack.length || stack[stack.length - 1] === '(') break;
                ans.push(stack.pop());
            }
            stack.pop();
        } else if (now === '*' || now === '/') {
            while (1) {
                if (
                    stack[stack.length - 1] === '/' ||
                    stack[stack.length - 1] === '*'
                ) {
                    ans.push(stack.pop());
                } else {
                    break;
                }
            }
            stack.push(now);
        } else if (now === '+' || now === '-') {
            while (1) {
                if (!stack.length || stack[stack.length - 1] === '(') break;
                ans.push(stack.pop());
            }
            stack.push(now);
        } else {
            ans.push(now);
        }
    }
    while (1) {
        if (!stack.length) break;
        ans.push(stack.pop());
    }
    console.log(ans.join(''));
};

ans(input);
