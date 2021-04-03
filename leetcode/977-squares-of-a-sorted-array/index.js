/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  return nums
    .map(num => Math.abs(num) * Math.abs(num))
    .sort((a, b) => a - b);
};