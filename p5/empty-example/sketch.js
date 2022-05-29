function setup() {
  // put setup code here
  createCanvas(720,720);
  //hide cursor
  noCursor();

  colorMode(HSB,360,100,100);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  

  // the y value of the mouse is divided by two to get values
  // from 0 to 360 on the color wheel
  background(mouseY/2,100,100);

  // the halved y-value of the mouse position is subtracted from 
  // 360, creating values from 360 to 0
  fill(360 - mouseY/2,100,100);
  // the size of the color field changes relative to the x-value of
  // the mouse position, with a side length between 1 and 720 pixels
  rect(360,360,mouseX+1, mouseX+1);
}

