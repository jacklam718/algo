/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === 0) {
      for (let y = arr.length-1; y >= x; y--) {
        arr[y+1] = arr[y]
      }
      x++
      arr.pop()
    }
  }
};