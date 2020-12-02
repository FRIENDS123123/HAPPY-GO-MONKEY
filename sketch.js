
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage; 
var FoodGroup, obstacleGroup;
var survivalTime,score;
var ground;
var GAMEOVER;


function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
   
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  
  foodGroup=new Group();
  obstacleGroup=new Group();
 
  survivalTime = 0;
  score = 0;

    
}


function draw() {
  background ("lightgreen");
  
  if(keyDown("space")&& monkey.y >= 150) {
        monkey.velocityY = -12;
    }
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score,500,50);
  
  if(obstacleGroup.isTouching(monkey)){
  ground.velocityX=0;
    monkey.velocityY=0;
    obstacleGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    survivalTime=0;
  
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  drawSprites ();
  
  spawnfood () ;
  
  spawnobstacles() ;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("SurvivalTime: "+ survivalTime,100,50 );
  
}

 function spawnfood () {
   if (frameCount % 80 === 0){
   banana = createSprite(600,250,40,10);
    banana.y=random(120,200);
   banana.addImage(bananaImage);
   banana.scale=0.05;
     banana.velocityX=-5;
     foodGroup.add(banana);
   }
   
 }

function spawnobstacles() {
  if (frameCount % 300 === 0){
  obstacle = createSprite(800,320,10,40);
    
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
}
}



