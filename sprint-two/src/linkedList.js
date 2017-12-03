var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    }
    list.tail.next = newNode;
    list.tail = list.tail.next;
    return list.tail;
  };
  
  list.removeHead = function() {
    var deletedItem, result;
    //var result;

    if (list.head !== null) {
      deletedItem = list.head;
      result = deletedItem.value;
      if(list.head !== list.tail){
        list.head = list.head.next;
        deletedItem.next = null;
      } else{
        list.head = null;
        list.tail = null;
      }
      delete deletedItem;
    } 
    return result;
  };

  list.contains = function(target) {
    for (var current = list.head; current !== null; current = current.next) {
      if (current.value === target) {
        return true;
      }
    } 
      
    return false;
  };

  return list;

};
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};




/*
 * Complhe time complexexity: What is tity of the above functions?
 */
