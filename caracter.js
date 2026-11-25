let characterX = 100;
let characterY = 350;

let characterSpeed = 20;
let velocityY = -10;
let gravity = 0.4;

let platformX = 75;
let platformY = 400;
let platformWidth = 100;
let platformHeight = 10;
let gameOver = false;

function setup() {
  createCanvas(300, 500);
}

function draw() {
  background(255);

  if (gameOver == true) {
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);

    textSize(15);
    text("Press SPACE to restart", width / 2, height / 2 + 35);

    return;
  }

  moveCharacter();
  drawCharacter();
  drawPlatform();

  // Check if character falls off screen
  if (characterY > height) {
    gameOver = true;
  }
}

function moveCharacter() {
  //Gravity
  velocityY = velocityY + gravity;
  characterY = characterY + velocityY;

  //Move left
  if (keyIsDown(LEFT_ARROW)) {
    characterX = characterX - characterSpeed;
  }

  //move right
  if (keyIsDown(RIGHT_ARROW)) {
    characterX = characterX + characterSpeed;
    // Stay inside canvas
    characterX = constrain(characterX, 0, 250);
  }

  if (
    velocityY > 0 &&
    characterY + 30 >= platformY &&
    characterY + 30 <= platformY + platformHeight + velocityY &&
    characterX + 30 > platformX &&
    characterX < platformX + platformWidth
  ) {
    characterY = platformY - 50;
    velocityY = -10;
  }
}

function drawCharacter() {
  fill(0);
  rect(characterX, characterY, 30, 30);
}

function drawPlatform() {
  fill("green");
  rect(platformX, platformY, platformWidth, platformHeight);
}

function restartGame() {
  characterX = 100;
  characterY = 350;
  velocityY = -10;
  gameOver = false;
}

function keyPressed() {
  if (gameOver == true && key == " ") {
    restartGame();
  }
}
