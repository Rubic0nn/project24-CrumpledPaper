
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,boxLeft,boxRight,boxCenter,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
	boxCenter=new Box(1000,450,150,20)
	boxRight=new Box(1080,410,20,100)
	boxLeft=new Box(930,410,20,100)
	//Create the Bodies Here.
	ground=new Ground(600,470,1200,20);
	paper=new Paper(200,450,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  boxCenter.display();
  boxRight.display()
  boxLeft.display();
  paper.display();
 
  text(mouseX+","+mouseY,mouseX,mouseY)
  drawSprites();
 //keyPressed();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75})
	}
}



