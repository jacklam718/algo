# My idea for this problem:

1. Begin by maintaining an array called `nums` to store incoming integers as they are added via the add method.
2. Next, I iterate through the `nums` array, and for each integer, I calculate the difference between the specified value and the current integer using the formula `const n = value - nums[i]`.
3. To efficiently track potential pairs, I use a hash map called `kv`. If I encounter a calculated difference that already exists as a key in the `kv` hash map, it signifies the presence of a pair of integers whose sum equals the target value.