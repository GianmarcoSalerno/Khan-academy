//Gianmarco Salerno
//date 9/21/16
//dependancies: khan image lib and khan functions


//Going to make this similar to the epic project on khan academy, however I will be //implementing my own code. After quite a bit of work I have finished something I am proud of. Hopefully this can make the hot list, though this is poorly optimized, organized, and architected. But hey, its kinda fun =)

//So many many things were added...
//Made some new functions including level and the weather functions.
//Made NPCs very similar to the sticks.
//Used a case switch for the different scenes, the actual gameplay is default.
//Sticks and NPCs were upped to 80.
//Made a custom counter for sticks and npcs. Every NPC hit counts as negative 2 towards the players score.
//Use sin for alot of the movement of objects.
//Counter is for the end cut scene.
//Timer is for the tutorial.

//Personal note* even though I am getting a masters in computer science (had never programmed before getting into my masters program), a large amount of my time is spent doing such complex tasks that I feel inadequate at simply programming. I appreciate khan academy giving me the oportunity to work on my skills in such a simple and useful enviroment. This was a difficult task for me, and even though this only took 8 hours total I learned a great deal. Often times professors spend so much time on details that they forget to teach some of the most basic programming skills. I believe that this program is low on bugs and I am simply to tired and too far behind in my distributed systems class and SE architecture class to continue working on this project.

//Things I would like to still add (or anyone else may if they wish, simply give me credit for the portions I have made).
//- make the beaver show some sort of sign that the user has hit an NPC, such as fast blinking or a noise. Perhaps both.
//- some serious optimization, its extremely rare that you actually need to multiply or divide, but I used it often simply for convience. Usually bit shifting does the trick. Also I would like to think about the complexity of certain functions and see if they can be reduced and do less computations.
//-The NPCs should not just disappear. They should fly away or something.
//-The sticks should have some sort of animation when they are picked up.
//-I am not sure if Java Script has design patterns like java, but if it does it would be nice to utilize them.
//-I think thats it...

//fields
var gameState = "intro";//can debug by setting this to the case you want
var delayEnd = 3;


var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
    this.NPCs = 0;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
};

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
};

Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    stroke(0, 0, 0);
    fill(230, 211, 147);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};


//NPC made similar to sticks

var NPC = function(x, y) {
    this.x = x;
    this.y = y;
};

NPC.prototype.draw = function() {
    image(getImage("avatars/piceratops-sapling"),this.x, this.y, 30, 30);

};

Beaver.prototype.checkForNPCCollision = function(NPC) {
    if ((NPC.x >= this.x && NPC.x <= (this.x + 40)) &&
        (NPC.y >= this.y && NPC.y <= (this.y + 40))) {
        NPC.y = -400;
        this.NPCs++;
    }
};


var beaver = new Beaver(200, 300);


var NPCNum = 80;
var NPCs = [];

for (var i = 0; i < NPCNum; i++) {//change for testing
    NPCs.push(new NPC(i * NPCNum + 300, random(20, 200)));
}


var stickNum = 80;
var sticks = [];
for (var i = 0; i < stickNum; i++) {//change for testing
    sticks.push(new Stick(i * stickNum + 300, random(20, 260)));
}


//make the grass
var grassXs = [];
var grassXs2 = [];
var grassXs3 = [];
var grassXs4 = [];
var grassXs5 = [];

for (var i = 0; i < 25; i++) {
    grassXs.push(i*20);
    grassXs2.push(i*20);
    grassXs3.push(i*20);
    grassXs4.push(i*20);
    grassXs5.push(i*20);
}


var makeGrass = function(grassXs,heightMul) {
    var tempHeightMul_dec = 1/heightMul;
    var tempHeightMul = height*heightMul;
    for (var i = 0; i < grassXs.length; i++) {
            image(getImage("cute/GrassBlock"), grassXs[i]*tempHeightMul_dec, tempHeightMul, 32, 59);                    grassXs[i] -= 1;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
            }

        }
};

//make water
var waterXs = [];

for (var i = 0; i < 25; i++) {
    waterXs.push(i*20);
}


var makeWater = function(waterXs,heightMul) {
    var tempHeightMul_dec = 1/heightMul;
    var tempHeightMul = height*heightMul;
    for (var i = 0; i < waterXs.length; i++) {
            image(getImage("cute/WaterBlock"), waterXs[i]*tempHeightMul_dec, tempHeightMul,31, 59);
            waterXs[i] += 0.5;
            if (waterXs[i] === width+1) {
                waterXs[i] = -20;
            }

        }
};

//make the trees
var treeXs = [];
var treeXs2 = [];


for (var i = 0; i < 25; i++) {
    treeXs.push(i*20);
    treeXs2.push(i*20);
}


var makeTree = function(treeXs,heightMul,spacing) {
    var tempHeightMul_dec = 1/heightMul;
    var tempHeightMul = height*heightMul;
    for (var i = 0; i < treeXs.length; i++) {
            image(getImage("cute/TreeShort"), treeXs[i]*tempHeightMul_dec,tempHeightMul ,50, 59);
            treeXs[i] -= 0.6;
            if (treeXs[i] <= -30) {
                treeXs[i] = width;
            }

        }
};

