var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myQueue = Object.create(queueMethods);

  myQueue.storage = {};
  myQueue.start = 0;
  myQueue.end = 0;

  return myQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.end++] = value;
};

queueMethods.dequeue = function() {
  var deletedItem;

  if (this.start < this.end) {
    deletedItem = this.storage[this.start];
    delete deletedItem;
    this.start++;
    return deletedItem;
  }
};

queueMethods.size = function() {
  return this.end - this.start;
};
