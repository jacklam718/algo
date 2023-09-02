/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const seen = {};
  for (let i = 0; i < s.length; i++) {
    seen[s[i]] = seen[s[i]] ? seen[s[i]] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]] === 1) return i;
  }
  return -1;
};
