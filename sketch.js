var ball
var database
var hball,position

function setup() {
 database = firebase.database()
  createCanvas(800,400);
  ball = createSprite(200,200,20,20)
  var hball = database.ref("ball/position")
  hball.on("value",readPosition,showError)
}

function draw() {
  background(255,255,255);  

  if (keyDown(LEFT_ARROW) ){
    writePosition(-1,0)
  }

  else if (keyDown(RIGHT_ARROW) ){
    writePosition(1,0)
  }

  else if (keyDown(UP_ARROW) ){
    writePosition(0,-1)
  }

  else if (keyDown(DOWN_ARROW) ){
    writePosition(0,1)
  }
  drawSprites();

}

function writePosition(x,y){
database.ref("ball/position").set({
  x:position.x+x,
  y:position.y+y
})
}

function readPosition(data){
  position = data.val()
  ball.x = position.x;
  ball.y = position.y;
}

function showError(){
  console.log ("error reading from the database")
}