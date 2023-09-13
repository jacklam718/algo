# My idea for this problem:

**My initial approach**

1. I employ a sliding window approach, using two pointers, left and right, to traverse the string.
2. A hash table is used to keep track of characters that have been visited. Additionally, a variable (max) is used to store the length of the longest substring without repeating characters.
3. When a character already exists in the hash table, it indicates a duplicate. At this point, I calculate the length of the current substring using the formula max = Math.max(max, right - left + 1).
4. Upon encountering a duplicate character, I increment the left pointer by 1, reset the hash table, and set the right pointer to the position of the left pointer.
5. I repeat Step 3 and Step 4 until the loop reaches the end of the string.

The time complexity of the algorithm is `O(n * 2)`, and the space complexity of the algorithm is `O(n)`.
