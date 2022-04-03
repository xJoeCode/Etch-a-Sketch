# Etch-a-Sketch

This is my version of the Etch-a-Sketch project from the Odin Project. https://www.theodinproject.com/lessons/foundations-etch-a-sketch

It has inputs to generate the size and colors of the sketchpad as well as the pen. 
By holding down and dragging across the sketchpad, users can do a rough sketch.

To build the sketchpad itself, I created a div with the createElement function and clone them with the cloneNode using loops.
To calculate how much to clone to build the sketchpad. i calculated using square root(size of the sketchpad / size of each tile).

Then there is alse the issue of the cloneNode not generating enopugh tiles to form a perfect square for the sketchpad. to fix that i math.round(size of sketchpad/size of each tile)* size of each tile, so that there is no remainder when i square root.
