/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  let count = 0
  for (let i = 0, j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      swap(nums, i++, j);
    } else {
      count++;
    }
  }
  nums.length = nums.length - count;
};

var swap = function(nums, i1, i2) {
  const temp = nums[i1];
  nums[i1] = nums[i2];
  nums[i2] = temp;
}