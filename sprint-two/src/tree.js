var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  
  // your code here
  newTree.children = [];// fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);

};

treeMethods.contains = function(target) {
  //var tree = null || this.
  if (this.value === target) {
    return true;
  } 

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  } 
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
   Big O of addChild is logarithmic ie it traverses at the max the
   height of the tree(from the root node to the leaf).
  
   Big O of contains is linear o(n) beacuse it might require us to visit
   all of the children before we find the target

 */ 

