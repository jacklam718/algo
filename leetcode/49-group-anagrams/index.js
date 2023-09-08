/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const buckets = {};
  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split("").sort().join("");
    if (buckets[key]) {
      buckets[key].push(strs[i]);
    } else {
      buckets[key] = [strs[i]];
    }
  }
  return Object.values(buckets);
};
