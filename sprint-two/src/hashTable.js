

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.createBucket(k, v, index);
};

HashTable.prototype.createBucket = function(k, v, index) {
  var bucket, tuple;

  if (this._storage[index] === undefined) {
    bucket = [];
    tuple = [];
    tuple.push(k, v);
    bucket.push(tuple);
    this._storage[index] = bucket;
  } 

  for (var i = 0; i < this._storage[index].length; i++) {
    bucket = this._storage[index];
    if (bucket[i][0] === k) {
      var previousValue = bucket[i][1];
      bucket[i][1] = v;
      return previousValue;
    } else {
      tuple = [];
      tuple.push(k, v);
      bucket.push(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage[index];
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        bucket.splice(tuple, 1); 
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
   Complexity for every operation is Linear
   Time complexity of remove(), retrieve() and insert() in a hash table are 
   constant time.
   In our case, because n starts at 8 and will most probably be a small number,
   in that case the time complexity will be linear 
   (in terms of the length of the bucket array).
 */


