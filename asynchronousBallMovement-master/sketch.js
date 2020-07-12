var ball;
var database,position;
function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";
    var ballpos = database.ref("ball/position")
    ballpos.on("value",readPosition)
}

function draw(){
    background("yellow");
    if (position!==undefined){

    
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+5);
    }
    drawSprites();
}
}

function changePosition(x,y){
    database.ref("ball/position").set({  
   " x " : position.x + x,
    "y" : position.y + y,
    })
    
}
function readPosition(data){
position = data.val()
ball.x=position.x
ball.y=position.y

}