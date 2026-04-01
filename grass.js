//variables
let timer = 0;
let grassCount = 0;
//the amount of grass on start
let grassCountStart = 1660;
//canvas size
let canvasWidth = 700;
let canvasHeight = 645;
//game state
let gameState = "menu";

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
	world.gravity.y = 0;

	//canvas setup
	let Canvas = createCanvas(canvasWidth, canvasHeight);
	Canvas.position(windowWidth / 4, 50);
	frameRate(60);

	//grass code
	grassGroup = new Group();
	grassIMG.resize(45, 45);

	//grass spawn
	for (var i = 0; i < 38; i++) {

		for (var x = 0; x < 44; x++) {
			var grass = new Sprite(x * 15 + 30, i * 15 + 66, 15, 15, 'k');

			grassGroup.add(grass);
			grass.image = (grassIMG);
		}
	};

	//wall sprites code
	wallLH = new Sprite(0, canvasHeight / 2 + 20, 8, 600, 'k');
	wallRH = new Sprite(canvasWidth, canvasHeight / 2 + 20, 8, 605, 'k');
	wallTop = new Sprite(canvasWidth / 2, 40, 800, 8, 'k');
	wallBot = new Sprite(canvasWidth / 2, canvasHeight, 800, 8, 'k');
	wallGroup = new Group();
	wallGroup.add(wallBot, wallLH, wallRH, wallTop);
	wallGroup.color = ('black');

	//mower sprite code 
	mower = new Sprite(45, canvasHeight - 25, 60, 45, 'd');
	mower.image = (mowerSpriteIMG);
	mower.friction = 20;


	//grass collision
	grassGroup.overlaps(mower, grassCutFunc);

};

//grass delete function
function grassCutFunc(_ssss, _mower) {
	_ssss.remove();
};

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	console.log(gameState);
	if (gameState === "menu") {

		drawStart();

	} else if (gameState === "game") {

		drawGame();

	} else if (gameState === "end") {

		drawEnd();

	};
};

function drawStart() {
	background("white");
	//sprite visability
	mower.visible = false;
	grassGroup.visible = false;
	wallGroup.visible = false;
	//start game button
	if (kb.pressed('enter')) {
		gameState = "game";
	};
	//text
	text('Press Enter To Start', 100, 400);
};

function drawGame() {
	background("green");
	//sprite visablitiy 
	mower.visible = true;
	grassGroup.visible = true;
	wallGroup.visible = true;
	//setups
	mower.rotationSpeed = 0;
	grassCount = grassGroup.length;

	//grass left
	let grassPersent = grassCount / grassCountStart * 100;
	grassPersent = Math.round(grassPersent * 100) / 100;


	//if grass on screen
	if (grassCount > 0) {
		timer = frameCount / 60;
		timer = Math.round(timer * 1000) / 1000;
		//timer
		text(timer, 400, 20);
		textSize(20);
		//percent text
		text(grassPersent + '%', 300, 20);
	};

	//end
	if (grassCount === 0) {
		gameState = "end";

	};


	//mower left/right
	if (kb.pressing('a')) {
		mower.rotation = 270;
		mower.vel.x = -4;
	};

	if (kb.pressing('d')) {
		mower.rotation = 90;
		mower.vel.x = 4;

	};

	if (kb.released('a')) {
		mower.rotation = 180;
		mower.vel.x = 0;
		mower.rotation = 270;
	}

	else if (kb.released('d')) {
		mower.rotation = 0;
		mower.vel.x = 0;
		mower.rotation = 90;
	};

	//mower Up/down
	if (kb.pressing('s')) {
		mower.vel.y = 4;
		mower.rotation = 180;
	}
	else if (kb.released('s')) {
		mower.vel.y = 0;
		mower.rotation = 180;
	};

	if (kb.pressing('w')) {
		mower.vel.y = -4;
		mower.rotation = 0;
	}
	else if (kb.released('w')) {
		mower.vel.y = 0;
		mower.rotation = 0;
	};

	//mower diagonal
	if (kb.pressing('w') && kb.pressing('d')) {
		mower.rotation = 45;
		mower.vel.y = -2;
		mower.vel.x = 2;
	}
	else if (kb.released('w') && kb.released('d')) {
		mower.rotation = 45;
		mower.vel.y = 0;
		mower.vel.x = 0;
	};

	if (kb.pressing('w') && kb.pressing('a')) {
		mower.rotation = 315;
		mower.vel.y = -2;
		mower.vel.x = -2;
	}
	else if (kb.released('w') && kb.released('a')) {
		mower.rotation = 315;
		mower.vel.y = 0;
		mower.vel.x = 0;
	};

	if (kb.pressing('s') && kb.pressing('d')) {
		mower.rotation = 135;
		mower.vel.y = 2;
		mower.vel.x = 2;
	}
	else if (kb.released('s') && kb.released('d')) {
		mower.rotation = 135;
		mower.vel.y = 0;
		mower.vel.x = 0;
	};

	if (kb.pressing('s') && kb.pressing('a')) {
		mower.rotation = 225;
		mower.vel.y = 2;
		mower.vel.x = -2;
	}
	else if (kb.released('s') && kb.released('a')) {
		mower.rotation = 225;
		mower.vel.y = 0;
		mower.vel.x = 0;
	};
};

function drawEnd() {
	background("white");
	//text
	text('YOUR TIME WAS ' + timer + ' Seconds', 150, 200);
	textSize(40);
	text('Press Enter To Restart', 100, 400);
	//restart button
	if(kb.pressed('enter')){
		gameState = "menu";
	};
	//sprite visability
	mower.visible = false;
	grassGroup.visible = false;
	wallGroup.visible = false;
	startButton.visible = false;
};

/*******************************************************/
//  END OF APP
/*******************************************************/