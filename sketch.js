var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
var boxSide1, boxSide2, boxBottom;
var boxSprite1, boxSprite2, boxSprite3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	
}

function setup() {

	createCanvas(800, 700);
	rectMode(CENTER);	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	boxSprite1 = createSprite(400,650,200,20);
	boxSprite1.shapeColor =rgb(255,0,0)

	boxSprite2 = createSprite(300,550,20,200);
	boxSprite2.shapeColor = rgb(255,0,0); 

	boxSprite3 = createSprite(500,550,20,200);
	boxSprite3.shapeColor = rgb(255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	boxSide1 = Bodies.rectangle(400, 200, 20, 20, {isStatic:false}) 
	World.add(world,boxSide1);

	boxSide2 = Bodies.rectangle(200, 200, 20, 20, {isStatic:true}) 
	World.add(world,boxSide2);

	boxBottom = Bodies.rectangle(200, 200, 20, 20, {isStatic:true}) 
	World.add(world,boxBottom);

	Engine.run(engine);
  
}

function draw() {

  Engine.update(engine);  	

  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  boxSprite1.x= boxSide1.position.x ;
  
 // keyPressed()	

  drawSprites();
 
}

function keyPressed() {

 if (keyCode == DOWN_ARROW) {

    Body.setStatic(packageBody,false);
		
  }

}
