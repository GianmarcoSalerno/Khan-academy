// I would like to try and make 3d objects
//used this as a reference http://petercollingridge.appspot.com/3D-tutorial/rotating-objects


//I think my triangles are not accurate, if anyone has any recommendations let me know.


/////////////////////////////////////////////////////////////////////////////////////
//2D shapes

//make nodes
var node = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
};

node.prototype.draw = function(){
    fill(0, 0, 0);
    ellipse(this.x,this.y,5,5);
};



//make and edge
var edge = function(n_1,n_2,n_3){//this n_1, and n_2 are arbitrary names for input params
    this.n_1 = n_1;
    this.n_2 = n_2;
    this.n_3 = n_3;
};

//draw the edge
edge.prototype.draw = function(){
    fill(0, 0, 0);
    line(this.n_1.x,this.n_1.y, this.n_2.x, this.n_2.y);
};


//a center would be much eaiser... I will make squares with centers and diameters instead!
var square = function(x,y,d){
    this.x = x;
    this.y = y;
    this.d = d;
    
    //the radius
    var r = this.d/2;

    //make the nodes
    var n1 = new node(this.x -r ,this.y +r);
    var n2 = new node(this.x -r ,this.y -r);
    var n3 = new node(this.x +r ,this.y -r);
    var n4 = new node(this.x +r ,this.y +r);

    
    
    var nArray = [n1,n2,n3,n4];
    
    this.nArray = nArray;
    
    //make the edges
    var e1 = new edge(n1,n2);
    var e2 = new edge(n2,n3);
    var e3 = new edge(n3,n4);
    var e4 = new edge(n4,n1);
    
    
    var eArray = [e1,e2,e3,e4];
    this.eArray = eArray;
};








square.prototype.draw = function() {
    //draw everything
    for(var i = 0; i < this.nArray.length; i++){
        this.nArray[i].draw();
    }
    
    for(var j = 0; j < this.eArray.length; j++){
        this.eArray[j].draw();
    }
};


square.prototype.rotate2D = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var x = this.nArray[n].x - this.x;//get their x and y values
        var y = this.nArray[n].y - this.y;
          //now we add this.x back to make it rotate around centroid
        node.x = x * cos_t - y * sin_t + this.x;//just flip add/sub (first) sign for opp rot
        node.y = y * cos_t + x * sin_t + this.y;//just flip add/sub (first) sign for opp rot
    }
};

/////////////////////////////////////////////////////////////////////////////////////

//Lets move on to 3D objects

//we add z to node
//we add z to edge

//add new edges and nodes to square
var squareDDD = function(x,y,z,d){
    this.x = x;
    this.y = y;
    this.z = z;
    this.d = d;
    
    //the radius
    var r = this.d/2;

    //make the nodes
    var n1 = new node(this.x -r ,this.y +r, this.z + r);
    var n2 = new node(this.x -r ,this.y -r, this.z + r);
    var n3 = new node(this.x +r ,this.y -r, this.z + r);
    var n4 = new node(this.x +r ,this.y +r, this.z + r);
    //add z axis
    var n5 = new node(this.x -r ,this.y +r, this.z - r);
    var n6 = new node(this.x -r ,this.y -r, this.z - r);
    var n7 = new node(this.x +r ,this.y -r, this.z - r);
    var n8 = new node(this.x +r ,this.y +r, this.z - r);
    
    
    var nArray = [n1,n2,n3,n4,n5,n6,n7,n8];
    
    this.nArray = nArray;
    
    //make the edges
    //front
    var e1 = new edge(n1,n2);
    var e2 = new edge(n2,n3);
    var e3 = new edge(n3,n4);
    var e4 = new edge(n4,n1);
    
    //sides
    var e5 = new edge(n1,n5);
    var e6 = new edge(n2,n6);
    var e7 = new edge(n3,n7);
    var e8 = new edge(n4,n8);
    
    //back
    var e9 = new edge(n5,n6);
    var e10 = new edge(n6,n7);
    var e11 = new edge(n7,n8);
    var e12 = new edge(n8,n5);
    
    
    var eArray = [e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12];
    this.eArray = eArray;
};




