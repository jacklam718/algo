# My idea for this problem

Since Pascal's triangle exhibits symmetry, I'll:

1. Build a matrix that is symmetric in both height and width.
2. Calculate the values for the rowIndexth row efficiently using this symmetric matrix.
3. Return the values in mat[rowIndex].