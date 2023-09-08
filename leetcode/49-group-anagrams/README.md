# My idea for this problem:

**Initial approach**
1. Initialize a hashtable buckets to store grouped strings.
2. Iterate through the array strs.
3. Sort each element string of the array, e.g., cba becomes abc.
4. Use the sorted string as a key for the hashtable and store the original string in the corresponding array value.

This approach has a time complexity of `O(N K log K)`, where N is the length of strs and K is the maximum length of a string in strs. This is because for each of the N strings, we sort it in `O(K log⁡ K)`
`O(K log K)` time.

Space complexity is `O(N K)`, which is needed to store the buckets object and its arrays.

<img width="600" src="https://github.com/jacklam718/algo/assets/5494638/a769d71a-7801-47e9-ae26-eb8f69a9bd9f"/>


**To optimize the complexity, the key is how to hash the key string**

My second approach is to implement a hash function that takes a string str as input and returns a hashed string e.g `eat -> a1e1t1`. Here's how it works:
1. Initialize a hashtable m to store occurrences of characters in the string.
2. Initialize an alphabet set chars containing the letters 'a' to 'z'.
3. Iterate through the input string str. For each character, use it as a key in the hashtable m, setting its value to 1 if it doesn't already exist, or incrementing it if it does.
4. Initialize a string hashStr to store the hashed string.
5. Loop through the alphabet set chars. If a character from the set exists in the hashtable m, append the character and its occurrence count to hashStr.
6. Return the hashed string hashStr.

```javascript
// Array of a-z alphabets
const chars = new Array(26).fill(null).map((_, i) => String.fromCharCode(97 + i));

var hash = (str) => {
  const m = {};
  for (let i = 0; i < str.length; i++) {
    m[str[i]] = m[str[i]] ? m[str[i]] + 1 : 1;
  }
  let hashStr = '';
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] in m) hashStr += `${chars[i]}${m[chars[i]]}`;
  }
  return hashStr;
} 
```
