/**
 * @param {number[]} A
 * @return {number[]}
 */
 var sortArrayByParity = function(A) {
  for (let i = 0, j = 0; j < A.length; j++) {
    if (A[j] % 2 === 0) {
      swap(A, i++, j);
    }
  }
  return A;
};

var swap = function(arr, i1, i2) {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}