/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const length = nums.length;
  const missingNumbers = [];
  nums = new Set(nums);
  
  for (let n = 1; n < length+1; n++) {
    if (!nums.has(n)) {
      missingNumbers.push(n);
    }
  }
  return missingNumbers;
};