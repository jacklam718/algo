# My idea for this problem:

1. Since stones represents the stones I have, I plan to iterate through the stones string. During this iteration, I will count each type of stone and store these counts in a hash table called stoneCounts.
2. Next, I'll initialize a variable to store the count of jewels found. I will then iterate through the jewels string. If a jewel exists in the stoneCounts hash table, I will add its count to the initialized variable.
3. I will repeat step 2 until I've looped through all the jewels. Finally, I will return the count stored in the variable.

The algorithm would be `O(n + m)` where `n` is the length of elements in the stones string, `m` is the length of elements in the jewels string. the space complexity is `O(n)`.