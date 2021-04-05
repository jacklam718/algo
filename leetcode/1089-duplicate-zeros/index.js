/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (j = arr.length - 1; j > i; j--) {
        arr[j] = arr[j-1];
      }
      i++;
    }
  }
};