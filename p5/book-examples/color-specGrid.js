/*
In this program we will create a color spectrum in a grid
*/

// these values determine the length and width of the rectangles
var stepX;
var stepY;

function setup(){
    createCanvas(800,400);
    noStroke();

    // hue is defined between 0 abd 800, the same is true for the saturation color
    colorMode(HSB, width, height,100);

}//end funct



function draw(){
    // the addition of 2 prevents both vars from being too small
    // which would result in longer delay times
    stepX = mouseX+2;
    stepY = mouseY+2;

    // the two nested for loops help process all positions of the  grid.
    // the y position of the rect will be defined by gridY in the outer loop
    // the value increases only when the inner loop has been processed.
    for(var gridY = 0; gridY < height; gridY+=stepY){

        for(var gridX = 0; gridX < width; gridX+=stepX){
            
            // gridX and gridY are not only used to position but also to
            // define the fill color. the hue is determined by gridX and
            // the saturation value decreases proportionally to increases 
            // in the gridY value
            fill(gridX,height-gridY,100);
            rect(gridX, gridY, stepX, stepY)
        }//end inner loop
    }//end outer loop


}//end function