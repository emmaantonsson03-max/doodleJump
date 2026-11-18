function setup() {
  createCanvas(300, 400);
  background(255);

  for (let i = 0; i <= 6; i++) {
    const x = random(0, 210);
    rect(x, 300 - i * 70, 80, 15);
  }
}
