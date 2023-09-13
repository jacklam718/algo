/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substring = new Set();

  for (var max = left = right = 0; right < s.length; right++) {
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

// v2
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const lastOccurrence = new Map();
  for (var max = left = right = 0; right < s.length; right++) {
    const char = s.charAt(right);
    const lastCharAt = lastOccurrence.get(char);
    if (typeof lastCharAt === "number") {
      left = Math.max(left, lastCharAt + 1);
    }
    lastOccurrence.set(char, right);
    max = Math.max(max, right - left + 1);
  }
  return max;
};
