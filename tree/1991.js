const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((e) => e.split(" "));

const ans = () => {
  const tree = {};
  const first = input[0][0];
  for (let i = 0; i < input.length; i++) {
    const [p, l, r] = input[i];
    tree[p] = [l, r];
  }
  console.log(tree);
  let visit = Array.from({ length: input.length }, () => false);
  const post = [];
  const postorder = (cur) => {
    const left = tree[cur][0];
    const right = tree[cur][1];
    post.push(cur);
    if (left !== ".") {
      postorder(left);
    }
    if (right !== ".") {
      postorder(right);
    }
  };
  postorder(first);

  visit = Array.from({ length: input.length }, () => false);
  const inord = [];
  const inorder = (cur) => {
    const left = tree[cur][0];
    const right = tree[cur][1];

    if (left !== ".") {
      inorder(left);
    }
    inord.push(cur);
    if (right !== ".") {
      inorder(right);
    }
  };
  inorder(first);

  visit = Array.from({ length: input.length }, () => false);
  const pre = [];
  const preoerder = (cur) => {
    const left = tree[cur][0];
    const right = tree[cur][1];

    if (left !== ".") {
      preoerder(left);
    }
    if (right !== ".") {
      preoerder(right);
    }
    pre.push(cur);
  }; //왼쪽 -> 오른쪽 -> 현재
  preoerder(first);
  console.log(post.join(""));
  console.log(inord.join(""));
  console.log(pre.join(""));
};
ans();
