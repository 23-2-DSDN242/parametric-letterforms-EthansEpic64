/* these are optional special variables which will change the system */
var systemBackgroundColor = "#700707";
var systemLineColor = "#800d0b";
var systemBoxColor = "#C73869";

/* internal constants */
const backgroundColor  = "#700707";

const darkred  = "#b51919";
const lightred  = "#f20a0a";
const strokeColor  = "#0a2d27";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  stroke(92, 2, 1);
  strokeWeight(4);
  
  line(45,50,90,95);
  line(30,65,75,75+35);
  line(15,80,60,60+65);
  line(0,95,45,45+95);
  line(45,50,-45+45,45+50);
  line(60,65,-45+60,45+65);
  line(75,80,-45+75,45+80);
  line(90,95,-45+90,45+95);
 
  // color/stroke setup
  stroke(255);

  // determine parameters for lines
  let linelen1 = letterData["line1"];
  let linelen2 = letterData["line2"];
  let linelen3 = letterData["line3"];
  let linelen4 = letterData["line4"];
  let linelen5 = letterData["line5"];
  let linelen6 = letterData["line6"];
  let linelen7 = letterData["line7"];
  let linelen8 = letterData["line8"];

  // draw lines
  line(45,50,linelen1,linelen1+5);
  line(30,65,linelen2,linelen2+35);
  line(15,80,linelen3,linelen3+65);
  line(0,95,linelen4,linelen4+95);
  line(45,50,-linelen5+45,linelen5+50);
  line(60,65,-linelen6+60,linelen6+65);
  line(75,80,-linelen7+75,linelen7+80);
  line(90,95,-linelen8+90,linelen8+95);
} 

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line1"]    = map(percent, 0, 100, oldObj["line1"], newObj["line1"]);
  new_letter["line2"] = map(percent, 0, 100, oldObj["line2"], newObj["line2"]);
  new_letter["line3"] = map(percent, 0, 100, oldObj["line3"], newObj["line3"]);
  new_letter["line4"] = map(percent, 0, 100, oldObj["line4"], newObj["line4"]);
  new_letter["line5"] = map(percent, 0, 100, oldObj["line5"], newObj["line5"]);
  new_letter["line6"] = map(percent, 0, 100, oldObj["line6"], newObj["line6"]);
  new_letter["line7"] = map(percent, 0, 100, oldObj["line7"], newObj["line7"]);
  new_letter["line8"] = map(percent, 0, 100, oldObj["line8"], newObj["line8"]);
  return new_letter;
}

var swapWords = [
  "GRIDLINE",
  "ANTONYMS",
  "CRAFTING",
  "FOOTBALL"
]
