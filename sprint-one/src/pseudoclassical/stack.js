var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter++] = value;
};

Stack.prototype.pop = function() {
  var deletedItem;

  if (this.counter > 0) {
    deletedItem = this.storage[--this.counter];
    delete deletedItem;
    return deletedItem;
  }
};

Stack.prototype.size = function() {
  return this.counter;
};


