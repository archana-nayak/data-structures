var BinarySearchTree = function(value) {

  var mySearchTree = Object.create(searchTreeMethods);
  mySearchTree.value = value;
  mySearchTree.left = null;
  mySearchTree.right = null;
  return mySearchTree;
  
};

 var searchTreeMethods = {};

searchTreeMethods.insert = function(value) { 
  var current = this;
  var currentValue = this.value;
   
   while (current !== null) {
     if (value > currentValue) {
       if (current.right === null) {
         current.right = BinarySearchTree(value);
         return current.right;
       } else {
         currentValue = current.right.value;
         current = current.right;
       }
     } else if (value <= currentValue) {
       if (current.left === null) {
         current.left = BinarySearchTree(value);
         return current.left;
       } else {
         currentValue = current.left.value;
         current = current.left;
       }
     }
    }
 	
 };

searchTreeMethods.contains = function(value) { 
   var current = this;
   var currentValue = this.value;
   while (current) {
     if (value === current.value) {
     	return true;
     } else if (value > current.value ) {
     	current = current.right;
     } else {
     	current = current.left;
     }
   }
   return false;
};

searchTreeMethods.depthFirstLog = function(cb) { 
  console.dir(this);
  var current =  Array.prototype.slice.call(arguments)[1] || this ;
  if (current) {
    cb(current.value);	
  } 
  if (current.left) {
    current.left.depthFirstLog(cb);
  }
  if (current.right) {
    current.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 The time complexity of the contains is logarithmic because any given level, the number of nodes to
 be searched is slashed in half. o(logn).
 The time complexity of insert is logarithmic too because of the exact same reason as above. o(logn).
 The time complexity of depthFirstLog is o(n) or linear because it has to visit all the nodes
 */
