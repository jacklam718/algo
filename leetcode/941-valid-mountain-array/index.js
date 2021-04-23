/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {  
  let i = 0;
  while (arr[i] < arr[i+1]) {
    i++;
  }
  if (i === 0 || i === arr.length - 1) {
    return false;
  }
  while (arr[i] > arr[i+1]) {
    i++;
  }
  return i === arr.length - 1;
};