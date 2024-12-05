const input = require("fs")
  .readFileSync("./dev/stdin.txt")
  .toString()
  .trim()
  .split("\n")
  .map((e) => e.split(" "));

const ans = () => {
  const tree = {};
  const n = +input.shift()[0];

  for (let i = 0; i < input.length; i++) {
    const [p, l, r] = input[i];
    tree[p] = [l, r];
  }
  const preArr = [];
  const inArr = [];
  const postArr = [];
  const preorder = (node) => {
    //root, left, rigth
    const root = node;
    const left = tree[node][0];
    const right = tree[node][1];
    preArr.push(root);
    if (left !== ".") preorder(left);
    if (right !== ".") preorder(right);
  };
  const inorder = (node) => {
    //left, root, right
    const root = node;
    const left = tree[node][0];
    const right = tree[node][1];
    if (left !== ".") inorder(left);
    inArr.push(root);
    if (right !== ".") inorder(right);
  };
  const postorder = (node) => {
    // left right root
    const root = node;
    const left = tree[node][0];
    const right = tree[node][1];
    if (left !== ".") postorder(left);
    if (right !== ".") postorder(right);
    postArr.push(root);
  };

  preorder("A");
  inorder("A");
  postorder("A");
  console.log(preArr.join(""));
  console.log(inArr.join(""));
  console.log(postArr.join(""));
};

ans();
