var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
 
  movingRect = createSprite(200,200,50,80);
  movingRect.shapeColor= "green";
  
  fixedRect = createSprite(300,300,80,50);
  fixedRect.shapeColor= "green";
}

function draw() {
  background(0);  
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2&& 
    fixedRect.x-movingRect.x<= fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<= fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor= "green";
    fixedRect.shapeColor= "green";
  }

  
  drawSprites();
}