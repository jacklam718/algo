/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = (right = max = zeros = 0);

  while (right < nums.length) {
    if (nums[right] === 0) zeros++;
    while (zeros == 2) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};
