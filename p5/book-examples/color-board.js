// program dispayying different color boards with random combinations of hue, saturation and brightness

/// individual arrays for H S B
var hueValues = [];
var satValues = [];
brightValues = [];

tileCountX =100;
tileCountY =50;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    // intialising with random values
    for(var i = 0 ; i < tileCountX ; i++) {
        hueValues[i] = random(360);
        satValues[i] = random(100);
        brightValues[i] = random(100);

    }// end for 

}//end function

function draw(){

    background(0,0,100);

    // limit mouse coordinates to canvas 
    var mX = constrain(mouseX,0,width);
    var mY = constrain(mouseY,0,height);

    // tile counter
    var counter = 0;

    // map the mouse to grid resolution
    var currentTileCountX = int(map(mX,0,width,1, tileCountX));
    var currentTileCountY = int(map(mY,0,height,1,tileCountY));
    var tileWidth = width / currentTileCountX;
    var tileHeight = height / currentTileCountY;

    for(var gridY=0;gridY<tileCountY;gridY++){
        for(gridX=0;gridX<tileCountX;gridX++){

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            // when the grid is draw the colors are selected from the arrays one by one.
            // the continuallyy incrementing var "counter" starts to cycle through the same values because of the
            // modulo operator
            var index = counter % currentTileCountX;

            // get component color values 
            fill(hueValues[index],satValues[index],brightValues[index]);
            rect(posX,posY,tileWidth,tileHeight);
            counter++;
        }//end inner for.

    }//end outer for.


}//end draw


function keyPressed(){

    /*
    when this key is pressed the three arrayys are filled with random values from the
    complete ranges of values --- this means any color can appear in the palette
    */
    if(key == '1'){

        for(var i=0; i<tileCountX; i++){
            hueValues[i] = int(random(0,360));
            satValues[i] = int(random(0,100));
            brightValues[i] = int(random(0,100));
    
        }//end for
    }//end if

    // here the brightness value is always set at 100 - palatte is dominated by bright colors
    if(key == '2'){
        for(var i=0;i<tileCountX;i++){22

            hueValues[i] = int(random(0,360));
            satValues[i] = int(random(0,100));
            brightValues[i] =100;

        }//end for  
    }//end if

    // here, if we set the saturation value to 100, no pastel tones are created
    if(key == '3'){
        for(var i=0;i<tileCountY+3;i++){

            hueValues[i] = int(random(0,360));
            satValues[i] = 100;
            brightValues[i] =int(random(0,100));

        }//end for  
    }//end if

    // here, hue and saturation values are set to 0 - showing off the random brightness values
    if (key == '4') {
        for (var i = 0; i < tileCountX; i++) {
          hueValues[i] = 0;
          satValues[i] = 0;
          brightValues[i] = random(100); // makes canvas black and white
        }//end for
      }//end if 

}//end funntion
