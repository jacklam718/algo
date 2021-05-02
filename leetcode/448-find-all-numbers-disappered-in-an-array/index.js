/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  const missingNumbers = [];
  
  for (let n = 1; n < nums.length+1; n++) {
    if (nums.indexOf(n) === -1) {
      missingNumbers.push(n);
    }
  }
  return missingNumbers;
};