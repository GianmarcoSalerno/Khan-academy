var xPos = 200;
var yPos = 200;
var xPos2 = 200;
var yPos2 = 200;
var xPos1 = 200;
var yPos1 = 200;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos +=1;
    yPos +=1;
    ellipse(xPos1-20, yPos1+20, 10, 10);
    ellipse(xPos1-40, yPos1+40, 10, 10);
    xPos1 +=-1;
    yPos1 +=1;
    ellipse(xPos2-20, yPos2-10, 10, 10);
    xPos2 +=-1;
    yPos2 +=-1;
};



