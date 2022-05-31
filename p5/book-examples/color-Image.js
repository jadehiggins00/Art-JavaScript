
var img;
var colors =[];
// the currently selected sorting mode is always stored in a var sortMode
var sortMode = null; 

/*
before the program starts to run, the image is loaded and stored into 
the var called img   
*/
function preload(){

    img = loadImage("pic1.jpg");

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
        }//end inner loop

    }//end outer for

}//end draw