var MyHashSet = function () {
  // Initial bucket size, this number is somewhat arbitrary can be adjusted
  // based on the specific use case and the expected number of elements
  this._size = 1000;
  this.buckets = new Array(this._size).fill(null).map(() => new Array());
};

MyHashSet.prototype._hash = function (key) {
  return key % this._size;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  const hash = this._hash(key);
  const exists = this.buckets[hash].includes(key);
  if (!exists) {
    this.buckets[hash].push(key);
  }
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  const hash = this._hash(key);
  const index = this.buckets[hash].indexOf(key);
  if (index !== -1) {
    this.buckets[hash].splice(index, 1);
  }
};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  const hash = this._hash(key);
  return this.buckets[hash].includes(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
