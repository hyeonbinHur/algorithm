/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function (nums) {
    const total = nums.reduce((a, b) => a + b, 0);

    let leftSum = 0;
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        const currentLeft = i * nums[i] - leftSum;
        const currentRight = total - leftSum - (nums.length - i) * nums[i];
        ans.push(currentLeft + currentRight);
        leftSum += nums[i];
    }
    console.log(ans);
    return ans;
};
getSumAbsoluteDifferences([1, 4, 6, 8, 10]);
