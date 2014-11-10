// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// The left and right subtree each must also be a binary search tree.
// Each node can have up to two successor nodes.
// There must be no duplicate nodes.
// A unique path exists from the root to every other node

function Node()
{
	this.next = null;
	this.previous = null;
}

Node.prototype.addNode = function(key,val)
{
	
}


// function binarySearchTree()
// {
// }

// binarySearchTree.prototype.addNode = function(node)
// {

// }

// binarySearchTree.prototype.removeNode = function(key)
// {

// }

// binarySearchTree.prototype.