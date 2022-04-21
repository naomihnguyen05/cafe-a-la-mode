let ce;
let ch;
let gameState = 'title';
let ci;
var click1;
var click2;
var catImg;
var doodleImg;
var c = "black";
let chalkStart = true;

let bc;
var cat;

function preload() {
  ce = loadImage('assets/cafeexterior.jpg');
  ci = loadImage('assets/cafeinterior-01.jpg');
  bc = loadImage('assets/catbackground-01.jpg');
  catImg = loadImage('assets/cafecatbutton-05.png')
  doodleImg = loadImage('assets/cafedoodlebutton-04.png')
  ch = loadImage('assets/chalkboard.jpg')

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
		stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  stroke(149);
  strokeWeight(10);
  //draw the first button
  fill("white");
  rect(1600,500,100,100);

  //draw the second button
  fill("black");
  rect(1600,650,100,100);
}

//Doodle Game - Mouse Pressed
//this will run whenever the mouse is pressed
function mousePressed() {
  if (mouseX > 1600 && mouseX < 1700 && mouseY > 500 && mouseY < 600) {
    //set the variables to random values
    c = "white";
  }
  if (mouseX > 1600 && mouseX < 1700 && mouseY > 650 && mouseY < 750) {
    //set the variables to random values
    c = "black";
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



  // Cat Scaling
  if(keyIsDown(UP_ARROW))
    cat.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    cat.scale -= 0.05;

  //draw the sprite
  drawSprites();
}


function draw() {
    switch (gameState) {
      case 'title':
        image(ce, 0, 0);
        break;
      case 'second':
        image(ci, 0, 0);
        click1.draw();
        click2.draw();
        break;
        case 'cat_game':
        image(bc, 0, 0);
        drawCatGame();
        break;
        case 'doodle_game':
        // image(ch, 0, 0);
        drawDoodleGame();
        mousePressed();
        break;
}
}

function InitialButton() {
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
}

function keyReleased() {
  if (gameState === 'title') {
    if (key === 's') {
      gameState = 'second';
    }
  }
}

// }
//   }
