/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  for (let i = (count = max = 0); i < nums.length; i++) {
    if (nums[i] === 1) max = Math.max(++count, max);
    else count = 0;
  }
  return max;
};
