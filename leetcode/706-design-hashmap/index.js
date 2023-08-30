var MyHashMap = function () {
  this._size = 1000;
  this._buckets = new Array(this._size).fill(null).map(() => new Array());
};

MyHashMap.prototype._hash = function (key) {
  return key % this._size;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const hash = this._hash(key);
  const index = this._buckets[hash].findIndex((pair) => pair[0] === key);
  if (index === -1) {
    this._buckets[hash].push([key, value]);
  } else {
    this._buckets[hash][index][1] = value;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const hash = this._hash(key);
  const index = this._buckets[hash].findIndex((pair) => pair[0] === key);
  if (index === -1) return -1;
  return this._buckets[hash][index][1];
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const hash = this._hash(key);
  const index = this._buckets[hash].findIndex((pair) => pair[0] === key);
  if (index !== -1) {
    this._buckets[hash].splice(index, 1);
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
