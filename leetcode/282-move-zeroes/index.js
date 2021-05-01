/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  for (let lastNonZeroFoundAt = 0, cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      swap(nums, lastNonZeroFoundAt++, cur);
    }
  }
};

var swap = function(nums, i1, i2) {
  const temp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = temp;
}