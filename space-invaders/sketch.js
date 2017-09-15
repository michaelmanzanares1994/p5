var ship;
var flowers = [];
var drops = [];

function setup() {										//built in setup funciton
  createCanvas(600, 400);
  
  ship = new Ship();									//instance of a ship

  for (var i = 0; i < 6; i++) {							//instances of flowers
  	flowers[i] = new Flower(i*80+80, 60);
  }
  
}

function draw() {										//built in draw function
	background(51);
	ship.show();
	ship.move();


	for (var i = 0; i < drops.length; i++) {			//hitting and growing flower
  		drops[i].show();
		drops[i].move();
	    for (var j = 0; j < flowers.length; j++) {
	    	if (drops[i].hits(flowers[j])) {			//if you hit a flower
	    		flowers[j].grow();						//have it grow
	    		drops[i].evaporate();					//remove water 
	    	} 
    	}
    }

    var edge = false;

    for (var i = 0; i < flowers.length; i++) {			//draw flowers
    	flowers[i].show();
    	flowers[i].move();
    	
    	if (flowers[i].x > width || flowers[i].x < 0) {
    		edge = true;
    	}
    }

    if (edge) {
    	for (var i = 0; i < flowers.length; i++){
    		flowers[i].shiftDown();
    	}
    }
   	for (var i = drops.length-1; i >= 0; i--) {			//remove water
   		if (drops[i].toDelete) {
   			drops.splice(i, 1);
   		}
   	} 
}

function keyPressed() {									//built in func used whenever someone clicks on the screen
	if (key === " ") {									//if spacebar is pressed
		var drop = new Drop(ship.x, height);
		drops.push(drop);								//add drop to drops array
	}
	if (keyCode === RIGHT_ARROW) {						//if right arrow is pressed
		ship.setDir(1);									//move ship the right. create a function move, and give it input left or right
	}	else if (keyCode === LEFT_ARROW) {
		ship.setDir(-1);									//move ship left
	}
}

function keyReleased() {
	if (key != ' ') {
		ship.setDir(0);
	}
}
