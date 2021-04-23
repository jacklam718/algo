/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
  if (arr.length < 3) {
    return false;
  }
  
  let y = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[y]) {
      y = i;
    }
  }
  
  if (y === 0 || y === arr.length-1) {
    return false;
  }
  
  if (arr[y-1] === arr[y] || arr[y+1] === arr[y]) {
    return false;
  }
  
  return (increasing(arr, y) && decreasing(arr, y))
};

var increasing = function(arr, index) { 
  for (let i = 0; i < index; i++) {
    if (arr[i] >= arr[i+1]) {
      console.log(arr[i], arr[i+1], i)
      return false;
    }
  }
  return true;
}

var decreasing = function(arr, index) {
  for (let i = index; i < arr.length-1; i++) {
    if (arr[i] <= arr[i+1]) {
      return false;
    }
  }
  return true;
}