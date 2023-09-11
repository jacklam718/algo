# My idea for this problem:

**Initial approach:**
1. Since stones represents the stones I have, I plan to iterate through the stones string. During this iteration, I will count each type of stone and store these counts in a hash table called stoneCounts.
2. Next, I'll initialize a variable to store the count of jewels found. I will then iterate through the jewels string. If a jewel exists in the stoneCounts hash table, I will add its count to the initialized variable.
3. I will repeat step 2 until I've looped through all the jewels. Finally, I will return the count stored in the variable.

The algorithm would be `O(n + m)` where `n` is the length of elements in the stones string, `m` is the length of elements in the jewels string. the space complexity is `O(n)`.


**Second approach:**
1. I convert the `jewels` string into a `set`
2. iterate over the `stones` string, I check if stone in jewel set if it exists in the set the I add up 1 to the count
3. I will repeat step 2 until I've looped through all the jewels. Finally, I will return the count stored in the variable.

For the this approach, the time complexity is O(n) and the space complexity is O(m). Because I only iterate through the `stones` and only store `jewels` into a set.