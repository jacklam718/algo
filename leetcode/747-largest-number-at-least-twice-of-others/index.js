/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
  // Get the index of the largest value
  let maxIndex = 0;
  for (let m = 0; m < nums.length; m++) {
    if (nums[m] > nums[maxIndex]) {
      maxIndex = m;
    }
  }
  
  // Return -1 if largest value is less than twice value of 
  // max < nums[i] * 2
  for (let i = 0; i < nums.length; i++) {
    if (i !== maxIndex && nums[maxIndex] < nums[i] * 2) {
      return -1;
    }
  }
  return maxIndex;
};