//make the taller trees
    var makeTreeTall = function(treeXs2,heightMul,spacing) {
    for (var i = 0; i < treeXs2.length; i++) {

            //tree trunks
            fill(94 -i, 78 - i*10, 24);
            rectMode(CENTER);
            rect(treeXs2[i] * 8+34, 271, 12, 40);

            image(getImage("cute/TreeTall"), treeXs2[i] * 8,165 ,70, 105);
            image(getImage("cute/TreeTall"), treeXs2[i] * 8,165 ,70, 105);

            treeXs2[i] -= 0.1;
            if (treeXs2[i] <= -30) {
                treeXs2[i] = width;
            }

        }
};


//weather function and variables
    var sunX = 0;
    var sunY = height - 300;
    var time = "day";
    var counter = 0;
    var cloudX = 0;
    var cloudY = 0;
    var starX = 0;
    var starY = 0;


    var dayAndNight = function(){

        if (counter === 0 && sunX > width){
            time = "night";
            sunY = height - 300;
            sunX = 0;
            counter++;
            cloudX = 0;
            cloudY = 0;
            starX = 0;
            starY = 0;
        }

        if (counter === 1 && sunX > width){
            time = "day";
            sunY = height - 300;
            sunX = 0;
            counter = 0;
            cloudX = 0;
            cloudY = 0;
            starX = 0;
            starY = 0;
        }

        switch(time){
            case ("day"):
            background(227, 254, 255);

            noStroke();
            fill(255,255,255);

            //cloud 1
            ellipse(100 - cloudX,100,60,10);
            ellipse(134 - cloudX,95,60,10);
            ellipse(177 - cloudX,95,45,10);

            //could 2
            ellipse(306- cloudX,57,149,-17);
            ellipse(227 - cloudX,51,149,-17);
            ellipse(265 - cloudX,47,81,27);

            stroke(0,0,0);
            fill(251, 255, 0);
            ellipse(sunX,sin(sunY-20)*40 + 50,50,50);

            noStroke();
            fill(255,255,255);

            //cloud 3
            ellipse(15 - cloudX,57,149,-17);
            cloudX = cloudX + 0.3;
            cloudY = cloudY + 0.1;
            break;

            case ("night"):
            background(6, 19, 158);
            fill(237, 237, 206);
            image(getImage("cute/Star"),157 - starX,31 + starY, 10, 20);
            image(getImage("cute/Star"),255 - starX,4 - starY, 10, 20);
            image(getImage("cute/Star"),132 - starX,41 - starY, 10, 20);
            image(getImage("cute/Star"),64 - starX,52 - starY, 10, 20);
            image(getImage("cute/Star"),108 - starX,2 + starY, 10, 20);
            image(getImage("cute/Star"),380 - starX,51 - starY, 10, 20);
            image(getImage("cute/Star"),257 - starX,38 - starY, 10, 20);
            image(getImage("cute/Star"),300 + starX,30 - starY, 10, 20);
            image(getImage("cute/Star"),320 - starX,10 - starY, 10, 20);
            ellipse(sunX,sin(sunY-20)*40 + 50,50,50);
            starX = starX + 0.05;
            starY = starY + 0.05;
            break;
        }


        sunX++;
        sunY++ ;
    };



     //make NPCs
     var npcXs = [];

    for (var i = 0; i < 10; i++) {
        npcXs.push(i*50);
    }


    var npcDeltaY = 0;
    var total = 0;
    var level = 1;

