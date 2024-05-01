const canvasWidth = 960;
const canvasHeight = 500;

const letterA = { //way too many variables that only control 5 lines
  "x1": 0, //it takes 4 variables to make just one line x1 is the first x of the first line
  "y1": -80, //first y of the first line
  "x2": -60, //second x of the first line
  "y2": -20, //second y of the first line
  "x3": 0, //first x of the second line
  "y3": -80, //first y of the second line
  "x4": 60, //second x of the second line
  "y4": -20, //second y of the second line
  "x5": -20, //first x of the third line
  "y5": -60, //first y of the third line
  "x6": 0, //second x of the third line
  "y6": -40, //second y of the third line
  "x7": 0, //first x of the fourth line
  "y7": -40, //first y of the fourth line
  "x8": 20, //second x of the fourth line
  "y8": -60, //second y of the fourth line
  "x9": 0, //first x of the fifth line
  "y9": -80, //first y of the fifth line
  "x10": -60, //second x of the fifth line
  "y10": -20 //second y of the first line
} //see how inefficient and needlessely complicated all that is? Im glad I moved on from this idea because I would have had 32 parameters for a full grid

const letterB = {
  "x1": 0,
  "y1": -80,
  "x2": -40,
  "y2": -40,
  "x3": 20,
  "y3": -60,
  "x4": -20,
  "y4": -20,
  "x5": 0,
  "y5": -80,
  "x6": 20,
  "y6": -60,
  "x7": -40,
  "y7": -40,
  "x8": -20,
  "y8": -20,
  "x9": -20,
  "y9": -60,
  "x10": 0,
  "y10": -40,
}

const letterC = { //c does not need many lines so a lot of the parameters are set to the same value so you dont see the extra lines, very inefficient
  "x1": 0,
  "y1": -80,
  "x2": -60,
  "y2": -20,
  "x3": -60,
  "y3": -20,
  "x4": 0,
  "y4": 40,
  "x5": 0,
  "y5": -80,
  "x6": 0,
  "y6": -80,
  "x7": 0,
  "y7": -80,
  "x8": 0,
  "y8": -80,
  "x9": 0,
  "y9": -80,
  "x10": 0,
  "y10": -80,
}

const backgroundColor  = "#700707"; //very dark red

const darkred  = "#b51919"; //dark red
const lightred  = "#f20a0a"; //light red
const strokeColor  = "#0a2d27"; //dark green

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES)
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(5);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos1x = letterData["x1"]; //way too many parameters
  let pos1y = letterData["y1"];
  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];
  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];
  let pos4x = letterData["x4"];
  let pos4y = letterData["y4"];
  let pos5x = letterData["x5"];
  let pos5y = letterData["y5"];
  let pos6x = letterData["x6"];
  let pos6y = letterData["y6"];
  let pos7x = letterData["x7"];
  let pos7y = letterData["y7"];
  let pos8x = letterData["x8"];
  let pos8y = letterData["y8"];
  let pos9x = letterData["x9"];
  let pos9y = letterData["y9"];
  let pos10x = letterData["x10"];
  let pos10y = letterData["y10"];



  stroke(lightred);
  line(posx-60,posy-20,posx,posy+40); //this draws the grid in the background in the light red colour
  line(posx-40,posy-40,posx+20,posy+20); //im not sure why I didnt just translate to posx, posy because its very needlessly complicated without it
  line(posx-20,posy-60,posx+40,posy);
  line(posx,posy-80,posx+60,posy-20); 
  line(posx-60,posy-20,posx,posy-80);
  line(posx,posy+40,posx+60,posy-20);
  line(posx+20,posy-60,posx-40,posy);
  line(posx+40,posy-40,posx-20,posy+20);


  push() 
  stroke(255) //white
  translate(posx, posy)
  line(pos1x,pos1y,pos2x,pos2y); //20 variables just to draw these lines
  line(pos3x,pos3y,pos4x,pos4y); //each cooridnate is a different variable so that the lines can be drawn anywhere
  line(pos5x,pos5y,pos6x,pos6y);
  line(pos7x,pos7y,pos8x,pos8y);
  line(pos9x,pos9y,pos10x,pos10y);
  pop()
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
