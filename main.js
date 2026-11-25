import platforms from "./platforms.js";

let platformmanager;

function setup() {
  createCanvas(300, 500);
  platformmanager = new platforms();
  platformmanager.setup();
}

function draw() {
  background(255);
  platformmanager.draw();
}

window.setup = setup;
window.draw = draw;

function setup() {
  createCanvas(300, 500);
  background(255);
}

import Character from "./caracter.js";

let character;

let platformX = 75;
let platformY = 400;
let platformWidth = 100;
let platformHeight = 10;

let gameOver = false;

function setup() {
  createCanvas(300, 500);

  character = new Character();
}

function draw() {
  background(255);

  // Game Over screen
  if (gameOver == true) {
    fill(0);
    textSize(30);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);

    textSize(15);
    text("Press SPACE to restart", width / 2, height / 2 + 35);

    return;
  }

  character.moveCharacter();
  character.drawCharacter();
  drawPlatform();

  // Check if character falls off screen
  if (character.y > height) {
    gameOver = true;
  }
}

function drawPlatform() {
  fill("green");
  rect(platformX, platformY, platformWidth, platformHeight);
}

// Restart game
function restartGame() {
  character.restartCharacter();
  gameOver = false;
}

function keyPressed() {
  if (gameOver == true && key == " ") {
    restartGame();
  }
} 