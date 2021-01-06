const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(180,500);
	bob2 = new Bob(240,500);
	bob3 = new Bob(300,500);
	bob4 = new Bob(360,500);
	bob5 = new Bob(420,500,{restitution:4});

	roof = new Roof(400,100,800,25);

	rope1 = new Chain(bob1.body,roof.body,-120,0);
	rope2 = new Chain(bob2.body,roof.body,-60,0);
	rope3 = new Chain(bob3.body,roof.body,0,0);
	rope4 = new Chain(bob4.body,roof.body,60,0);
	rope5 = new Chain(bob5.body,roof.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
     Body.applyForce(bob1.body,bob5.body.position,{x:-20,y:-20})
	}	

	if(keyCode === DOWN_ARROW) {
		Body.applyForce(bob5.body,bob1.body.position,{x:20,y:-20})
	}	
}