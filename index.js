const lc = [1, 3, 0, 0, 0, 0];
const rc = [2, 4, 5, 0, 0, 0];
const arr = "aababa";
let ans = [];
const postoder = (cur) => {
  if (lc[cur] !== 0) postoder(lc[cur]);
  if (rc[cur] !== 0) postoder(rc[cur]);
  ans.push(arr[cur]);
};
for (let i = 0; i < arr.length; i++) {
  ans = [];
  postoder(i);
  console.log(ans.join(""));
}
