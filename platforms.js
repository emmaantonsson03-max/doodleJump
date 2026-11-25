let platforms = [];
function setup() {
  createCanvas(300, 400);
}

// generate 5 platforms
for (let i = 0; i < 5; i++) {
  // create a platform object with random x position and fixed y position
  let platform = {
    x: random(0, 220),
    y: i * 80,
    w: 80,
    h: 15,
    //asignes aplatfrom its roole at random
    type: random(["normal", "moving", "breaking"]),
  };
  // add the platform to the platforms array
  platforms.push(platform);
}

function draw() {
  background(255);

  for (let platform of platforms) {
    //id draws the platforms
    rect(platform.x, platform.y, platform.w, platform.h);

    if (platform.type === "moving") {
      platform.x = platform.x + 1;

      if (platform.x < 0 || platform.x > width - platform.w) {
        console.log("Platform is out of bounds");
        // make the platform move left and right
      }
    } else if (platform.type === "breaking") {
      // make the platform break when the character lands on it
      platform.h = 10;
    }
  }
}
