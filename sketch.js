
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stand = new Ground(600, 515, 1200, 30);
	ball = new Paper(150, 200, 70);
	Low = new Dustbin(1050, 500, 300, 20);
	Left = new Dustbin(910, 420, 20, 200);
	Right = new Dustbin(1190, 420, 20, 200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  keyPressed();

  
  ball.display();
  Low.display();
  Left.display();
  Right.display();
  stand.display();
  
}


function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position,{x:100, y:-100}); 		
		
	}
}
