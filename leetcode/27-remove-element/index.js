/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let i = j = 0;
  for (;j < nums.length; j++) {
    if (nums[j] !== val) {
      swap(nums, i++, j);
    }
  }
  return nums.length = i;
};

var swap = function(nums, i1, i2) {
  const temp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = temp;
}