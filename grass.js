// setup()
/*******************************************************/
	let timer = 0;
	let grassCount =0;
	
function setup() {
	//setup
	console.log("setup: ");
	let Canvas = createCanvas( 700, 645);
	Canvas.position(windowWidth/4, 50);
	world.gravity.y = 0;
	grassGroup = new Group();
	frameRate(60);
	
	
	
	//create a line of 10 sprites across the top of the screen
	for (var i = 0; i < 38; i++) {
		spriteColor = color('lime');
  	for (var x = 0; x < 44; x++) {
  		var grass = new Sprite(x*15+30, i*15+66, 15, 15, 'k' );
		grass.color = spriteColor;
    	grassGroup.add(grass);
}
}
//sprites
	wallLH  = new Sprite(0, 340, 8, 600, 'k');
	wallRH  = new Sprite(700, 340, 8, 605, 'k');
	wallTop = new Sprite(400, 40, 800, 8, 'k');
	wallBot = new Sprite(400, 645, 800, 8, 'k');
    mower = new Sprite(45, 535, 60, 45, 'd' );
	
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
	text(timer,350,20);
	textSize(20,20);
	grassCount = grassGroup.length;
	console.log(grassGroup.length);

	if(grassGroup.length=0){
	timer=frameCount/60;
	timer=Math.round(timer*1000)/1000;
	console.log(timer);
};
	
    //mower left/right
if (kb.pressing('a')) {
	mower.rotation = 180
	mower.vel.x = -2;
};

if (kb.pressing ('d')) {
	mower.rotation = 0
	mower.vel.x = 2;

};

if (kb.released('a')){
	mower.rotation = 180
	mower.vel.x = 0;
	mower.rotationSpeed = 0
}

else if (kb.released('d')){
	mower.rotation = 0
	mower.vel.x = 0;
	mower.rotationSpeed = 0
};

//mower Up/down
if (kb.pressing('s')){
	mower.vel.y = 2;
	mower.rotation = 90;
}
else if (kb.released('s')){
	mower.vel.y = 0;
	mower.rotationSpeed = 0
};

if (kb.pressing('w')){
	mower.vel.y = -2;
	mower.rotation = 270;
}
else if (kb.released('w')){
	mower.vel.y = 0;
	mower.rotationSpeed = 0;
};

//mower diagonal
if (kb.pressing('w')&&kb.pressing('d')){
	mower.rotation = 315;
}
else if(kb.released('w')&&kb.released('d')){
	mower.rotationSpeed = 0;
};

if (kb.pressing('w')&&kb.pressing('a')){
	mower.rotation = 225;
}
else if(kb.released('w')&&kb.released('a')){
	mower.rotationSpeed = 0;
};

if (kb.pressing('s')&&kb.pressing('d')){
	mower.rotation = 45;
}
else if(kb.released('s')&&kb.released('d')){
	mower.rotationSpeed = 0;
};

if (kb.pressing('s')&&kb.pressing('a')){
	mower.rotation = 135;
}
else if(kb.released('s')&&kb.released('a')){
	mower.rotationSpeed = 0;
};

}

/*******************************************************/
//  END OF APP
/*******************************************************/