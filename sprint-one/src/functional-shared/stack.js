var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = {};
  myStack.storage = {};
  myStack.counter = 0;

  _.extend(myStack, stackMethods);

  return myStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
   
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function() {
  var deletedItem;
  if (this.counter > 0) {
    deletedItem = this.storage[--this.counter];
    delete this.storage[this.counter];
  }
  return deletedItem;
};


stackMethods.size = function() {
  return this.counter;
};

