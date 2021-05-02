/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
  const uniqueSortedNums = [...new Set(nums)].sort((a, b) => b - a);
  return uniqueSortedNums.length >= 3 
    ? uniqueSortedNums[2]
    : Math.max(...uniqueSortedNums);
};