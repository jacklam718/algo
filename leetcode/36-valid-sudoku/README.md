# My idea for this problem:

1. I loop through the board.
2. I create a hashmap to store every visited cell, using the cell value as the key and storing the row and column as the value.
3. If I find a cell in the hashmap, I loop through the stored rows and columns and check for repetitions in the same row or column, as well as repetitions in the 3x3 box.

the time complexity of the algorithm is `O(m * n)` where m is the number of rows and n is the number of columns and the space complexity of the algorithm is also `O(m * n)`