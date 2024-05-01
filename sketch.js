const canvasWidth = 960;
const canvasHeight = 500;
//const cube = 27.5;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "x1": 0,
  "y1": -80,
  "x2": -60,
  "y2": -20,
  "x3": 0,
  "y3": -80,
  "x4": 60,
  "y4": -20,
  "x5": -20,
  "y5": -60,
  "x6": 0,
  "y6": -40,
  "x7": 0,
  "y7": -40,
  "x8": 20,
  "y8": -60,
  "x9": 0,
  "y9": -80,
  "x10": -60,
  "y10": -20,
}

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

const letterC = {
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

const backgroundColor  = "#700707";

const darkred  = "#b51919";
const lightred  = "#f20a0a";
const strokeColor  = "#0a2d27";

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
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let pos1x = letterData["x1"];
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
  line(posx-60,posy-20,posx,posy+40);
  line(posx-40,posy-40,posx+20,posy+20);
  line(posx-20,posy-60,posx+40,posy);
  line(posx,posy-80,posx+60,posy-20); 
  line(posx-60,posy-20,posx,posy-80);
  line(posx,posy+40,posx+60,posy-20);
  line(posx+20,posy-60,posx-40,posy);
  line(posx+40,posy-40,posx-20,posy+20);


  push()
  stroke(255)
  translate(posx, posy)
  line(pos1x,pos1y,pos2x,pos2y);
  line(pos3x,pos3y,pos4x,pos4y);
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
