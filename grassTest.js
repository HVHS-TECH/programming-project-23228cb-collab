// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");

	cnv = new Canvas( 800, 800);
	

	//create a line of 10 sprites across the top of the screen
for (var i = 0; i < 8; i++) {
	spriteColor = color(random(255), random(255), random(255))
  	for (var x = 0; x < 40; x++) {
  	var block = new Sprite(200,200 ,30 );
	block.color = spriteColor;
   
}

  }
   world.gravity.y = 10;
	wallLH  = new Sprite(0, 400, 8, windowHeight, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(800, windowHeight/2, 8, windowHeight, 'k');
	wallTop = new Sprite(windowWidth/2, 175, windowWidth, 8, 'k');
	wallBot = new Sprite(windowWidth/2, 800, windowWidth, 8, 'k');
    Rect = new Sprite(400, 400, windowWidth/5, windowHeight/10, 'd' );
	Rect.color = "Red";
}



/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("white");
    //Rect left/right
if (kb.pressing('left')) {
	Rect.vel.x = -20
}

else if (kb.pressing ('right')) {
   	Rect.vel.x = 20  
};

if (kb.released('left')){
	Rect.vel.x = 0
}
else if (kb.released('right')){
	Rect.vel.x = 0
};

//Rect Up/down
if (kb.pressing('down')) {
    	Rect.vel.y = 20
}

else if (kb.pressing ('up')) {
   	Rect.vel.y = -20
};

if (kb.released('down')){
	Rect.vel.y = 0
}
else if (kb.released('up')){
	Rect.vel.y = 0
};
//Rect Rotation
if (kb.pressing('e')) {
	Rect.rotationSpeed = 20
}

else if (kb.pressing ('q')) {
   	Rect.rotationSpeed = -20   
};

if (kb.released('q')){
	Rect.rotationSpeed = 0
}
else if (kb.released('e')){
	Rect.rotationSpeed = 0
};
}

/*******************************************************/
//  END OF APP
/*******************************************************/