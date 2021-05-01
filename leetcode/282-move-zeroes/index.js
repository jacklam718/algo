/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      if (nums[i] === 0) {
        // Swap
        const val = nums[j];
        nums[j] = nums[i];
        nums[i] = val;
      }
      i++;
    }
  }
};
