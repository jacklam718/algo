/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const kv = {};
  for (let i = 0; i < nums.length; i++) {
    const n = target - nums[i];
    if (kv[n] !== undefined) {
      return [kv[n], i];
    }
    kv[nums[i]] = i;
  }
};
