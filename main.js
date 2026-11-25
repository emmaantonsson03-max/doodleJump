
 
import Platforms from "./platforms.js";
import Character from "./caracter.js";

let character;
let platformManager;

let platformX = 75;
let platformY = 400;
let platformWidth = 100;
let platformHeight = 10;


let gameOver = false;
let cameraY = 0;
 

function setup() {
  createCanvas(300, 500);

  character = new Character();
  platformManager = new Platforms();
  platformManager.setup();
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

  // Move character
  character.moveCharacter();

  // Move camera when character gets too high
  if (character.y < height * 0.4) {
    let difference = height * 0.4 - character.y;

    character.y = height * 0.4;
    cameraY += difference;

    platformManager.movePlatforms(difference);
  }

  // Check collisions
  character.checkCollision(platformManager);

  // Draw everything
  platformManager.draw();
  character.drawCharacter();

  // Check if character falls off screen
  if (character.y > height) {
    gameOver = true;
  }
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
window.setup = setup;
window.draw = draw;
window.keyPressed = keyPressed;
