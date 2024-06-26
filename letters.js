const alphabet = { //My font is a bit inconsitent as far as captilization goes, I made the capatilization of each letter different depending on what was easiest to draw with my constraints
  "default": { //it is the half way point of all of the parameters, it makes a pretty cool shape
    "line1": 67.5,
    "line2": 52.5,
    "line3": 37.5,
    "line4": 22.5,
    "line5": 22.5,
    "line6": 22.5,
    "line7": 22.5,
    "line8": 22.5
  },
  "A": {
    "line1": 75,
    "line2": 60,
    "line3": 15,
    "line4": 0,
    "line5": 45,
    "line6": 0,
    "line7": 45,
    "line8": 0
  },
  "B": {
    "line1": 75,
    "line2": 60,
    "line3": 45,
    "line4":0,
    "line5": 30,
    "line6": 0,
    "line7": 30,
    "line8": 0
  },
  "C": {
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 30,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "D": { //definitely one of the weaker letters, it looks an awful lot like an O or what most would think is a 0
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 30,
    "line5": 45,
    "line6": 0,
    "line7": 45,
    "line8": 0
  },
  "E": {
    "line1": 90,
    "line2": 75,
    "line3": 15,
    "line4": 45,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "F": {
    "line1": 90,
    "line2": 75,
    "line3": 15,
    "line4": 0,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "G": {
    "line1": 75,
    "line2": 60,
    "line3": 15,
    "line4": 30,
    "line5": 15,
    "line6": 0,
    "line7": 45,
    "line8": 0
  },
  "H": {
    "line1": 45,
    "line2": 60,
    "line3": 15,
    "line4": 0,
    "line5": 45,
    "line6": 0,
    "line7": 45,
    "line8": 0
  },
  "I": {
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 30,
    "line5": 0,
    "line6": 45,
    "line7": 0,
    "line8": 0
  },
  "J": {
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 15,
    "line5": 0,
    "line6": 45,
    "line7": 0,
    "line8": 0
  },
  "K": { //this one was always going to be hard so im kind of happy with how it turned out, it doesnt look like any other letters thank goodness
    "line1": 45,
    "line2": 45,
    "line3": 40,
    "line4": 0,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "L": {
    "line1": 45,
    "line2": 30,
    "line3": 15,
    "line4": 30,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "M": {
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 0,
    "line5": 30,
    "line6": 30,
    "line7": 30,
    "line8": 0
  },
  "N": {
    "line1": 60,
    "line2": 30,
    "line3": 15,
    "line4": 0,
    "line5": 30,
    "line6": 30,
    "line7": 0,
    "line8": 0
  },
  "O": {
    "line1": 90,
    "line2": 30,
    "line3": 15,
    "line4": 45,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 45
  },
  "P": {
    "line1": 60,
    "line2": 45,
    "line3": 15,
    "line4": 0,
    "line5": 45,
    "line6": 15,
    "line7": 0,
    "line8": 0
  },
  "Q": {
    "line1": 90,
    "line2": 45,
    "line3": 15,
    "line4": 0,
    "line5": 15,
    "line6": 15,
    "line7": 0,
    "line8": 0
  },
  "R": {
    "line1": 59,
    "line2": 30,
    "line3": 15,
    "line4": 0,
    "line5": 45,
    "line6": 9,
    "line7": 0,
    "line8": 0
  },
  "S": { //this one was very hard due to not being able to do 2 lines on the same grid column
    "line1": 90,
    "line2": 75,
    "line3": 60,
    "line4": 45,
    "line5": 45,
    "line6": 0,
    "line7": 0,
    "line8": 45
  },
  "T": {
    "line1": 75,
    "line2": 30,
    "line3": 15,
    "line4": 0,
    "line5": 0,
    "line6": 45,
    "line7": 0,
    "line8": 0
  },
  "U": {
    "line1": 45,
    "line2": 30,
    "line3": 15,
    "line4": 15,
    "line5": 45,
    "line6": 45,
    "line7": 0,
    "line8": 0
  },
  "V": {
    "line1": 45,
    "line2": 30,
    "line3": 15,
    "line4": 45,
    "line5": 0,
    "line6": 0,
    "line7": 0,
    "line8": 45
  },
  "W": {
    "line1": 45,
    "line2": 30,
    "line3": 15,
    "line4": 30,
    "line5": 45,
    "line6": 45,
    "line7": 45,
    "line8": 0
  },
  "X": {
    "line1": 45,
    "line2": 75,
    "line3": 15,
    "line4": 0,
    "line5": 0,
    "line6": 45,
    "line7": 0,
    "line8": 0
  },
  "Y": {
    "line1": 45,
    "line2": 60,
    "line3": 15,
    "line4": 30,
    "line5": 15,
    "line6": 0,
    "line7": 45,
    "line8": 0
  },
  "Z": { //this one was very hard due to not being able to do 2 lines on the same grid column, easy to be confused with Z
    "line1": 90,
    "line2": 30,
    "line3": 15,
    "line4": 45,
    "line5": 45,
    "line6": 45,
    "line7": 45,
    "line8": 45
  },
  "0": {
    "line1": 45, //minimum of all the parameters
    "line2": 30,
    "line3": 15,
    "line4": 0,
    "line5": 0,
    "line6": 0,
    "line7": 0,
    "line8": 0
  },
  "1": { //rather than make it look like the numbers in english, I took advantage of my grid having 9 squares and the numbers instead represented by how many square in the grid are being drawn
    "line1": 60,
    "line2": 45,
    "line3": 15,
    "line4": 0,
    "line5": 15,
    "line6": 15,
    "line7": 0,
    "line8": 0
  },
  "2": {
    "line1": 75,
    "line2": 60,
    "line3": 15,
    "line4": 0,
    "line5": 15,
    "line6": 15,
    "line7": 15,
    "line8": 0
  },
  "3": {
    "line1": 75,
    "line2": 60,
    "line3": 30,
    "line4": 0,
    "line5": 30,
    "line6": 30,
    "line7": 15,
    "line8": 0
  },
  "4": {
    "line1": 90,
    "line2": 75,
    "line3": 30,
    "line4": 0,
    "line5": 30,
    "line6": 30,
    "line7": 15,
    "line8": 15
  },
  "5": {
    "line1": 90,
    "line2": 75,
    "line3": 30,
    "line4": 15,
    "line5": 45,
    "line6": 45,
    "line7": 15,
    "line8": 15
  },
  "6": {
    "line1": 90,
    "line2": 75,
    "line3": 45,
    "line4": 15,
    "line5": 45,
    "line6": 45,
    "line7": 30,
    "line8": 15
  },
  "7": {
    "line1": 90,
    "line2": 75,
    "line3": 60,
    "line4": 15,
    "line5": 45,
    "line6": 45,
    "line7": 30,
    "line8": 30
  },
  "8": {
    "line1": 90,
    "line2": 75,
    "line3": 60,
    "line4": 30,
    "line5": 45,
    "line6": 45,
    "line7": 45,
    "line8": 30
  },
  "9": {
    "line1": 90, //full grid
    "line2": 75,
    "line3": 60,
    "line4": 45,
    "line5": 45,
    "line6": 45,
    "line7": 45,
    "line8": 45
  }

}