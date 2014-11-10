/*
var hash = function(inputStr)
{
	//return inputStr[0];
	var sum = 0;
	
	for(var i = 0; i < inputStr.length; i++)
	{
		sum += inputStr.charCodeAt(i);
	}
	return sum % 25;
}
*/

function Queue()
{
	var q = [];
	var counter = 0;
	
	this.enqueue = function(input)
	{
		q[counter++] = input;
	}

	this.dequeue = function()
	{
		if(counter)
		{
			var returnedVal = q[0];
			q = q.slice(1,counter);
			counter--;
			return returnedVal;
		}

		else
		{
			return undefined;
		}
	}

	this.size = function()
	{
		return counter;
	}
}
