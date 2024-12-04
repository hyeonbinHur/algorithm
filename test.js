const input = require("fs").readFileSync(0).toString().trim().split("\n");

const ans = () => {
  console.log(input);
  const n = +input.shift();
  const arr = input
    .shift()
    .split(" ")
    .map((e) => Number(e));
  const ans = [];
  const stack = [];
  let finalAns = 0;
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (stack[stack.length - 1] > arr[i]) {
      while (1) {
        if (stack[stack.length - 1] > arr[i]) {
          stack.pop();
        } else break;
      }
    }
    stack.push(arr[i]);

    if (ans[arr[i]]) {
      ans[arr[i]] = Math.max(ans[arr[i]], stack.length);
    } else {
      ans[arr[i]] = stack.length;
    }
    finalAns = Math.max(finalAns, stack.length);
  }
  console.log(finalAns);
};

ans();
