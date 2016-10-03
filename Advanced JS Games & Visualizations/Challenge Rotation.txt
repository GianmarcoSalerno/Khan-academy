//set the background
background(0, 0, 0);

//code to make the rectangle
noStroke();//remove outline
var r = 255;//set color fields
var g = 90;
var b = 0;
fill(r, g, b);//set color

//make the rotation object
for( var i = 0; i < 12; i+=1){
    fill(r,g,b);
    r-= 21;
    g+= 10;
    b +=21;
    pushMatrix();
    translate(200,200);
    rotate(i*30);
    rect(0, 0, 150, 15);//make rectangle
    popMatrix();
}


