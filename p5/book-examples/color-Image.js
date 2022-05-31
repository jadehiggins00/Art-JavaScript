
var img;
var colors =[];
// the currently selected sorting mode is always stored in a var sortMode
var sortMode = null; 

/*
before the program starts to run, the image is loaded and stored into 
the var called img   
*/
function preload(){

    img = loadImage("images/narvik.jpg");

}//end function

function draw(){

    // the number of rows and columns in the grid tilecount depends on the
    // x-value of the mouse.The function max selects the larger of the two given values.
    var tileCount = floor(width / max(mouseX,5));

    // only after calling loadPixels() can the individual pixels 
    // of the image be accessed
    img.loadPixels();
    colors = [];

    for(var gridY = 0 ; gridY < tileCount ; gridY++){

        for(var gridX = 0; gridX < tileCount ; gridX++){

            // the pic is scanned line by line in the calculated grid spacing - rectSize
            var px = int(gridX * rectSize);
            var py = int(gridY * rectSize);
            // the pixels are stored in the pixels[] array as a long  list of values.
            // therefore from px and py, the corresponding i must be calculated
            var i = (py * img.width + px)* 4;
            var c = color(img.pixels[i], img.pixels[i+1], img.pixels[i+2], img.pixels[i+3]);
            colors.push(c);
        }//end inner loop

    }//end outer for

    // the colors are sorted using the sortColors(). this funciton must pass the colors and the sort mode
    gd.sortColors(colors, sortMode);

    var i=0;
    for(var gridY = 0 ; gridY < tileCount; gridY++){
        for(var gridX = 0 ; gridX < tileCount; gridX++){
            // the grid is processed again to draw the pallette - the colors are taken from the array colors
            fill(colors[i]);
            rect(gridX*rectSize, gridY*rectSize, rectSize, rectSize);
            i++;
        }
    }//end for

}//end draw


function keyReleased() {
    // the ase.encode - allows the array of colors to be saved as an adobe swatch exchange file
    // this pallette can then be loaded into adobe illustrator
    if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  
    if (key == '1') loadImage('data/pic1.jpg', setImage);
    if (key == '2') loadImage('data/pic2.jpg', setImage);
    if (key == '3') loadImage('data/pic3.jpg', setImage);
    if (key == '4') loadImage('data/pic4.jpg', setImage);
  
    if (key == '5') sortMode = null;
    if (key == '6') sortMode = gd.HUE;
    if (key == '7') sortMode = gd.SATURATION;
    if (key == '8') sortMode = gd.BRIGHTNESS;
    if (key == '9') sortMode = gd.GRAYSCALE;
  }//end fucntion
  
  function setImage(loadedImageFile) {
    img = loadedImageFile;
  }//end function