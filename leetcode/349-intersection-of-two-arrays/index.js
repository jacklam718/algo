/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const reference = new Set(nums1);
  const result = [];
  const n = Math.max(nums1.length, nums2.length);

  for (let i = 0; i < n; i++) {
    if (reference.has(nums2[i])) {
      result.push(nums2[i]);
      // Delete it from reference to ensure uniqueness of the result
      reference.delete(nums2[i]);
    }
  }

  return result;
};
