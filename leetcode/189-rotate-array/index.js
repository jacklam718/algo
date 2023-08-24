/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const n = nums.length;
  k = k % n;
  let count = 0;

  for (let i = 0; count < n; i++) {
    let current = i;
    let currentValue = nums[i];
    do {
      const next = (current + k) % n;
      const nextValue = nums[next];
      nums[next] = currentValue;
      currentValue = nextValue;
      current = next;
      count++;
    } while (i !== current);
  }
};
