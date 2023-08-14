/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let str = strs[0];
  let prefixLen = 0;
  if (strs.length === 1) return str;
  for (let i = 1; i < strs.length; i++) {
    let s = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (str[j] !== strs[i][j]) break;
      s += str[j];
    }
    if (s === "") return s;
    if (prefixLen > 0) {
      prefixLen = Math.min(prefixLen, s.length);
    } else {
      prefixLen = s.length;
    }
  }
  return str.substring(0, prefixLen);
};
