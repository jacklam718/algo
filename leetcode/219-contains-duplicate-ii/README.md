# My idea for this problem:

**Brute force**
1. Using two loops: an outer loop and an inner loop.
2. Check if j <= i + k.
3. Check if nums[i] === nums[j], return true.
4. Return false if we loop through the nums array and can't meet the above conditions.

The time complexity of the algorithm will be `O(n * 2)`.

**Hashmap**
1. I initialize a hashmap to store the elements in nums as keys and their indices as values.
2. I iterate through the nums array. For each element, I check its index in the hashmap. If the element is already present and the difference between the current index and the stored index is less than or equal to k (i.e., current_index - hashmap.get(nums[i]) <= k), then I return true.
3. Otherwise, I update the hashmap with the current element and its index.
4. I repeat steps 2 and 3 until I reach the end of the nums array. If no duplicates within the range k are found, I return false.

The time complexity of the algorithm will be `O(n)` and space complexity will be `O(n)` as well.