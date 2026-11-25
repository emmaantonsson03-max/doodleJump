export default class Platforms {
  platforms = [];

  constructor() {
    this.platforms = [];
  }
  setup() {
    // generate 5 platforms
    for (let i = 0; i < 5; i++) {
      // create a platform object with random x position and fixed y position
      let platform = {
        x: random(0, 220),
        y: i * 80,
        w: 80,
        h: 15,
        //asignes a platform its role at random
        type: random(["normal", "moving", "breaking"]),
      };

      // sets the moving platform speed to 1
      if (platform.type === "moving") {
        platform.speed = 1;
      } else if (platform.type === "breaking") {
        platform.h = 7;
      }

      // add every platform to the platforms array
      this.platforms.push(platform);
    }
  }

  draw() {
    this.platforms = this.platforms.filter(function (platform) {
      return platform.y < height;
    });
    for (let platform of this.platforms) {
      platform.y = platform.y + 1;

      //it draws the platforms
      rect(platform.x, platform.y, platform.w, platform.h);

      if (platform.type === "moving") {
        platform.x = platform.x + platform.speed;

        if (platform.x < 0 || platform.x > width - platform.w) {
          platform.speed = platform.speed * -1;
        }
      } else if (platform.type === "breaking") {
        //create breaking platform effect
      }
    }
    fill(0);
    text(this.platforms.length, 10, 20);
  }
  movePlatforms(amount) {
    for (let platform of this.platforms) {
      platform.y += amount;
    }
  }
}
