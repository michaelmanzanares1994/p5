function Ship(){						//ship object, which has a show function
	this.x = width/2;

	this.show = function(){				//constructor. 
		fill(255);
		rectMode(CENTER);
		rect(this.x, height-20, 20, 60);
	}
	
	this.move = function(dir){
		this.x += dir*5;
	}
}

