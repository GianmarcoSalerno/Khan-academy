background(9, 5, 59);

//fields
var xPositions = [100, 200];
var yPositions = [200, 100];

//displays stars at the coordinates clicked
var drawStars = function() {
    imageMode(CENTER);
    for (var i = 0; i < yPositions.length; i++) {
        image(getImage("space/star"), xPositions[i], yPositions[i], 30, 30);
    }
};

//adds new coordinates to the array when the mouse is clicked
mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    drawStars();
};