const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "));

const visit = Array.from({ length: input.length }, () =>
  Array(input[0].length).fill(false)
);
let ans = 0;
const spread2 = (row, col, val) => {
  if (row >= 0 && row < input.length && col >= 0 && col < input[0].length) {
    input[row][col] += val;
  } else {
    ans += val;
  }
};
const spread = (row, col, dir) => {
  const five = parseInt(input[row][col] * 0.05);
  const ten = parseInt(input[row][col] * 0.1);
  const one = parseInt(input[row][col] * 0.01);
  const seven = parseInt(input[row][col] * 0.07);
  const two = parseInt(input[row][col] * 0.02);
  let val = input[row][col] - five + ten * 2 + seven * 2 + one * 2 + two * 2;
  if (dir === "left") {
    spread2(row, col - 2, five);
    spread2(row - 2, col, two);
    spread2(row + 2, col, two);
    spread2(row - 1, col, seven);
    spread2(row + 1, col, seven);
    spread2(row - 1, col - 1, ten);
    spread2(row + 1, col - 1, ten);
    spread2(row - 1, col + 1, one);
    spread2(row - 1, col + 1, one);
    spread2(row, col - 1, val);
  } else if (dir === "right") {
    spread2(row, col + 2, five);
    spread2(row + 2, col, two);
    spread2(row - 2, col, two);
    spread2(row + 1, col, seven);
    spread2(row - 1, col, seven);
    spread2(row + 1, col + 1, ten);
    spread2(row - 1, col + 1, ten);
    spread2(row + 1, col - 1, one);
    spread2(row + 1, col - 1, one);
    spread2(row, col + 1, val);
  } else if (dir === "top") {
    spread2(row - 2, col, five);
    spread2(row, col + 2, two);
    spread2(row, col - 2, two);
    spread2(row, col - 1, seven);
    spread2(row, col + 1, seven);
    spread2(row - 1, col + 1, ten);
    spread2(row - 1, col - 1, ten);
    spread2(row + 1, col - 1, one);
    spread2(row + 1, col + 1, one);
    spread2(row + 1, col, val);
  } else if (dir === "bottom") {
    spread2(row + 2, col, five);
    spread2(row, col - 2, two);
    spread2(row, col + 2, two);
    spread2(row, col - 1, seven);
    spread2(row, col + 1, seven);
    spread2(row + 1, col + 1, ten);
    spread2(row + 1, col - 1, ten);
    spread2(row - 1, col - 1, one);
    spread2(row - 1, col + 1, one);
    spread2(row + 1, col, val);
  }
};
const move = (row, col, dir) => {
  spread(row, col, dir);
  visit[row][col] = true;
  if (row === 0 && col === 0) {
    return;
  } else {
    let left = false;
    let right = false;
    let top = false;
    let bottom = false;
    const dir = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (let i = 0; i < 4; i++) {
      const nx = col + dir[i][1];
      const ny = row + dir[i][0];
      if (nx >= 0 && nx < input[0].length && ny >= 0 && ny < input.length) {
        if (i === 0) {
          left = visit[ny][nx];
        } else if (i === 1) {
          right = visit[ny][nx];
        } else if (i === 2) {
          top = visit[ny][nx];
        } else if (i === 3) {
          bottom = visit[ny][nx];
        }
      }
    }

    if (!left && bottom && !top) {
      move(row, col - 1, "left"); // to left
    } else if (top && !right && !bottom) {
      move(row, col + 1, "right"); //to right
    } else if (!left && right && !bottom) {
      move(row + 1, col, "bottom"); // to bottom
    } else if (left && !right && !top) {
      move(row - 1, col, "top"); // to top
    }
  }
};
visit[parseInt(input.length / 2)][parseInt(input[0].length / 2)] = true;
move(parseInt(input.length / 2), parseInt(input[0].length / 2) - 1, "left");
