/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const len = nums.length;
  let i = len - 1;
  let right = len - 1 + k;

  while (right >= 0) {
    nums[right] = nums[i];
    if (i === 0) {
      i = len - 1;
    }
    i--;
    right--;
  }

  for (
    let left = k - 1, right = nums.length - 1;
    right >= len;
    left--, right--
  ) {
    nums[left] = nums[right];
  }
  nums.length = len;
};
