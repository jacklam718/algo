/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const a = s.split(" ");
  for (var reversed = "", i = a.length - 1; i >= 0; i--) {
    if (a[i]) reversed += a[i] + " ";
  }
  return reversed.trim();
};
