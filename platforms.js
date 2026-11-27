export default class Platforms {
  constructor() {
    //the array that stores the platforms in use :)
    this.platforms = [];
  }

  makePlatform(y) {
    // create and returns a platform with random x position and fixed other
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
      // sets the breaking platform height to 7 (make it thiner)
    } else if (platform.type === "breaking") {
      platform.h = 7;
    }
    //returns the platfor so it can be accesd later in the code.
    return platform;
  }
  //creates the first five evenly spaced platforms and pushes then im the aray for the start of the game.
  setup() {
    for (let i = 0; i < 6; i++) {
      this.platforms.push(this.makePlatform(i * 80));
    }
  }
  //this resets the platforms for next game with the help of main.js
  reset() {
    this.platforms = [];
    this.setup();
  }

  draw() {
    // deletes platforms that do not fit the filter form the aray (if y is to high)
    this.platforms = this.platforms.filter(function (platform) {
      return platform.y < height;
    });
    //makes sure new platforms are spawned and keep them total 5, if only 4 then spawn new one...
    //ai has assisted with this part.
    while (this.platforms.length < 6) {
      let highestY = Math.min(...this.platforms.map((platform) => platform.y));
      // this generates new platform once old has been deleted 100pixels above.
      let newY = highestY - 80;
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
      }
    }
  }

  //this is the together with main.js creates the "camera folow" effect, it lowers the platforms at the same pace caracter moves up.
  movePlatforms(amount) {
    for (let platform of this.platforms) {
      platform.y += amount;
    }
  }
}
