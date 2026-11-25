


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
 
let score = 0; 
let highScore = 0;

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
    textSize(18);
text("Your score: " + score, width / 2, height / 2 + 65);

text("Highscore: " + highScore, width / 2, height / 2 + 90);
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
  if (character.y < 200) {
  let difference = 200 - character.y;

  character.y = 200;
  cameraY += difference;

  platformManager.movePlatforms(difference);

  // Update score
  score = Math.floor(cameraY);

  // Update high score
  if (score > highScore) {
    highScore = score;
  }
}
  // Check collisions
  character.checkCollision(platformManager);

  // Draw everything
  platformManager.draw();
  character.drawCharacter();
  // Display score
fill(0);
textSize(16);
textAlign(LEFT);
text("Score: " + score, 10, 25);

text("Highscore: " + highScore, 10, 45); 

  // Check if character falls off screen
  if (character.y > height) {
    gameOver = true;


  }
}

// Restart game
function restartGame() {
  character.restartCharacter();
  platformManager.setup();

  cameraY = 0;
  score = 0;

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
