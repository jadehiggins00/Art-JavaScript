/*
    In this program, we will create a colour spectrum in a circle


*/

var segmentCount = 360;
var radius = 400;

function setup(){
    createCanvas(1000,1000);
    noStroke();

}//end funct

function draw(){
      
    colorMode(HSB,360,width,height);
    background(360,0,height);

    // the angle increment angleStep depends on how
    // many segments are to be drawn(segmentCount)34
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

    switch(key){

        case '1':
            segmentCount = 360;     
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 24;
            break;
        case '4':
            segmentCount = 12;
            break;
        case '5':
            segmentCount = 6;
            break;
        case '6':
            segmentCount = 3;
            break;


    }//end switch

}//end function
