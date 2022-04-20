let ce;
let ch;
let gameState = 'title';
let ci;
var click1;
var click2;
var catImg;
var doodleImg;
var c = "black";


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


}

function drawDoodleGame() {
  stroke(149);

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
function mouseDraw() {
  if (mouseX > 1600 && mouseX < 1700 && mouseY > 500 && mouseY < 600) {
    //set the variables to random values
    c = "white";
  }
  if (mouseX > 1600 && mouseX < 1700 && mouseY > 650 && mouseY < 750) {
    //set the variables to random values
    c = "black";
  }
}

function setupCatGame() {
  // createCanvas(1920, 1080);
  // bc = loadImage('assets/catbackground-01.jpg');

  cat = createSprite(850, 850, 184.5, 102.75);
  var myAnimation = cat.addAnimation('sitting', 'assets/catstill.png', 'assets/catstill2.png', 'assets/catstill3.png');
  myAnimation.offY = 15;
  cat.addAnimation('walking', 'assets/catwalk.png', 'assets/catwalk2.png', 'assets/catwalk3.png');


}

function drawCatGame() {
  // Displays the image at its actual size at point (0,0)
  // image(bc, 0, 0);
  //background(220);
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



  //up and down keys to change the scale
  //note that scaling the image quality deteriorates
  //and scaling to a negative value flips the image
  if(keyIsDown(UP_ARROW))
    cat.scale += 0.05;
  if(keyIsDown(DOWN_ARROW))
    cat.scale -= 0.05;

  //draw the sprite
  drawSprites();
}


function draw() {
  // image(ci, 0, 0);

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
        setupCatGame();
        drawCatGame();
        break;
        case 'doodle_game':
        image(ch, 0, 0);
        drawDoodleGame();
      //  mousePressed();
        mouseDraw();
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
