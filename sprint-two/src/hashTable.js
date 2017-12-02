

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.createBucket(k, v, index);
};

HashTable.prototype.createBucket = function(k, v, index) {
  var bucket;
  var tuple;
  if (this._storage[index] === undefined) {
    bucket = [];
    tuple = [];
    tuple.push(k, v);
    bucket.push(tuple);
    this._storage[index] = bucket;
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        var previousValue = this._storage[index][i][1];
        this._storage[index][i][1] = v;
        return previousValue;
      } else {
        
      }
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
 */


