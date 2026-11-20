let platforms = [];
function setup() {
  createCanvas(300, 400);
  background(255);

  // randomly generate 6 platforms
  for (let i = 0; i < 6; i++) {
    const x = random(0, 220);
    const Y = i * 70;
    rect(x, Y, 80, 15);
  }
}
