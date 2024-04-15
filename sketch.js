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
  "coverx": 0,
  "covery": 0,
  "sizex": 60,
  "sizey": 20
}

const letterB = {
  "coverx": 0,
  "covery": 0,
  "sizex": 60,
  "sizey": 60
}

const letterC = {
  "coverx": 0,
  "covery": 0,
  "sizex": 20,
  "sizey": 20
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
  strokeWeight(4);

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
  let pos2x = letterData["coverx"];
  let pos2y = letterData["covery"];
  let pos3x = letterData["sizex"];
  let pos3y = letterData["sizey"];


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
  line(pos2x,pos2y,pos3x,pos3y);
  //line(pos2x-60,pos2y-20,pos2x,pos2y-80);
  //line(pos2x,pos2y+40,pos2x+60,pos2y-20);
  //rotate(45)
  //rect(pos2x,pos2y,size2x,size2y);
  pop()
  // function seg1() {
  //   line(posx,posy-80,posx+20,posy-60);
  // };

  // function seg2() {
  //   line(posx,posy-80,posx-20,posy-60);
  // };

  // stroke(0);
  // if (drawseg1 == 1){
  //   seg1();
  // };
  // if (drawseg2 == 1){
  //   seg2();
  // };
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
