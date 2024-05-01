[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2
Gridline
By Ethan Scarrow

My font is comprised of a 3x3 Grid with each line being adjustable in length to allow letters to be formed by highlighting parts of the grid.
The parameters are quite simple, there are 8 parameters. Each parameter sets the length of one of the lines from a permanent starting point, this means the each line only comes from one direction and you can not have breaks in the lines. This constraint
made some of the alphabet quite difficult because it meant I couldnt make an S or a Z where there is 2 lines along the same axis. 
Here is what exactly each parameter does:
- line1 controls the top left to right line

- line2 controls the second left to right line

- line 3 controls the third left to right line

- line 4 controls the bottom left to right line

- line 5 controls the top right to left line

- line 6 controls the second right to left line

- line 7 controls the third right to left line

- line 8 controls the bottom right to left line

My original idea was to have the grid segmented into the 27 lines that form up the grid when they interesect with each other however this would mean that I need 27 paramaters and that is simply far too many. I tried this concept in sketch.js but it was too complicated and I couldnt find an efficient method to make it work. I also originally was going to have the rotation of the grid as a parameter because some letters have more diagonal lines and others are dominantly vertical. I also deemed this idea too complicated because not only would it mean that I would need to add another parameter but it also meant that I would have to change the coordinated of the lines for every letter even if they are in the same place on the grid. The other option was to draw the grid with square and have them all rotate around a central axis but this would not allow me to only draw part of the squares in order to have one small segment. As a result of these failed experiments, I opted to permanently draw the grid at a 45 degree angle which looked more interesting than a regular vertical grid and allowed curved letters to look more natural.

I played with the idea of only colouring the NEGATIVE space in the grid to make it look like a flexible stencil of sorts but once again, this idea proved to be too diificult to execute in code and it would be more efficient to just draw the letters themselves because there are fewer lines to be drawn. 

I ended up having 8 lines drawn from permanent origin points along the edge of the grid like an arrow shape and a parameter that controls how far along the grid each line is. The minimum length of each line is a simple dot on the edge of the grid which is marked by a slightly darker background colour while the letters themnselves are white. 

All in all, I am happy with the outcome of this project and I am glad that I managed to reach something that somewhat matches my original idea despite the struggles and compromises I had to make along the way. In the future I would like to find a better way through more complicated code methods that couldve executed my idea how I originally intended. 