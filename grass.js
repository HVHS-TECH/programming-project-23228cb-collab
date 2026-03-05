// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( 800, 800);
	

	//create a line of 10 sprites across the top of the screen
for (var i = 0; i < 21; i++) {
	spriteColor = color('green')
  	for (var x = 0; x < 27; x++) {
  	var block = new Sprite(x*30+17, i*30+195, 30, 30, 'n' );
	block.color = spriteColor;
   
}

  }
   world.gravity.y = 0;
	wallLH  = new Sprite(0, 400, 8, windowHeight, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(800, windowHeight/2, 8, windowHeight, 'k');
	wallTop = new Sprite(windowWidth/2, 175, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, 800, windowWidth, 8, 'k');
    Rect = new Sprite(400, 400, windowWidth/5, windowHeight/10, 'd' );
	Rect.color = "Red";
	Rect.drag = 10
	
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
    //Rect left/right
if (kb.pressing('left')) {
		Rect.bearing = -90;
		Rect.applyForce(6);
	
}

else if (kb.pressing ('right')) {
   	Rect.rotationSpeed = 2  
	
};

if (kb.released('left')){
	Rect.rotationSpeed = 0
	
}
else if (kb.released('right')){
	Rect.rotationSpeed = 0
	
};

//Rect Up/down
if (kb.pressing('down')) {
    	Rect.vel.y = 2
}

else if (kb.pressing ('up')) {
   	Rect.vel.y = -2
};

if (kb.released('down')){
	Rect.vel.y = 0
}
else if (kb.released('up')){
	Rect.vel.y = 0
};
}

/*******************************************************/
//  END OF APP
/*******************************************************/