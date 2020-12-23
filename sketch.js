var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="yellow";
  fixedRect.debug="true";
  movingRect=createSprite(500,100,100,100);
  movingRect.shapeColor="yellow";
  movingRect.debug="true";
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  drawSprites();
}