var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,jungleImage,jungle;
var invisibleGround;
var score;
var survivalTime;
var FoodGroup;

var PLAY = 1;
var END = 0;

var gameState = PLAY;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(700,500);
  
  monkey = createSprite(70,409);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
 
   
  jungle = createSprite(400,295);
  jungle.addImage(jungleImage);
  jungle.scale = 1;
  jungle.velocityX = -6;
  
  invisibleGround = createSprite(350,470,1000,5);
  invisibleGround.visible = false;
  
  FoodGroup =  createGroup();
  
  score = 0;
  survivalTime = 0;
  
}


function draw() {
  background("cyan");
  
     if(monkey.isTouching(FoodGroup)){
      FoodGroup.destroyEach();
    }
 
    
   if(keyDown("space") && monkey.y >= 400){
   monkey.velocityY = -15;
   }
  
  monkey.velocityY = monkey.velocityY + 0.75
    
  monkey.depth = jungle.depth;
  monkey.depth = monkey.depth + 1;
  
  
   if(jungle.x < 200){
    jungle.x = jungle.width /2;    
  }

  monkey.collide(invisibleGround);
    
  
  createbanana();
 

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50);

  
  stroke("cyan");
  textSize(20);
  fill("black");
  text("Score : " + score , 600,600);
  
  drawSprites();
  
  
  
}


function createbanana(){
  if(frameCount%120 === 0){
  banana = createSprite(700,random(180,300),40,40);
  banana.addImage("banana",bananaImage);
  banana.scale = 0.15;
  banana.velocityX = -6;
  FoodGroup.add(banana);
  
  }   
}


