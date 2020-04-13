function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);

  const sc = second();
  const mn = minute();
  const hr = hour();

  strokeWeight(8);
  noFill();

  stroke(255, 100, 15);
  const secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(255, 200, 15);
  const minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke(200, 10, 110);
  const hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke(2255, 100, 155);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke(255, 200, 15);
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke(200, 10, 110);
  line(0, 0, 80, 0);
  pop();

  stroke(255);
  point(0, 0);
}
