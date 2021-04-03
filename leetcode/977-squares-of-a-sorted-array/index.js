/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let left = 0;
  let right = nums.length-1;
  const ans = new Array(nums.length);
  for (let i = nums.length-1; i >= 0; i--) {
   if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      square = nums[right]
      right--;
    } else {
      square = nums[left];
      left++;
    }
    ans[i] = square * square;
  }
  return ans;
};