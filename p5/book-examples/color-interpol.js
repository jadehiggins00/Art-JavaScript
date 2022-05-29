/*
This program shows how to interpolate styles and colors


*/

'use strict';
var tileCountX = 2;
var tileCountY = 10;

var colorsLeft = [];
var colorsRight = [];
var colors = [];

var interpolateShortest = true;


function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    noStroke();
    shakeColors();


}//end function 


function draw() {

    // the number of color gradations tileCountX and the number of rows
    // tileCountY are determined by the position of the mouse 
    tileCountX = int(map(mouseX, 0, width, 2, 100));
    tileCountY = int(map(mouseY, 0, height, 2, 10));

    var tileWidth = width / tileCountX;
    var tileHeight = height / tileCountY;
    var interCol;
    colors = [];

    // drawing the grid row by row ------
    for (var gridY = 0; gridY < tileCountY; gridY++) {

        // the colours from the left nd right columns are set in the arrays
        // -- colorsLeft and colorsRightf
        var col1 = colorsLeft[gridY];
        var col2 = colorsRight[gridY];


        // drawing grid col by col
        for (var gridX = 0; gridX < tileCountX; gridX++) {

            // amount is between 0 and 1 and specifies the position between the start and end color
            var amount = map(gridX, 0, tileCountX - 1, 0.1);

            if (interpolateShortest) {
                // switch to rgb
                colorMode(RGB);
                // the intermediary colors are calculated  with the lerpColor().
                // this function performs the interpolation between the individual color values
                interCol = lerpColor(col1, col2, amount);
                // switch back to HSB
                colorMode(HSB);
            }else {
                interCol = lerpColor(col1, col2, amount);

            }//end else

            fill(interCol);

            // posx is the resolution
            var posX = tileWidth * gridX;
            // posy is the number of rows
            var posY = tileHeight * gridY;

            rect(posX, posY, tileWidth, tileHeight);

            // save color for potential ase export
            colors.push(interCol);

        }//end inner for loop

    }//end outer for loop

}//end function 

function shakeColors() {

    for (var i = 0; i < tileCountY; i++) {
        colorsLeft[i] = color(random(0, 60), random(0, 100), 100);
        colorsRight[i] = color(random(160, 190), 100, random(0, 100));

    }//end for
}//end function

function mouseReleased() {
    shakeColors();
}//end function

function keyPressed() {

    // save ase pallet
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');

    // save the image
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    // interpolation style
    if (key == '1') interpolateShortest = true;
    if (key == '2') interpolateShortest = false;


}//end function