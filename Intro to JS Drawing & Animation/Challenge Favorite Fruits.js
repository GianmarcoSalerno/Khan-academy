//fields
var array = ["bannana","apple","grape"];

//lines, displays array contents
fill(38, 0, 255);
text(array[0], 10, 50, 100, 100);
text(array[1], 10, 100, 100, 100);
text(array[2], 10, 150, 100, 100);

//displays sentence
text("My top " + array.length + " favorite fruits", 10, 200);

