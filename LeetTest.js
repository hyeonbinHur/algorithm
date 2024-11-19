/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max = 0;
  for (let i = height.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      max = Math.max(max, (i - j) * Math.min(height[j], height[i]));
      if (height[j] >= height[i]) break;
    }
  }
  return max;
};
console.log(maxArea((height = [1, 8, 6, 2, 5, 4, 8, 3, 7])));
console.log(maxArea((height = [1, 1])));
