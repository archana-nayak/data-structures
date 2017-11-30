var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var myStack = Object.create(stackMethods);
   
  myStack.storage = {};
  myStack.counter = 0;
  
  return myStack;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.storage[this.counter++] = value;
};

stackMethods.pop = function() {
  var deletedItem;

  if (this.counter > 0) {
    this.counter--;
    deletedItem = this.storage[this.counter];
    delete deletedItem;
    return deletedItem;
  }

};

stackMethods.size = function() {
  return this.counter;
};




