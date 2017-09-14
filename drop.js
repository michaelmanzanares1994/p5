function Drop(x, y){
	this.x = x;
	this.y = y;
	this.r = 8;
	
	this.show = function() {
		noStroke();
		fill(150, 0, 255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.hits = function(flower){					//how to tell when a flower gets hit
		var d = dist(this.x, this.y, flower.x flower.y);
		if(d < thir.r + flower.r){					//r is the radius of the obj
			return true;
		} else {
			return false;
		}
	}

	this.move = function(){
		this.y = this.y-3;
	}
}