/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};
  this.keys = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const index = this.keys.indexOf(key);
  if (index !== -1) {
    this.keys.splice(index, 1);
    this.keys.push(key);
    return this.cache[key];
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const index = this.keys.indexOf(key);
  if (index !== -1) {
    this.keys.splice(index, 1);
    this.keys.push(key);
  } else {
    if (this.keys.length === this.capacity) {
      this.keys.shift();
    }
    this.keys.push(key);
  }
  this.cache[key] = value;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */