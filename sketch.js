// backgrounds
let ce;
let ch;
let ci;
let bc;
let as;
// button images
var catImg;
var doodleImg;
var xImg;
var startImg;
var asImg;
// doodle game
let value = 0;
let chalkStart = true;
// cat game
var cat;
// switch statement
let gameState = 'title';
// homescreen animation
var kitty, steam;

// Loading Images
function preload() {
  ce = loadImage('assets/cafeexterior-01.jpg');
  ci = loadImage('assets/cafeinteriordesign-02.jpg');
  bc = loadImage('assets/catbackground-01.jpg');
  ch = loadImage('assets/chalkboard.jpg');
  as = loadImage('assets/message-14.jpg');
  catImg = loadImage('assets/cafecatbutton-05.png');
  doodleImg = loadImage('assets/cafedoodlebutton-04.png');
  xImg = loadImage('assets/xbutton-06.png');
  startImg = loadImage('assets/cafestartbutton-03.png');
  asImg = loadImage('assets/artiststatement-15.png');
  kitty = loadAnimation('assets/kitty-10.png', 'assets/kitty-11.png', 'assets/kitty-12.png', 'assets/kitty-13.png');
  steam = loadAnimation('assets/steam-07.png', 'assets/steam-08.png', 'assets/steam-09.png');
}

function setup() {

  createCanvas(1920, 1080);
  InitialButton();

  cat = createSprite(850, 850, 184.5, 102.75);
  var myAnimation = cat.addAnimation('sitting', 'assets/catstill.png', 'assets/catstill2.png', 'assets/catstill3.png');
  myAnimation.offY = 15;
  cat.addAnimation('walking', 'assets/catwalk.png', 'assets/catwalk2.png', 'assets/catwalk3.png');
}

function drawDoodleGame() {

  if (chalkStart == true) {
    image(ch, 0, 0);
    chalkStart = false;
  }
  if (mouseIsPressed) {
		stroke(value);
    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed(){
  if(key == 'e'){
    value = 0;
  }
  if(key == 'w'){
    value = 255;
  }
}

function drawCatGame() {
  // image(bc, 0, 0);
  //if mouse is to the left
  if(mouseX < cat.position.x - 10) {
    cat.changeAnimation('walking');
    //flip horizontally
    cat.mirrorX(-1);
    //negative x velocity: move left
    cat.velocity.x = -2;
  }
  else if(mouseX > cat.position.x + 10) {
    cat.changeAnimation('walking');
    //unflip
    cat.mirrorX(1);
    cat.velocity.x = 2;
  }
  else {
    //if close to the mouse, don't move
    cat.changeAnimation('sitting');
    cat.velocity.x = 0;
  }
  if (cat.position.x > 1920 && cat.position.x < 0) {
    cat.changeAnimation('sitting');
    cat.velocity.x = 0;
  }

  // Cat Scaling
  if(keyIsDown(UP_ARROW))
    cat.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    cat.scale -= 0.05;

  //draw the sprite
  drawSprites();
}

// switch statement
function draw() {
    switch (gameState) {
      case 'title':
        image(ce, 0, 0);
        click0.draw();
        click5.draw();
        break;
      case 'second':
        image(ci, 0, 0);
        animation(kitty, 1590, 910);
        animation(steam, 540, 657);
        click1.draw();
        click2.draw();
        break;
        case 'cat_game':
        image(bc, 0, 0);
        drawCatGame();
        click3.draw();
        break;
        case 'doodle_game':
        // image(ch, 0, 0);
        drawDoodleGame();
        // mousePressed();
        keyPressed();
        click4.draw();
        break;
        case 'message':
        image(as, 0, 0);
        click6.draw();
      }
}

// clickables
function InitialButton() {
  click0 = new Clickable();
  click0.image = startImg;
  click0.locate (1430, 680);
  click0.resize(146,146);
  click0.text = "   ";
  click0.strokeWeight = 0;
  click0.cornerRadius = 100;
  click0.onRelease = function () {
    gameState = 'second'
  }
  click1 = new Clickable();
  click1.image = catImg;
  click1.locate (1480, 930);
  click1.resize(85,85);
  click1.text = "   ";
  click1.strokeWeight = 0;
  click1.cornerRadius = 100;
  click1.onRelease = function () {
    gameState = 'cat_game'
  }
  click2 = new Clickable();
  click2.image = doodleImg;
  click2.locate (260, 830);
  click2.resize(85, 85);
  click2.text = "   ";
  click2.strokeWeight = 0;
  click2.cornerRadius = 100;
  click2.onRelease = function () {
    chalkStart = true;
     gameState = 'doodle_game'
  }
  click3 = new Clickable();
  click3.image = xImg;
  click3.locate (10, 10);
  click3.resize(50, 50);
  click3.text = "   ";
  click3.strokeWeight = 0;
  click3.cornerRadius = 100;
  click3.onRelease = function () {
     gameState = 'second'
}
click4 = new Clickable();
click4.image = xImg;
click4.locate (10, 10);
click4.resize(50, 50);
click4.text = "   ";
click4.strokeWeight = 0;
click4.cornerRadius = 100;
click4.onRelease = function () {
   gameState = 'second'
 }
 click5 = new Clickable();
 click5.image = asImg;
 click5.locate (90, 150);
 click5.resize(150, 30);
 click5.text = "   ";
 click5.strokeWeight = 1;
 click5.stroke = "#4D4D4D";
 click5.cornerRadius = 100;
 click5.onRelease = function () {
    gameState = 'message'
}
click6 = new Clickable();
click6.image = xImg;
click6.locate (10, 10);
click6.resize(50, 50);
click6.text = "   ";
click6.strokeWeight = 0;
click6.cornerRadius = 100;
click6.onRelease = function () {
   gameState = 'title'
}
}
