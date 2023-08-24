/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  k = k % nums.length;

  for (let left = len - 1, right = len - 1 + k; right >= 0; right--, left--) {
    nums[right] = nums[left];
  }

  for (let left = k - 1, right = nums.length - 1; left >= 0; right--, left--) {
    nums[left] = nums[right];
  }

  nums.length = len;
};
