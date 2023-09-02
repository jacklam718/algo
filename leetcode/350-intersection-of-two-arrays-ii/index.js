/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const freq1 = {};
  const freq2 = {};
  const n = Math.max(nums1.length, nums2.length);
  let result = [];
  for (let i = 0; i < n; i++) {
    if (nums1[i] !== undefined)
      freq1[nums1[i]] = freq1[nums1[i]] ? freq1[nums1[i]] + 1 : 1;
    if (nums2[i] !== undefined)
      freq2[nums2[i]] = freq2[nums2[i]] ? freq2[nums2[i]] + 1 : 1;
  }

  for (let i = 0; i < n; i++) {
    if (freq2[nums1[i]] !== undefined) {
      const sum = Math.min(freq1[nums1[i]], freq2[nums1[i]]);
      // Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
      result = result.concat(new Array(sum).fill(null).map(() => nums1[i]));
      // Remove the element from the frequency map to avoid duplicates.
      freq2[nums1[i]] = undefined;
    }
  }
  return result;
};