squareDDD.prototype.draw = function() {
     //draw everything
    for(var i = 0; i < this.nArray.length; i++){
        this.nArray[i].draw();
    }
    
    for(var j = 0; j < this.eArray.length; j++){
        this.eArray[j].draw();
    }
};

// this was incredibly easy, just copy and pasted my earlier rotate but do it to the z axis, instead of the y


squareDDD.prototype.rotateXD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var x = this.nArray[n].x - this.x;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.x = x * cos_t - z * sin_t + this.x;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + x * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};

squareDDD.prototype.rotateYD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var y = this.nArray[n].y - this.y;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.y = y * cos_t - z * sin_t + this.y;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + y * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};

//I cant seem to find anything online for making 3d spheres by hand, so I will have to invent a way...
var sphereDDD = function(x,y,z,d){
    var r  =  d/2;

    this.x = x;
    this.y = y;
    this.z = z;
    this.d = d;
    
    //make the nodes
    //make nodes(center, delta) or (delta, center)
    var n1 = new node(this.x  ,this.y + r, this.z );
    var n2 = new node(this.x ,this.y -r, this.z );
    var n3 = new node(this.x +r ,this.y, this.z );
    var n4 = new node(this.x -r ,this.y, this.z );
    var n5 = new node(this.x  ,this.y, this.z - r);
    var n6 = new node(this.x ,this.y, this.z + r);
    
    
    var nArray = [n1,n2,n3,n4,n5, n6];
    
    this.nArray = nArray;
    
    //make the edges
    //front
    var e1 = new edge(n1,n2);//make edges criss cross
    var e2 = new edge(n3,n4);
    var e3 = new edge(n5,n6);

    
    
    
    var eArray = [e1,e2,e3];
    this.eArray = eArray;
};

sphereDDD.prototype.draw = function(){
    fill(255, 255, 255);//make ellise white
    ellipse(this.x, this.y, this.d, this.d);//draw ellipse
    
    //draw everything
    for(var i = 0; i < this.nArray.length; i++){
        this.nArray[i].draw();
    }
    for(var j = 0; j < this.eArray.length; j++){
        this.eArray[j].draw();
    }
};

sphereDDD.prototype.rotateXD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var x = this.nArray[n].x - this.x;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.x = x * cos_t - z * sin_t + this.x;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + x * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};

sphereDDD.prototype.rotateYD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var y = this.nArray[n].y - this.y;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.y = y * cos_t - z * sin_t + this.y;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + y * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};




/////////////////////////////////////////////////////////////////////////////////////
//triangle time!!!


var Triangle = function(x,y,z,a){//this is an l for length
    //see http://mathworld.wolfram.com/EquilateralTriangle.html
    var r = (1/6)*sqrt(3)*a;
    var R = (1/3)*sqrt(3)*a;
    
    var l = a/2;//length of sides
    
    //distance from centroid of a fave to a point
    
    this.x = x;
    this.y = y;
    this.z = z;
    this.l = l;

    var n1 = new node(this.x ,this.y - R,this.z );
    var n2 = new node(this.x - l,this.y + l,this.z - r);
    var n3 = new node(this.x + l,this.y + l,this.z - r);
    var n4 = new node(this.x,this.y + l,this.z + R );

    
    var nArray = [n1,n2,n3,n4];
    
    this.nArray = nArray;
    
    //make the edges
    //front
    var e1 = new edge(n1,n2);//make edges criss cross
    var e2 = new edge(n2,n3);
    var e3 = new edge(n3,n1);
    var e4 = new edge(n1,n4);
    var e5 = new edge(n2,n4);
    var e6 = new edge(n3,n4);

    
    var eArray = [e1,e2,e3,e4,e5,e6];
    this.eArray = eArray;
};

Triangle.prototype.draw = function(){

    //draw everything
    for(var i = 0; i < this.nArray.length; i++){
        this.nArray[i].draw();
    }
    for(var j = 0; j < this.eArray.length; j++){
        this.eArray[j].draw();
    }
    
};


