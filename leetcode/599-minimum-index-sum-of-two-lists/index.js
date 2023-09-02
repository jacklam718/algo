/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let result = [];
  let min = Infinity;
  const m = new Map();

  for (let i = 0; i < list2.length; i++) {
    m.set(list2[i], i);
  }

  for (let i = 0; i < list1.length; i++) {
    const j = m.get(list1[i]);
    if (j !== undefined) {
      const sum = i + j;
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
