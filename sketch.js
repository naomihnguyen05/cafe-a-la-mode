let ce;
let gameState = 'title';
let ci;
var catBtn;
var doodleBtn;
var myButton;
var click1;
var catImg;


let bc;
var cat;

function preload() {
  ce = loadImage('assets/cafeexterior.jpg');
  ci = loadImage('assets/cafeinterior-01.jpg');
  bc = loadImage('assets/catbackground-01.jpg');
  catImg = loadImage('assets/cafecatbutton-05.png')

}

function setup() {

  createCanvas(1920, 1080);
  InitialButton();
   // image(ce, 0, 0)


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

function startCatGame(){
  image(bc, 0, 0);
  setupCatGame();
  drawCatGame()

}



function draw() {
  // image(ci, 0, 0);

    switch (gameState) {
      case 'title':
        image(ce, 0, 0);
        break;
      case 'second':
        image(ci, 0, 0);
//        catBtn = createImg('assets/cafecatbutton-05.png');
        click1.draw();
        doodleBtn = createImg('assets/cafedoodlebutton-04.png');
//        catBtn.position(1480, 930);

        //catBtn.mouseClicked(window.open("https://naomihnguyen05.github.io/3.1_library_demo/"))
        // catBtn.mousePressed(mouseReleased);

        doodleBtn.position(260, 830);
        break;
      case 'cat_game':
        image(bc, 0, 0);
        setupCatGame();
        drawCatGame();



        break;
}
}

// function mouseReleased(){
//   if(gameState === 'second'){
//     gameState = 'cat_game';
//   }
// }
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
}

function keyReleased() {
  if (gameState === 'title') {
    if (key === 's') {
      gameState = 'second';
    }
  }
//  else if(gameState === 'second'){
//    if(key === 'c'){
//
//      gameState = 'cat_game'
//    }
//  }
}
//   } else if (gameState === 'second'){
//        if (key === 's' || key === 'S'){
// }
//   }