var gameLevel = function(currentLevel){
        level = currentLevel;
        //add background changes
        dayAndNight();
        fill(130, 79, 43);
        rectMode(RADIUS);

        //make background
        makeTree(treeXs,0.63);
        makeTreeTall(treeXs2,1.68);
        makeGrass(grassXs5,0.67);
        makeGrass(grassXs4,0.68);
        makeWater(waterXs,0.70);
        makeGrass(grassXs3,0.77);
        makeGrass(grassXs2,0.81);
        makeGrass(grassXs,0.86);




        for (var i = 0; i < sticks.length; i++) {
            sticks[i].draw();
            beaver.checkForStickGrab(sticks[i]);
            sticks[i].x -= 1;
        }

        for (var i = 0; i < NPCs.length; i = i+4) {
            NPCs[i].draw();
            beaver.checkForNPCCollision(NPCs[i]);
            NPCs[i].y = NPCs[i].y + sin(npcDeltaY)*2 ;
            npcDeltaY = npcDeltaY + 0.3;
            NPCs[i].x -= 1;

        }


        fill(151, 150, 153);
        total = beaver.sticks - beaver.NPCs*2;
        textSize(16 + total/10);
        textAlign(CENTER,CENTER);
        text("  Grabbed: " + beaver.sticks , 70, 30);
        text("- Lost: " + beaver.NPCs*2 , 70, 50);
        text("________", 70, 50);
        text("  Total: " + total, 70, 75);
        text("  Level: " + level, 180, 30);


        if (beaver.sticks/sticks.length >= level/6) {//ratio to how many sticks you need to pick up to win
        if(level === 5) {
            gameState = "beat game";
        }else {
              gameState = "win";
            }
        } else if(sticks[sticks.length-1].x < 100){//if the last stick gets to the end of the screen then end the game
            gameState = "loss";
            total = 0;
        }

        if (keyIsPressed && keyCode === 0) {
            beaver.hop();
        } else {
            beaver.fall();
        }
        beaver.draw();
    };

    var gemX = 2;
    var gemY = 2 ;
    var clock = 0;
    var coordX = [];
    var coordY = [];
    var deltaYChestLid = 0;
    var keyDelta = 0;
    var starDelta = 0;


    for(var i = 0; i < 10; i++){
        coordX.push(random(1,40));
        coordY.push(random(1,30));
    }



    var endScene = function(){
        for( var i = 0; i < width /100; i++){
                    image(getImage(   "cute/GrassBlock"),i*100,250,100,200);
                }

                for(var i = 0; i < 10; i++){
                    image(getImage("cute/GemOrange"), 50+coordX[i]+gemX,270 + coordY[i]+gemY,20,30);
                }




                image(getImage("creatures/Hopper-Cool"),250,250,80,80);
                image(getImage("cute/ChestOpen"),50,250,80,80);
                if(clock <= 100){
                image(getImage("cute/ChestClosed"),50,250,80,80);
                image(getImage("cute/Key"), 230 - keyDelta,275,40,50);
                keyDelta++;
                noStroke();
                fill(255, 255, 255);
                //addition will be much cheaper on the processor than all of this division




                } else if(clock <= 200){

                    gemX = gemX +1;
                    gemY--;
                    image(getImage("cute/ChestOpen"),50,250,80,80);

                    fill(255,255,255);
                    ellipse(141,224,1 + starDelta/8,1 + starDelta/8);
                    ellipse(136,244,10 + starDelta/5,10 + starDelta/5);
                    ellipse(100,280,50 + starDelta/3,50 + starDelta/3);
                    triangle(70,200-starDelta,120,278,90,375+starDelta);
                    triangle(5-starDelta,300,90,300,200+starDelta,250);
                    starDelta++;


                    image(getImage("cute/ChestLid"),50,250 + deltaYChestLid,80,80);
                    deltaYChestLid--;
                } else if (clock <= 300){
                    gemY++;
                    gemX = gemX +0.7;

                } else if (clock >= 350){
                    gemX = 0;
                    gemY = 0;
                }


                clock++;
    };

    var timer2 = 0;
draw = function() {
    switch(gameState){
        //first case  /////////////////////////
        case("intro"):
        background(72, 73, 79);
        image(getImage("creatures/Hopper-Happy"),25,100);
        textSize(24);
        fill(255, 255, 255);
        text("     Menu\n \n Hit alt to play.", 150, 150);
        if (keyIsPressed && keyCode === 18 && gameState === "intro") {
            gameState = "tutorial";
        }
        textSize(12);
        fill(255, 255, 255);
        text("5 levels", 200, 250);
        text("___________",180,250);

        textSize(18);
        text("Help hoper get enough sticks\n to make a treasure chest\n for his secret stash of gems!", 95, 279);
        break;

        //the tutorial
        case ("tutorial"):
        timer2++;
        background(72, 73, 79);
        textAlign(CENTER,CENTER);
        textSize(18);
        text(("These buggers bite!\n Don't let hopper run into them."),200,100);
        image(getImage("avatars/piceratops-sapling"),150,120);
        text(("These buggers bite!\n Don't let hopper run into them."),200,100);
        text(("They like to steal sticks and fly away..."),200,300);
        if(timer2 === 200){
            gameState = false;
            break;
        }
        break;


        //default case  /////////////////////////
        default:
        // static
        gameLevel(level);//needed to make a method so I could implement levels
        break;

        case "win":
        background(72, 73, 79);
        textSize(36);
            fill(255, 255, 255);
            textAlign(CENTER, CENTER);
            text("Good Job! \n\n Press alt to\n go to the next level!", 200, 150);
            image(getImage("creatures/Hopper-Cool"),150,250);
            if (keyIsPressed && keyCode === 18 && level < 5){
                level++;
                gameState = false;
                break;
            }
            total = 0;
        break;

        case "beat game":
            background(0,0,0);
            fill(235, 89, 89);
                textAlign(CENTER, TOP);
                textSize(28);
                text("AMAZING, YOU WON!!! \n\n Press alt to\n go to main menu!", 200, 50);
                endScene();
            if (keyIsPressed && keyCode === 18 && level >= 5) {

                Program.restart();
                break;
            }
        break;


        //loss case  /////////////////////////
        case "loss":
        textSize (24);
        background(0);
        textAlign(CENTER,CENTER);
        fill(255, 0, 0);
        text ("Game over.\nhit alt to play again.", 200, 180);
        if (keyIsPressed && keyCode === 18) {
                Program.restart();
            }
        break;
    }
};

