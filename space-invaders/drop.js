function Drop(x, y) {
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete = false;

	this.show = function() {								//show function
		noStroke();
		fill(150, 0, 255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.evaporate = function() {							//evaporate function
		this.toDelete = true;								//set flag to true
	}

	this.hits = function(flower) { 							//function to how to tell when a flower gets hit
		var dropToFlower = dist(this.x, this.y, flower.x, flower.y);	//distance from the water drop to the flower
		if(dropToFlower < this.r + flower.r) {							//if that distance is less than the two radii, they are overlapping
			return true;
		} else {
			return false;
		}
	}

	this.move = function() {											//move function
		this.y = this.y - 3;											//moves up the y axis
	}


}