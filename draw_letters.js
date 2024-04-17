/* these are optional special variables which will change the system */
var systemBackgroundColor = "#700707";
var systemLineColor = "#000000";
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
  // color/stroke setup
  stroke(255);
  strokeWeight(4);

  // determine parameters for lines
  let linelen1 = letterData["size"];
  let linelen2 = letterData["offsetx"];
  let linelen3 = letterData["offsety"];
  let linelen4 = letterData["line4"];

  // draw lines
  line(50,50,linelen1,linelen1);
  line(30,65,linelen2,linelen2+35);
  line(80,85,linelen3,linelen3+75);
  line(20,80,linelen4,linelen4+80);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letteer["line4"] = map(percent, 0, 100, oldObj["line4"], newObj["line4"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
