/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const a = s.split(" ");
  let result = "";
  for (let i = 0; i < a.length; i++) {
    for (let j = a[i].length - 1; j >= 0; j--) {
      result += a[i][j];
    }
    result += " ";
  }
  return result.trim();
};
