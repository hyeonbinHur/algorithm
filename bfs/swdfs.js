const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "))
  .map((e) => e.map((e2) => Number(e2)));

const visit = Array.from({ length: input.length }, () =>
  Array(input[0].length).fill(false)
);

/**
 * 먼지 뿌리기 (먼지, 방향)
    //범위 밖으로 넘어갔는지 아닌지 판별하는 조건문
    //격자안으로 먼지 버리기, 누적합으로 버려지면서 격자 안에 들어온 먼지
 */

const move = (cur, direction) => {
  let curX = cur[1];
  let curY = cur[0];
  if (curX === 0 && curY === 0) return;
  if (direction === "left") {
    curX += 1;
  } else if (direction === "right") {
    curX -= 1;
  } else if (direction === "top") {
    curY -= 1;
  } else if (direction === "bottom") {
    curY += 1;
  }
  //먼지 뿌리기
  const left = visit[curY][curX + 1];
  const right = visit[curY][curX - 1];
  const top = visit[curY - 1][curX];
  const bottom = visit[curY + 1][curX];
  let newDir = "";
  let next = [];
  if (!left && !top && bottom) {
    // toLeft
    newDir = "left";
  } else if (!right && top && !bottom) {
    //toRight
    newDir = "right";
  } else if (left && !right && !top) {
    // to Top
    newDir = "top";
  } else if (!left && right && !bottom) {
    //to Bottom
    newDir = "bottom";
  }
  move(next, newDir);
};
const ans = () => {
  //시작,left
};

ans();
console.log(input);
