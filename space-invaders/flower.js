function Flower(x, y){					
	this.x = x;
	this.y = y;
	this.r = 30;

	this.xdir = 1;

	this.show = function() {				//show function
		fill(255, 0, 200);					//pink
		ellipse(this.x, this.y, this.r*2, this.r*2);		//circle with radius
	}

	this.grow = function() {				//grow function
		this.r = this.r +2;					//at 2 px to radius
	}

	this.move = function() {				//move function
		this.x = this.x + this.xdir;		//add xdir and ydir to x and y coord.
	}

	this.shiftDown = function() {
		this.xdir *= -1;
		this.y += this.r;
	}
}