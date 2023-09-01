/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const skv = {};
  const tkv = {};
  for (let i = 0; i < s.length; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    if (skv[sChar] === undefined) {
      skv[sChar] = tChar;
    } else if (skv[sChar] !== tChar) {
      return false;
    }
    if (tkv[tChar] === undefined) {
      tkv[tChar] = sChar;
    } else if (tkv[tChar] !== sChar) {
      return false;
    }
  }
  return true;
};
