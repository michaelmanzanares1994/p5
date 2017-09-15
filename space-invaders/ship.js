function Ship() {							//constructor function 
	this.x = width/2;
	this.xdir = 0;

	this.show = function() {				//make a ship object, which has a show function
		fill(255);
		rectMode(CENTER);
		rect(this.x, height-20, 20, 60);
	}

	this.move = function(dir){				//move function
		this.x += this.xdir*5;					//moves ship 
	}

	this.setDir = function (dir){
		this.xdir = dir;
	}
}

