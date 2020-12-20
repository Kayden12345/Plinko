
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight=500;

function setup() {
	createCanvas(490, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(0,800,1000,20)

	divisions = new Divisions(0,800,15,divisionHeight)
	divisions1 = new Divisions(80,800,15,divisionHeight)
	divisions2 = new Divisions(160,800,15,divisionHeight)
	divisions3 = new Divisions(240,800,15,divisionHeight)
	divisions4 = new Divisions(320,800,15,divisionHeight)
	divisions5 = new Divisions(400,800,15,divisionHeight)
	divisions6 = new Divisions(480,800,15,divisionHeight)

	plinko = new Plinko(0, 200, 20,20)
	plinko1 = new Plinko(80, 200, 20,20)
	plinko2 = new Plinko(160, 200, 20,20)
	plinko3 = new Plinko(240, 200, 20,20)
	plinko4 = new Plinko(320, 200, 20,20)
	plinko5 = new Plinko(400, 200, 20,20)
	plinko6 = new Plinko(480, 200, 20,20)
	plinko7 = new Plinko(0, 300, 20,20)
	plinko8 = new Plinko(80, 300, 20,20)
	plinko9 = new Plinko(160, 300, 20,20)
	plinko10 = new Plinko(240, 300, 20,20)
	plinko11 = new Plinko(320, 300, 20,20)
	plinko12 = new Plinko(400, 300, 20,20)
	plinko13 = new Plinko(480, 300, 20,20)
	plinko14 = new Plinko(0, 400, 20,20)
	plinko15 = new Plinko(80, 400, 20,20)
	plinko16 = new Plinko(160, 400, 20,20)
	plinko17 = new Plinko(240, 400, 20,20)
	plinko18 = new Plinko(240, 400, 20,20)
	plinko19 = new Plinko(320, 400, 20,20)
	plinko20 = new Plinko(400, 400, 20,20)
	plinko21 = new Plinko(480, 400, 20,20)

	particle = new Particle(random(0,400), random(0, 400),10,10)
	particle1 = new Particle(random(0, 400),random(0,400),10,10)
	particle2 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle3 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle4 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle5 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle6 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle7 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle8 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle9 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle10 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle11 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle12 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle13 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle14 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle15 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle16 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle17 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle18 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle19 = new Particle(random(0, 400), random(0, 400), 10,10)
	particle20 = new Particle(random(0, 400), random(0, 400), 10,10)

	//	for (var j  = 40; j <= width; j=j+50)
//	{
//		plinko.push(new Plinko(j,75));
//	}
//	for (var j  = 15; j <= width; j=j+50)
//	{
//		plinko.push(new Plinko(j,175));
//	}



	//for (var k = 0; k <=width; k = k + 80){
	//	divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
		//this.divisions[k]
//	}
	Engine.run(engine);
}


function draw() {
  //rectMode(CENTER);
  background(0);

  ground.display()
  divisions.display();
  divisions1.display();
  divisions2.display();
  divisions3.display();
  divisions4.display();
  divisions5.display();
  divisions6.display();

  plinko.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko10.display();
  plinko11.display();
  plinko12.display();
  plinko13.display();
  plinko14.display();
  plinko15.display();
  plinko16.display();
  plinko17.display();
  plinko18.display();
  plinko19.display();
  plinko20.display();
  plinko21.display();

  particle.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  particle16.display();
  particle17.display();
  particle18.display();
  particle19.display();
  particle20.display();
  drawSprites();
}



	


