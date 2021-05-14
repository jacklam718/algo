/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  const sum = nums.reduceRight((v, a) => v + a);
  let leftsum = 0; 
  for (let i = 0; i < nums.length; i++) {
    if (leftsum === sum - leftsum - nums[i]) {
      return i;
    }
    leftsum += nums[i];
  }
  return -1;
};