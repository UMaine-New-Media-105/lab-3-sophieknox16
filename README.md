# lab-3-sophieknox16
lab-3-sophieknox16 created by GitHub Classroom

I created a flower on the left side of the canvas and declared its colors. 
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

I then called this function in draw.
Next I created a function using if, else if, and else statements that changes the color of the center of my flower three different times as the mouse's X position shifted
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

I then called this function in the draw function.
Lastly I duplicated the flowers in various sizes and places in the draw funciton using push, pop, scale and translate.
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
Then created the final product of 5 differnt flowers of various sizes all over the canvas that have changing colors for the center of the flower. 
