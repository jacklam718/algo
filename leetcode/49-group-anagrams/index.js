/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const buckets = {};
  const projection = Array(26);
  for (let s of strs) {
    const count = projection.fill(0);
    for (let c of s) {
      count[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = count.join(",");
    if (buckets[key]) {
      buckets[key].push(s);
    } else {
      buckets[key] = [s];
    }
  }
  return Object.values(buckets);
};
