var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var result;
    if (counter > 0) {
      counter--;
      result = storage[counter];
      delete storage[counter];
    }
    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;

};

var myStack = Stack();