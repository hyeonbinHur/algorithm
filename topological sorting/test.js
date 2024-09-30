/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
const q = [
    373, 466, 501, 884, 998, 254, 12, 324, 813, 601, 790, 728, 754, 676, 958,
    505, 317, 117, 727, 2, 248, 305, 481, 12, 394, 282, 173, 623, 841, 636, 500,
    234, 524, 501, 694, 506, 312, 723, 801,
];

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var validSubarraySize = function (nums, threshold) {
    /*
    Approach: Use monotonous increasing array
    */
    let stack = [];
    for (let i = 0; i < nums.length; i++) {
        let start = i;
        while (stack.length > 0 && stack[stack.length - 1][0] > nums[i]) {
            let popped = stack.pop();
            let min = popped[0];
            let len = i - popped[1];
            if (min > threshold / len) {
                return len;
            }
            start = popped[1];
        }
        stack.push([nums[i], start]);
    }
    let end = nums.length - 1;
    for (let i = 0; i < stack.length; i++) {
        let len = end - stack[i][1] + 1;
        let min = stack[i][0];
        if (min > threshold / len) {
            return len;
        }
    }
    return -1;
};
console.log(validSubarraySize(q, 2228));
