const hexColors = [
  '#D0E665',
  '#D7EA7B',
  '#E9FC91',
  '#FFF9A5',
  '#7AFFB8',
  '#ECEBB3',
  '#B5EEBB',
];

const backgroundColors = ['white'];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(random(backgroundColors));
  drawDoodleGrid(random(1, 20), random(10, 12));
  noLoop();
  granulate(15);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawDoodleGrid(squareSize, gap) {
  for (let x = 0; x < width; x += squareSize + gap) {
    for (let y = 0; y < height; y += squareSize + gap) {
      drawLineDoodle(x, y, x + squareSize, y + squareSize);
    }
  }
}

function drawLineDoodle(cornerX, cornerY, limitX, limitY) {
  const numberOfLines = random(2, 12);
  let startX = random(cornerX, limitX);
  let startY = random(cornerY, limitY);
  for (let i = 0; i < numberOfLines; i++) {
    const endX = random(cornerX, limitX);
    const endY = random(cornerY, limitY);
    strokeWeight(random(0.1, 2));
    stroke(random(hexColors));
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
  }
}

function mousePressed() {
  draw();
}

/* Gorilla Grain ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function granulate(gA) {
  loadPixels();
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d);
  for (let i = 0; i < halfImage; i += 8) {
    grainAmount = random(-gA, gA);
    pixels[i] = pixels[i] + grainAmount;
    pixels[i + 1] = pixels[i + 1] + grainAmount;
    pixels[i + 2] = pixels[i + 2] + gA;
    pixels[i + 3] = pixels[i + 3] + gA * 5;
  }
  updatePixels();
}
