var TwoSum = function () {
  this.nums = [];
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.nums.push(number);
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  const kv = {};
  for (let i = 0; i < this.nums.length; i++) {
    const n = value - this.nums[i];
    if (kv[n]) return true;
    kv[this.nums[i]] = true;
  }
  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
