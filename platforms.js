export default class Platforms {
  platforms = [];

  constructor() {
    this.platforms = [];
  }

  makePlatform(y) {
    // create a platform object with random x position and fixed y position
    let platform = {
      x: random(0, 220),
      y: y,
      w: 80,
      h: 15,
      // assigns a platform its role at random
      type: random(["normal", "moving", "breaking"]),
    };

    // sets the moving platform speed to 1
    if (platform.type === "moving") {
      platform.speed = 1;
      // sets the breaking platform height to 7
    } else if (platform.type === "breaking") {
      platform.h = 7;
    }

    return platform;
  }

  setup() {
    // generate 5 platforms
    for (let i = 0; i < 5; i++) {
      this.platforms.push(this.makePlatform(i * 80));
    }
  }
  //this resets the platforms for next game with the help of main.js
  reset() {
    this.platforms = [];
    this.setup();
  }

  draw() {
    // this draws one more llatform for every platform lost, keep 5
    this.platforms = this.platforms.filter(function (platform) {
      return platform.y < height;
    });
    // this generates new platforms, makes sure the gap is even in the new generation.
    while (this.platforms.length < 5) {
      let highestY = Math.min(...this.platforms.map((platform) => platform.y));

      let newY = highestY - 100;
      this.platforms.push(this.makePlatform(newY));
    }

    for (let platform of this.platforms) {
      //it draws the platforms
      rect(platform.x, platform.y, platform.w, platform.h);

      //tells the computer what the diferent types of platforms should do and how.

      if (platform.type === "moving") {
        platform.x = platform.x + platform.speed;

        if (platform.x < 0 || platform.x > width - platform.w) {
          platform.speed = platform.speed * -1;
        }
      } else if (platform.type === "breaking") {
        //create breaking platform effect
      }
    }
  }

  f;

  //this is the code that is needed so camera folows caracter
  movePlatforms(amount) {
    for (let platform of this.platforms) {
      platform.y += amount;
    }
  }
}
