
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var tree, stone,ground, launcher;
var mango1,mango2,mango3,mango4,mango5,mango6;
var boy;
var engine,world;
var boyhand;

function preload(){
	boy=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

    mango1=new mango(1155,100,30);
    mango2=new mango(1100,155,30);
    mango3=new mango(1200,200,30);
    mango4=new mango(1000,100,30);
    mango5=new mango(1100,250,30);
    mango6=new mango(1100,100,30);
    stone=new Stone(250,400,50);
	tree=new Tree(1050,580);
	ground=new Ground(width/2,600,width,20);
	boyhand = new Shooter(stone.body,{x:250,y:400});
	Engine.run(engine);

}

function draw() {

  background(230);
  
  image(boy ,200,340,200,300);
  

  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  ground.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    boyhand.fly();
}

