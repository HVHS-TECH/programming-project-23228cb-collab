// setup()
/*******************************************************/
	let mowerDirection = 0;
function setup() {
	console.log("setup: ");
	
	let Canvas = createCanvas( 700, 605);
	Canvas.position(windowWidth/4, 10);
	world.gravity.y = 0;
	grassGroup = new Group();
	
	
	//create a line of 10 sprites across the top of the screen
	for (var i = 0; i < 20; i++) {
		spriteColor = color('lime');
  	for (var x = 0; x < 23; x++) {
  		var grass = new Sprite(x*30+19, i*30+19, 30, 30, 'k' );
		grass.color = spriteColor;
    	grassGroup.add(grass);
}
}
//sprites
	wallLH  = new Sprite(0, 300, 8, 600, 'k');
	wallRH  = new Sprite(700, 300, 8, 605, 'k');
	wallTop = new Sprite(400, 0, 800, 8, 'k');
	wallBot = new Sprite(400, 605, 800, 8, 'k');
    mower = new Sprite(45, 535, 120, 90, 'd' );
	
	mower.color = "Red";
	mower.drag = 1;
	mower.friction = 10;
	mower.drag = 10;
	mower.bounciness = -10;
	wallBot.color = 'black';
	wallLH.color = 'black';
	wallRH.color = 'black';
	wallTop.color = 'black';

//grass collision
	grassGroup.collides(mower, grassCutFunc );
	
}
	

//grass delete function
	function grassCutFunc(_ssss, _mower){
		_ssss.remove();
	}


/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background("green");
	mower.direction = mowerDirection;
	mower.rotation =  mowerDirection;
    //mower left/right
if (kb.pressing('a')) {
	mowerDirection = mowerDirection-2;
};

if (kb.pressing ('d')) {
   	mowerDirection = mowerDirection+2;
};



//if (kb.released('a')){
	//mower.rotationSpeed = 0;
	
//}
//else if (kb.released('d')){
	//mower.rotationSpeed = 0;
	
//};

//mower Up/down
if (kb.pressing('s')) {
    mower.speed = -2;
}
else{
	mower.speed = 0;
};
if (kb.pressing('w')){
	mower.speed = 2;
}
else{
	mower.speed = 0;
};
}

/*******************************************************/
//  END OF APP
/*******************************************************/