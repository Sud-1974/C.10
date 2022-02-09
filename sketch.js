var ground
var trex ,trex_running;
var ground_image
var obstacle_image
var obstacle
var edges
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground2.png");
  obstacle_image = loadImage("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png","obstacle5.png","obstacle6.png");
}

function setup(){
  createCanvas(600,530)
  
  //create a trex sprite
  trex = createSprite(100,200,30,30);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 
   
 ground = createSprite(300,220,600,10);
 ground.addImage("ground",ground_image);

 //obstacle = createSprite(100,200,30,30);
 //obstacle.addImage("obstacle",obstacle_image);
 //obstacle.scale = 0.8;

 edges=createEdgeSprites();

}

function draw(){
  background("black")
  ground.velocityX=-7;
  if(ground.x<0){ground.x=ground.width/2}
  
  if(keyDown("SPACE")){
    trex.velocityY = -5;
  }
  
  trex.velocityY = trex.velocityY +0.5;

  trex.collide(ground);

drawSprites();
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
