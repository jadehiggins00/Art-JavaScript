/*
    In this program, we will create a colour spectrum in a circle


*/



function setup(){
    createCanvas(800,400);
   // noStroke();

}//end funct

function draw(){

    colorMode(HSB,width,height);
    background(360,0,height);

    // the angle increment angleStep depends on how
    // many segments are to be drawn(segmentCount)
    var angleStep = 360 / segmentCount;

    // the first vertex point is in the middle
    // of the drawing canvas
    beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);

    // now we convert the angles from degrees to radians for
    // sin and cos 
    for(var angle=0; angle <= 360; angle += angleStep){

        var vx = width/2 + cos(radians(angle)) * radius;
        var vy = height/2 + sin(radians(angle)) * radius;
        vertex(vx,vy);
        
        // the fill colour for the next segment is defined:
        // the value of angle as hue, mouseX as saturation and
        // mouseY as brightness
        fill(angle, mouseX, mouseY);
    }//end loop
    endShape();


}//end function

function keyPressed(){

    

}//end function
