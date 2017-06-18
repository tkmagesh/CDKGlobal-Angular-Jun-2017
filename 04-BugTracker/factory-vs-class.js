//Factory
function getSpinner(){
	var counter = 0;
	function increment(){
		return ++counter;
	}
	function decrement(){
		return --counter;
	}
	return {
		up : increment,
		down : decrement
	}
}
var spinner = getSpinner();

//Class
function Spinner(){
	var counter = 0;
	this.up = function(){
		return ++counter;
	};
	this.down = function(){
		return --counter;
	}
}
var spinner = new Spinner();