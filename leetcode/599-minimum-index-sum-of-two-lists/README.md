# My idea for this problem:

1. I initialize a `min` variable to store the minimum index sum and an array `result` to store common strings with the minimum index sum.
2. I loop through the the both list1, list2 and check if a string exists in both list1 and list2. If it does, I calculate the sum `(i + j)`.
3. If the current index sum is less than the minimum index sum I've seen so far, I treat the current index sum as the new minimum index sum. I reset the result array and add the current string (list1[i]) to it.
4. If the current index sum equals the minimum index sum, I add the current string (list1[i]) to the result array.

![Limnu_20230902 (1)](https://github.com/jacklam718/algo/assets/5494638/747efc00-0cba-42e8-87f2-fbc1f81d1b01)
