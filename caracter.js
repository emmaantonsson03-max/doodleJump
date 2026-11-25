export default class Character {

  constructor() {
    // Character properties
    this.x = 100;
    this.y = 350;
    this.width = 30;
    this.height = 30;

    this.speed = 20;
    this.velocityY = -10;
    this.gravity = 0.4;
  }

  moveCharacter() {
    // Gravity
    this.velocityY = this.velocityY + this.gravity;
    this.y = this.y + this.velocityY;

    // Move left
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - this.speed;
    }

    // Move right
    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + this.speed;
    }

    // Stay inside canvas
    this.x = constrain(this.x, 0, 270);
  }

  drawCharacter() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }

  restartCharacter() {
    this.x = 100;
    this.y = 350;
    this.velocityY = -10;
  }
}
