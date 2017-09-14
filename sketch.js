var ship;
var flowers = [];
var drops = [];

function setup(){
  createCanvas(600, 400);
  ship = new Ship();			//instance of ship
  drop = new Drop();

  for (var i = 0; i < 6; i++) {
  	flowers[i] = new Flower(i*80+80, 60);
  }
}

function draw(){
	background(51);
	ship.show();

	for (var i = 0; i < drops.length; i++){
  		drops[i].show();
		drop[i].move();
	    for (var j = 0; j < flowers.length; j++) {
	    	if(drops[i].hits(flowers[j])){			//if you hit a flower
	    		console.log("Watering");
	    	}

    	}
    }
    
    for (var i = 0; i < flowers.length; i++) {
    	flowers.[i].show();
    }
}

function keyPressed(){		//used whenever someone clicks on the screen

	if (keyCode === RIGHT_ARROW){
		ship.move(1);		//move to the left. create a function move, and give it input left or right
	}	else if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	}
}