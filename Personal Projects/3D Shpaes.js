// I would like to try and make 3d objects
//used this as a reference http://petercollingridge.appspot.com/3D-tutorial/rotating-objects



/////////////////////////////////////////////////////////////////////////////////////
//2D shapes

//make nodes
var node = function(x,y){
    this.x = x;
    this.y = y;
};

node.prototype.draw = function(){
    fill(0, 0, 0);
    ellipse(this.x,this.y,5,5);
};



//create nodes
var n1 = new node(20,20);
var n2 = new node(30,20);
var n3 = new node(20,10);
var n4 = new node(30,10);







//make and edge
var edge = function(n_1,n_2){//this n_1, and n_2 are arbitrary names for input params
    this.n_1 = n_1;
    this.n_2 = n_2;
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



/////////////////////////////////////////////////////////////////////////////////////

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
    s2.rotate2D(2);//what ever number we put in here is multipled by the frames (~60)

};