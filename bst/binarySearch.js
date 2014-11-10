// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// The left and right subtree each must also be a binary search tree.
// Each node can have up to two successor nodes.
// There must be no duplicate nodes.
// A unique path exists from the root to every other node

function Node(key,val)
{
	this.right = 0;
	this.left = 0;
	this.key = key || null;
	this.val = val || null;
}

Node.prototype.addNode = function(key,val)
{
	if(this.key == null)
	{
		//debugger;
		this.key = key;
		this.val = val;
	}
	else
	{
		var destNode = this.findLeaf(key);
		destNode[0][destNode[1]] = new Node(key,val);
		//debugger;
	}
}

Node.prototype.findLeaf = function(key)
{
	var tempNode = this;

	if(key < tempNode.key)
	{
		if(tempNode.left == 0)
		{
			return [tempNode, 'left'];
		}
		return tempNode.left.findLeaf(key);
	}

	// if(key >= tempNode.key)
	else
	{
		if(tempNode.right == 0)
		{
			return [tempNode, 'right']
		}
		return tempNode.right.findLeaf(key);
	}

	// else
	// {

	// 	return tempNode.findLeaf(key);

	// }
}

Node.prototype.displayLeaf = function(key, node)
{
	//var tempNode;
	//debugger;
	if(node === 0)
	{
		throw new Error("Node not on tree.");
	}

	var tempNode = node || this;

	if(tempNode.key == key)
	{
		return tempNode.val;
	}
	else if(key < tempNode.key)
	{
		return tempNode.displayLeaf(key, tempNode.left);
	}
	//else if(key >= tempNode.key)
	else
	{
		return tempNode.displayLeaf(key, tempNode.right);
	}
}

var binaryTree = new Node();
binaryTree.addNode("elephant", "stinks");
binaryTree.addNode("viper", "stings");
binaryTree.addNode("giraffe", "rings");
binaryTree.addNode("armadillo", "hardens");
binaryTree.addNode("alfalfa", "stands");
//debugger;
console.log(binaryTree.displayLeaf("giraffe"));

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