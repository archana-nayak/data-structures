

// Instantiate a new graph
var Graph = function() {
  this.nodes = {}; // Graph is a collection of nodes
  // To look for the edges , lookup the nodes which store
  //the edges that connect to it.
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var vertice = {};
  vertice.value = node;
  vertice.edges = []; // use object instead
  this.nodes[node] = vertice;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (this.nodes[node] !== undefined);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  
// Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var vertexFrom = this.nodes[fromNode];
  var vertexTo = this.nodes[toNode];
  return vertexFrom && (vertexFrom.edges).includes(vertexTo);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //Get node with value 3 (fromNode)
  //push the reference to node 3 into edges of node 2
  // do the same for node 2 ie push node 2 into edges of node 3
  var vertexFrom = this.nodes[fromNode];
  var vertexTo = this.nodes[toNode];
  if (vertexFrom && vertexTo) {
    vertexFrom.edges.push(vertexTo);
    vertexTo.edges.push(vertexFrom); 
  } else {
    throw new error;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


