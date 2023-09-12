/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substring = new Set();

  for (var max = (left = right = 0); right < s.length; right++) {
    if (substring.has(s[right])) {
      left++;
      right = left;
      substring.clear();
    }
    substring.add(s[right]);
    max = Math.max(max, right - left + 1);
  }

  return max;
};
