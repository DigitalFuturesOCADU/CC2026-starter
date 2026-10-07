// Project title
// Group members: name, name, name
// Creation & Computation 2026 · Experiment 2: Social Devices
// Based on: list any examples you started from, with their links

// written by: name
function setup() {
  createCanvas(windowWidth, windowHeight);
  lockGestures();                  // no scrolling, zooming or pull to refresh
  angleMode(DEGREES);              // tilt in degrees. p5.js uses radians unless you say so
  enableGyroTap('Tap to start'); // change this to the permissions your sketch needs
}

// written by: name
function draw() {
  background(20);
  if (!window.sensorsEnabled) return; // nothing to read until the tap

  fill(255);
  textSize(18);
  text('rotationX ' + round(rotationX), 20, 40);
}

// from the starter: keeps the canvas the size of the screen when the phone turns
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
