/* these are optional special variables which will change the system */
var systemBackgroundColor = "#700707"; //dark maroon red
var systemLineColor = "#800d0b"; //slightly lighter than the background colour
var systemBoxColor = "#C73869"; //pinky red

/* internal constants */
const backgroundColor  = "#700707"; //dark maroon red
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(92, 2, 1); //slightly darker than background colour
  strokeWeight(4); 
  
  line(45,50,90,95); //this section draws the background permanent grid which outlines the boundaries of the letters
  line(30,65,75,75+35);
  line(15,80,60,60+65);
  line(0,95,45,45+95);
  line(45,50,-45+45,45+50);
  line(60,65,-45+60,45+65);
  line(75,80,-45+75,45+80);
  line(90,95,-45+90,45+95);
 
  // color/stroke setup
  stroke(245); //white

  // determine parameters for lines
  let linelen1 = letterData["line1"]; //controls the top left to right line
  let linelen2 = letterData["line2"]; //controls the second left to right line
  let linelen3 = letterData["line3"]; //controls the third left to right line
  let linelen4 = letterData["line4"]; //controls the bottom left to right line
  let linelen5 = letterData["line5"]; //controls the top right to left line
  let linelen6 = letterData["line6"]; //controls the second right to left line
  let linelen7 = letterData["line7"]; //controls the third right to left line
  let linelen8 = letterData["line8"]; //controls the bottom right to left line

  // draw lines
  line(45,50,linelen1,linelen1+5); //line1 (maths for the lines works by having the first point permenant and the second point controlled by the parameter, the y axis is added to the difference between the first two axis points)
  line(30,65,linelen2,linelen2+35); //line2
  line(15,80,linelen3,linelen3+65); //line3
  line(0,95,linelen4,linelen4+95); //line4
  line(45,50,-linelen5+45,linelen5+50); //line5 (lines facing the other way means that the parameter x is negative and added with the first x and the y is added with the first y)
  line(60,65,-linelen6+60,linelen6+65); //line6
  line(75,80,-linelen7+75,linelen7+80); //line7
  line(90,95,-linelen8+90,linelen8+95); //line8
} 

function interpolate_letter(percent, oldObj, newObj) { //interpolates the lines from their old position to their new position smoothly and at the same time so it transforms and looks cool
  let new_letter = {}; 
  new_letter["line1"] = map(percent, 0, 100, oldObj["line1"], newObj["line1"]);
  new_letter["line2"] = map(percent, 0, 100, oldObj["line2"], newObj["line2"]);
  new_letter["line3"] = map(percent, 0, 100, oldObj["line3"], newObj["line3"]);
  new_letter["line4"] = map(percent, 0, 100, oldObj["line4"], newObj["line4"]);
  new_letter["line5"] = map(percent, 0, 100, oldObj["line5"], newObj["line5"]);
  new_letter["line6"] = map(percent, 0, 100, oldObj["line6"], newObj["line6"]);
  new_letter["line7"] = map(percent, 0, 100, oldObj["line7"], newObj["line7"]);
  new_letter["line8"] = map(percent, 0, 100, oldObj["line8"], newObj["line8"]);
  return new_letter;
}

var swapWords = [ //I used swap words that didnt include the letter S or Z because those are my two weakest letters
  "GRIDLINE",
  "GLAMPING",
  "CRAFTING",
  "FOOTBALL"
]
