# My idea for this problem:

1. I initialize two maps (hash tables) to store the counts of each number in `nums1` and `nums2`, respectively. Also, create an empty array to store the result.
2. I iterate through `nums1` and `nums2` simultaneously.
3. For each number in nums1, check if it exists in the first map. If it does, increment its count; otherwise, add it to the map with a count of 1.
4. Similarly, for each number in nums2, check if it exists in the second map. If it does, increment its count; otherwise, add it to the map with a count of 1.
5. Now, both maps contain the counts of each number in their respective arrays.
6. I iterate through one of the maps (it doesn't matter which one) and check if each number exists in the other map as well.
7. If a number exists in both maps, it is part of the intersection. Add it to the result array as many times as it appears in both arrays.
8. Finally, return the result array.

![Limnu_20230903](https://github.com/jacklam718/algo/assets/5494638/c937f3a3-c271-4692-a6f3-1d97757a7284)
