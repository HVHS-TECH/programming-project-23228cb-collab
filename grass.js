//variables
	let timer = 0;
	let grassCount =0;
//image preload
function preload() {
  mowerSpriteIMG = loadImage('assets/lawnMower.png');
  grassIMG = loadImage('assets/grassSprite.png')
}	

// setup()
/*******************************************************/
function setup() {
	//setup
	console.log("setup: ");
	let Canvas = createCanvas( 700, 645);
	Canvas.position(windowWidth/4, 50);
	world.gravity.y = 0;
	grassGroup = new Group();
	frameRate(60);
	grassIMG.resize(45,45);
	//grass spawn
	for (var i = 0; i < 38; i++) {
		
  	for (var x = 0; x < 44; x++) {
  		var grass = new Sprite(x*15+30, i*15+66, 15, 15, 'k' );
	
    	grassGroup.add(grass);
		grass.image = (grassIMG);
}
};

//wall sprites
	wallLH  = new Sprite(0, 340, 8, 600, 'k');
	wallRH  = new Sprite(700, 340, 8, 605, 'k');
	wallTop = new Sprite(400, 40, 800, 8, 'k');
	wallBot = new Sprite(400, 645, 800, 8, 'k');
	wallBot.color = 'black';
	wallLH.color = 'black';
	wallRH.color = 'black';
	wallTop.color = 'black';

//mower sprite code 
	mower = new Sprite(45, 535, 60, 45, 'd' );
	mower.image = (mowerSpriteIMG);
	mower.friction = 20;

//grass collision
	grassGroup.overlaps(mower, grassCutFunc );
	
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
	mower.rotationSpeed = 0;
	//timer
	text(timer,400,20);
	textSize(20);
	console.log(grassCount);
	grassCount = grassGroup.length;
	
	//grass left
	let grassPersent = grassCount/1656*100;
	grassPersent=Math.round(grassPersent*100)/100;
	text(grassPersent+'%',300,20);
	

	//time stop
	if(grassCount>0){
	timer=frameCount/60;
	timer=Math.round(timer*1000)/1000;
	
};
	
    //mower left/right
if (kb.pressing('a')) {
	mower.rotation = 270;
	mower.vel.x = -4;
};

if (kb.pressing ('d')) {
	mower.rotation = 90;
	mower.vel.x = 4;

};

if (kb.released('a')){
	mower.rotation = 180;
	mower.vel.x = 0;
	mower.rotation = 270;
}

else if (kb.released('d')){
	mower.rotation = 0;
	mower.vel.x = 0;
	mower.rotation = 90;
};

//mower Up/down
if (kb.pressing('s')){
	mower.vel.y = 4;
	mower.rotation =180;
}
else if (kb.released('s')){
	mower.vel.y = 0;
	mower.rotation = 180;
};

if (kb.pressing('w')){
	mower.vel.y = -4;
	mower.rotation = 0;
}
else if (kb.released('w')){
	mower.vel.y = 0;
	mower.rotation = 0;
};

//mower diagonal
if (kb.pressing('w')&&kb.pressing('d')){
	mower.rotation = 45;
}
else if(kb.released('w')&&kb.released('d')){
	mower.rotation = 45;
};

if (kb.pressing('w')&&kb.pressing('a')){
	mower.rotation = 315;
}
else if(kb.released('w')&&kb.released('a')){
	mower.rotation = 315;
};

if (kb.pressing('s')&&kb.pressing('d')){
	mower.rotation = 135;
}
else if(kb.released('s')&&kb.released('d')){
	mower.rotation = 135;
};

if (kb.pressing('s')&&kb.pressing('a')){
	mower.rotation = 225;
}
else if(kb.released('s')&&kb.released('a')){
	mower.rotation = 225;
};

}

/*******************************************************/
//  END OF APP
/*******************************************************/