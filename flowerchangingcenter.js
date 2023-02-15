function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  pinkFlower();
  newColor();
  push();
  scale(2);
  translate(50, -100);
  pinkFlower();
  pop();
  push();
  scale(1.2);
  translate(30, -150);
  pinkFlower();
  pop();
  push();
  scale(.9);
  translate(300, -120);
  pinkFlower();
  pop();
  scale(1.5);
  translate(50);
  pinkFlower();
}
function newColor() {
  if (mouseX < 150) {
    fill("rgb(196,159,196)");
    ellipse(60, 230, 28);
  } else if (mouseX >= 150 && mouseX < 300){
    fill("paleyellow");
    ellipse(60, 230, 28);
  }else{
    fill("pink")
    ellipse(60, 230, 28);
  }
}
function pinkFlower() {
  push();
  fill("rgb(249,160,176)");
  noStroke();
  ellipse(76, 235, 30); //right petal
  ellipse(61, 247, 30); //bottom petal
  ellipse(45, 235, 30); //left petal
  ellipse(51, 216, 30); //top left petal
  ellipse(70, 216, 30); //top right petal
  pop();
  noStroke();// center
  ellipse(60, 230, 28);
}
function drawCenter() {
  ellipse(60, 230, 28);//center
}