Triangle.prototype.rotateXD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var x = this.nArray[n].x - this.x;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.x = x * cos_t - z * sin_t + this.x;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + x * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};

Triangle.prototype.rotateYD = function(theta){
    //how much we want it to change is theta
    var sin_t = sin(theta);
    var cos_t = cos(theta);
    
    //remember trig? x' = x * cos(beta) - y * sin(beta)
    //               y' = y * cos(beta) - x * sin(beta) 
    
    for (var n = 0; n < this.nArray.length; n++) {
        var node = this.nArray[n];//get the nodes
          //we need get only the amount rotated, so we subtract this.x from this.nArray[n].x.
        var y = this.nArray[n].y - this.y;//get their x and y values
        var z = this.nArray[n].z - this.z;
          //now we add this.x back to make it rotate around centroid
        node.y = y * cos_t - z * sin_t + this.y;//just flip add/sub (first) sign for opp rot
        node.z = z * cos_t + y * sin_t + this.z;//just flip add/sub (first) sign for opp rot
    }
};
/////////////////////////////////////////////////////////////////////////////////////
//global vars



//create nodes
var n1 = new node(20,20);
var n2 = new node(30,20);
var n3 = new node(20,10);
var n4 = new node(30,10);


//create some edges
var n5 = new node(70,10);
var n6 = new node(70,20);
var n7 = new node(80,20);
var n8 = new node(80,10);

var e1 = new edge(n5,n6);
var e2 = new edge(n6,n7);
var e3 = new edge(n7,n8);
var e4 = new edge(n8,n5);


//make new squares
var s1 = new square(125,15,20);
var s2 = new square(185,15,20);
var sDDD = new squareDDD(25,80,10,20);
var sDDD2 = new squareDDD(75,80,10,20);
var sDDD3 = new squareDDD(125,80,10,20);
var sDDD4 = new squareDDD(185,80,10,20);

var sp =  new sphereDDD(25,150,0,25);
var sp1 =  new sphereDDD(75,150,0,25);
var sp2 =  new sphereDDD(125,150,0,25);
var sp3 =  new sphereDDD(185,150,0,25);


var tr = new Triangle(25, 225,25,25);
var tr1 = new Triangle(75, 225,25,25);
var tr2 = new Triangle(125, 225,25,25);
var tr3 = new Triangle(185, 225,25,25);



var rate = 1;
//draw shapes
draw = function() {
    //paint canvas white
    fill(255, 255, 255);
    rect(0, 0, width, height);

    n1.draw();
    n2.draw();
    n3.draw();
    n4.draw();
    
    e1.draw();
    e2.draw();
    e3.draw();
    e4.draw();
    
    s1.draw();

    
    s2.draw();
    s2.rotate2D(rate);//what ever number we put in here is multipled by the frames (~60)
    
    sDDD.draw();
    sDDD.rotateXD(rate);
    
    sDDD2.draw();
    sDDD2.rotateYD(rate);
    
    sDDD3.draw();
    sDDD3.rotateXD(rate);
    sDDD3.rotateYD(rate);
    
    text("move me!",160, 55);
    sDDD4.draw();
    
    
    sp.draw();
    sp.rotateXD(rate);
    sp1.draw();
    sp1.rotateYD(rate);
    sp2.draw();
    sp2.rotateXD(rate);
    sp2.rotateYD(rate);
    text("move me!",160, 125);
    sp3.draw();


    tr.draw();
    tr.rotateXD(rate);
    tr1.draw();
    tr1.rotateYD(rate);
    tr2.draw();
    tr2.rotateXD(rate);
    tr2.rotateYD(rate);
    text("move me!",160, 200);
    tr3.draw();

};




//make the 4th square controllable with the mouse
var mouseDragged = function() {
    sDDD4.rotateXD(mouseX - pmouseX);
    sDDD4.rotateYD(mouseY - pmouseY);
    
    
    sp3.rotateXD(mouseX - pmouseX);
    sp3.rotateYD(mouseY - pmouseY);
    
    tr3.rotateXD(mouseX - pmouseX);
    tr3.rotateYD(mouseY - pmouseY);
};
