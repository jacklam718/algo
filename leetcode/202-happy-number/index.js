/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    for (var i = sum = 0, digits = n.toString(); i < digits.length; i++) {
      sum += parseInt(digits.charAt(i)) ** 2;
    }
    seen.add(n);
    n = sum;
  }
  return n === 1;
};