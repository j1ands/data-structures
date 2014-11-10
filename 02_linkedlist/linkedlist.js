function LinkedList()
{
	//var list = {};
	this.head = null;
	this.tail = null;

	var counter = 0;

	this.addToTail = function(input)
	{
		var tempNode = new Node(input,null,this.tail);
		var tailNode = this.tail;
		this.tail = tempNode;
		
		if(tailNode)
		{
			tailNode.next = tempNode;
		}

		if(!this.head)
		{
			this.head = tempNode;
		}		
	}

	this.addToHead = function(input)
	{
		var tempNode = new Node(input,this.head,null);
		var headNode = this.head;
		this.head = tempNode;
		
		if(headNode)
		{
			headNode.previous = tempNode;
		}

		if(!this.tail)
		{
			this.tail = tempNode;
		}				
	}

	this.removeHead = function()
	{
		if(this.head)
		{
			var tempNode = this.head;
			this.head = tempNode.next;
			

			if(!this.head)
			{
				this.tail = null;
			}

			else
			{
				this.head.previous = null;
			}

			return tempNode.val;
		}

	}

	this.removeTail = function()
	{
		if(this.tail)
		{
			var tempNode = this.tail;
			this.tail = tempNode.previous;

			if(!this.tail)
			{
				this.head = null;
			}

			else
			{
				this.tail.next = null;
			}

			return tempNode.val;
		}

		else
		{
			return undefined;
		}		
	}

	this.search = function(str)
	{
		for(var temp = this.head; temp; temp = temp.next)
		{
			if(temp.val === str)
			{
				return temp.val;
			}
		}
		return null;
	}
	
}

function Node(val,next,prev)
{
	this.val = val;
	this.next = next;
	this.previous = prev;
}