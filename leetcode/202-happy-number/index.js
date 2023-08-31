/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n, seen = new Set()) {
  for (var i = sum = 0, digits = digits = n.toString(); i < digits.length; i++) {
    sum += parseInt(digits.charAt(i)) ** 2;
  }
  if (n !== 1 && !seen.has(n)) {
    seen.add(n);
    return isHappy(sum, seen)
  }
  return sum === 1;
};