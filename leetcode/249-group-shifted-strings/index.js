/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
  const buckets = {};
  for (let str of strings) {
    const key = hash(str);
    if (buckets[key]) {
      buckets[key].push(str);
    } else {
      buckets[key] = [str];
    }
  }
  return Object.values(buckets);
};

var hash = function (str) {
  let key = [];
  for (let i = 0; i < str.length - 1; i++) {
    let diff = str[i + 1].charCodeAt() - str[i].charCodeAt();
    if (diff < 0) {
      diff += 26;
    }
    key.push(diff);
  }
  return key.join(",");
};
