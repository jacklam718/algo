/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let ans = 0;
  const stoneCounts = {};
  for (const stone of stones) {
    if (!stoneCounts[stone]) stoneCounts[stone] = 0;
    stoneCounts[stone]++;
  }
  for (const jewel of jewels) {
    if (jewel in stoneCounts) {
      ans += stoneCounts[jewel];
    }
  }
  return ans;
};
