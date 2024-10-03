const input = require('fs')
    .readFileSync('./dev/stdin.txt')
    .toString()
    .trim()
    .split(' ')
    .map((e) => Number(e));
const result = [];
const [n, m] = input;
const visit = Array(n + 1).fill(false);
const arr = []; // 현재의 답이 저장된다

const backTrackin = (k) => {
    // 현재 몇번 인덱스인지
    if (k === m) {
        //만약 원하는 인덱스에 도달했다면
        result.push(arr.join(' '));
    } else {
        for (let i = 1; i <= n; i++) {
            // 0번 인덱스에 1부터 4까지 차례대로 들어감
            if (visit[i] === false) {
                // 1 ~ n이 사용되지 않았다면
                arr[k] = i; // k인덱스의 값은 i이다
                // console.log(arr);
                visit[i] = true; // 다시 방문하지 않게
                backTrackin(k + 1); // 1번 인덱스를 확인했다면 2번으로 2번을 확인했다면 3번을 채워주러 간다
                visit[i] = false;
            }
        }
    }
};
backTrackin(0);
console.log(result.join('\n'));
