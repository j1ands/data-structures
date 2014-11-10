function Hash()
{
	this.numBuckets = 25;
	
	for(var x = 0; x < this.numBuckets; x++)
	{
		this["bucket" + x] = new LinkedList();
	}

	this.set = function(key,val)
	{
		if(typeof key != "string")
		{
			throw "Keys must be strings";
		}

		this["bucket" + this._hash(key)].replaceOrAdd(key,val);
	}

	this.get = function(key)
	{

		return this["bucket" + this._hash(key)].search(key);
	}

	this.hasKey = function(inputStr)
	{
		//This works too
		return !!this.get(inputStr)

		// if(this.get(inputStr))
		// {
		// 	return true;
		// }

		// else
		// {
		// 	return false;
		// }
	}

	this._hash = function(inputString)
	{
		var sum = 0;

		for(var i = 0; i < inputString.length; i++)
		{
			sum += inputString.charCodeAt(i);
		}

		return sum % 25;
	}

}

function LinkedList()
{
	this.head = null;
	this.tail = null;

	var counter = 0;

	this.addToTail = function(key,val)
	{

		var tempNode = new Node(key,val);

		//var tempNode = new Node(key,val,null,this.tail);
				
		var tailNode = this.tail;
		
		if(tailNode)
		{
			tailNode.next = tempNode;
		}

		this.tail = tempNode;	

		if(!this.head)
		{
			this.head = tempNode;
		}
		
	}

	// this.addToHead = function(key,val)
	// {
	// 	var tempNode = new Node(key,val,this.head,null);
	// 	var headNode = this.head;
	// 	this.head = tempNode;
		
	// 	if(headNode)
	// 	{
	// 		headNode.previous = tempNode;
	// 	}

	// 	if(!this.tail)
	// 	{
	// 		this.tail = tempNode;
	// 	}				
	// }

	// this.removeHead = function()
	// {
	// 	if(this.head)
	// 	{
	// 		var tempNode = this.head;
	// 		this.head = tempNode.next;	

	// 		if(!this.head)
	// 		{
	// 			this.tail = null;
	// 		}

	// 		else
	// 		{
	// 			this.head.previous = null;
	// 		}

	// 		return tempNode.val;
	// 	}

	// 	else
	// 	{
	// 		return undefined;
	// 	}
	// }

	// this.removeTail = function()
	// {
	// 	if(this.tail)
	// 	{
	// 		var tempNode = this.tail;
	// 		this.tail = tempNode.previous;
			
	// 		if(!this.tail)
	// 		{
	// 			this.head = null;
	// 		}

	// 		else
	// 		{
	// 			this.tail.next = null;
	// 		}

	// 		return tempNode.val;
	// 	}

	// 	else
	// 	{
	// 		return undefined;
	// 	}		
	//}

	this.search = function(str)
	{
		for(var temp = this.head; temp; temp = temp.next)
		{
			if(temp.key == str)
			{
				return temp.val;
			}
		}
		return null;
	}

	this.replaceOrAdd = function(key,val)
	{
		for(var temp = this.head; temp; temp = temp.next)
		{
			if(temp.key == key)
			{
				temp.val = val;
				return;
			}

		}

		this.addToTail(key,val);	

	}

}

function Node(key,val,next)
{
	this.key = key;
	this.val = val;
	this.next = next;
	//this.previous = prev;
}