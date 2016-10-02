//my work
//function to set smiley parameters
var SmileyFace = function(centerX, centerY){
    this.centerX = centerX;
    this.centerY = centerY;
};
//speak method
SmileyFace.prototype.speak = function(stringIn){
  text(stringIn, this.centerX - 15, this.centerY - 100);  
};


//draw method
SmileyFace.prototype.draw = function() {
     fill(255, 234, 0);
    ellipse(this.centerX, this.centerY, 150, 150);
    fill(0, 0, 0);
    ellipse(this.centerX-30, this.centerY-30, 20, 20); 
    ellipse(this.centerX+30, this.centerY-30, 20, 20); 
    noFill(); 
    strokeWeight(3);
    arc(this.centerX, this.centerY+10, 64, 40, 0, 180);
};



var smiley = new SmileyFace(100,200);
smiley.draw();
smiley.speak("hello");

var smiley2 = new SmileyFace(250,300);
smiley2.draw();
smiley2.speak("stuff");


