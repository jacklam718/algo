/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const n = Math.max(list1.length, list2.length);
  let result = [];
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    const j = list2.findIndex((s) => s === list1[i]);
    if (j !== -1) {
      const sum = i + j;
      if (sum < min) {
        min = sum;
        result = [list1[i]];
      } else if (min === sum) {
        result.push(list1[i]);
      }
    }
  }
  return result;
};
