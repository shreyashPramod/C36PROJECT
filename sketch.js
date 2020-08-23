const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop=[];
var thunder, thunder1,thunder2,thunder3,thunder4;
function preload(){

 thunder1 = loadImage("images/thunderbolt1.png");
 thunder2 = loadImage("images/thunderbolt2.png"); 
 thunder3 = loadImage("images/thunderbolt3.png");
 thunder4 = loadImage("images/thunderbolt4.png");
}

function setup(){
  createCanvas(480,600);

thunder1=createSprite(100,100,50,50);
thunder2=createSprite(100,100,50,50);
thunder3=createSprite(100,100,50,50);
thunder4=createSprite(100,100,50,50);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);
}

function draw(){
    background("black");

    if(frameCount%1===0){
      drop.push(new Drop(random(width/10-30, width/1+30), 1,1));
    }
  
    for (var j = 0; j <drop.length; j++) {
   
     drop[j].display();
     }
    
}   


