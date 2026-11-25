import platforms from "./platforms.js";

let platformmanager;

function setup() {
  createCanvas(300, 500);
  platformmanager = new platforms();
  platformmanager.setup();
}

function draw() {
  background(255);
  platformmanager.draw();
}

window.setup = setup;
window.draw = draw;

function setup() {
  createCanvas(300, 500);
  background(255);
}
