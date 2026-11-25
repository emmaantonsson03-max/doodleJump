let platforms = [];
function setup() {
  createCanvas(300, 400);

  // randomly generate 6 platforms
  for (let i = 0; i < 6; i++) {
    let platform = {
      x: random(0, 220),
      y: i * 70,
      w: 80,
      h: 15,
      type: "normal",
    };
    platforms.push(platform);
  }
}
function draw() {
  background(255);
  for (let platform of platforms) {
    rect(platform.x, platform.y, platform.w, platform.h);
  }
}
