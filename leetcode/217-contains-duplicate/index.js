/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const s = {};
  for (let i = 0; i < nums.length; i++) {
    if (s[nums[i]]) {
      return true;
    }
    s[nums[i]] = true;
  }
  return false;
};
