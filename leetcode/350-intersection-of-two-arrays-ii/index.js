/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = new Map();
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], (map.get(nums1[i]) || 0) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    let j = map.get(nums2[i]);
    if (j > 0) {
      result.push(nums2[i]);
      map.set(nums2[i], --j);
    }
  }
  return result;
};
