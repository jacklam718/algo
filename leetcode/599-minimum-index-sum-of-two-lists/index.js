/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const n = Math.max(list1.length, list2.length);
  let result = [];
  let min = Infinity;
  const kv1 = {};
  const kv2 = {};

  for (let i = 0; i < n; i++) {
    if (list1[i]) kv1[list1[i]] = i;
    if (list2[i]) kv2[list2[i]] = i;
  }

  for (let i = 0; i < n; i++) {
    if (list1[i] in kv2) {
      const sum = i + kv2[list1[i]];
      if (sum < min) {
        min = sum;
        result = [list1[i]];
      } else if (sum === min) {
        result.push(list1[i]);
      }
    }
  }
  return result;
};
