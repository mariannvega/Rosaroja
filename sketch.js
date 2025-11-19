function preload() {
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background(255);
  stroke(0);

  // petalos
  fill(color(200, 0, 0));
  noStroke();
  ellipse(400, 250, 180, 120);
  ellipse(350, 280, 150, 90);
  ellipse(450, 280, 150, 90);
  ellipse(400, 300, 200, 130);

  // centro de la rosa
  fill(color(150, 0, 0));
  ellipse(400, 280, 90, 60);

  // tallo
  stroke('green');
  strokeWeight(10);
  line(400, 350, 400, 550);

  // hojas
  noStroke();
  fill('green');
  ellipse(360, 430, 100, 40);
  ellipse(440, 480, 100, 40);
}
