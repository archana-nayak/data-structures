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

searchTreeMethods.depthFirstLog = function(value) { 
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
