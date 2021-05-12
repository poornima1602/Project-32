const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var fair,girl,gImg;
var t1,t2,tableImg;
var cup,cupImg;
var score=0;
var gameState="onsling";

var backgroundImg;
var bg = "images/light.jpg";

function preload(){
	fair=loadImage('sprites/qwerty.jpg');
	gImg=loadImage('sprites/girl (1).png');
	tableImg=loadImage('sprites/table.png');
}

function setup() {
	
	var canvas = createCanvas(1350, 650);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	 //creating sprites 
    girl=createSprite(150,450);
	girl.addImage(gImg);
	girl.scale=0.5;

	t1=createSprite(600,625);
	t1.addImage(tableImg);
	t1.scale=0.26;

	t2=createSprite(950,315);
	t2.addImage(tableImg);
	t2.scale=0.26;

	ball = new Ball(200,300);
	launcher1= new launcher(ball.body,{x:230,y:330});	
	base1=new Ground(600,580,250,20);
    base2=new Ground(950,270,250,20);

	block1=new Block(482,550,40,50);
	block2=new Block(521,550,40,50);
	block3=new Block(562,550,40,50);
	block4=new Block(603,550,40,50);
	block5=new Block(644,550,40,50);
	block6=new Block(685,550,40,50);
	block7=new Block(720,550,40,50);

	block8=new Plock(515,500,40,50);
	block9=new Plock(556,500,40,50);
	block10=new Plock(597,500,40,50);
	block11=new Plock(638,500,40,50);
	block12=new Plock(680,500,40,50);

	b1=new Olock(560,450,40,50);
	b2=new Olock(600,450,40,50);
	b3=new Olock(640,450,40,50);

	b4=new Rlock(600,400,40,50);

	b5=new PPlock(830,200,40,50);
	b6=new PPlock(870,200,40,50);
	b7=new PPlock(910,200,40,50);
	b8=new PPlock(950,200,40,50);
	b9=new PPlock(990,200,40,50);
	b10=new PPlock(1030,200,40,50);
	b11=new PPlock(1070,200,40,50)

	y1=new Ylock(870,150,40,50);
	y2=new Ylock(910,150,40,50);
	y3=new Ylock(950,150,40,50);
	y4=new Ylock(990,150,40,50);
	y5=new Ylock(1030,150,40,50);

	g1=new Glock(910,100,40,50);
	g2=new Glock(950,100,40,50);
	g3=new Glock(990,100,40,50);

	g4=new Lock(950,50,40,50);
	
	 Engine.run(engine);
  
}


function draw() {
	if(backgroundImg)
    background(backgroundImg);

	stroke(5);
	textSize(40);
	fill("purple");
	textFont("waltography");
	text("POINTS : "+score,800,50);
    textSize(30);
	fill("green");
    text("PRESS SPACE TO GET THE BALL BACK.",10,30);
                                                            
    Engine.update(engine);

    //displaying them
	ball.display();

	launcher1.display();

    base1.display();
	base2.display();

	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();

	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	
	b1.display();
	b2.display();
	b3.display();

	b4.display();

	b5.display();
	b6.display();
	b8.display();
	b7.display();
	b9.display();
	b10.display();
	b11.display();

	y1.display();
	y2.display();
	y3.display();
    y4.display();
	y5.display();

	g1.display();
	g2.display();
	g3.display();
	g4.display();

    drawSprites();

}

//adding functions to make a ball show movement 
function mouseDragged(){ 
	   Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
  launcher1.fly();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(ball.body,{x:200,y:300});
		launcher1.attach(ball.body);
	}
}

async function getBackgroundImage(){
	var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
	var responseJSON = await response.json();
 
	var datetime = responseJSON.datetime;
	var hour = datetime.slice(11, 13);
	//console.log(hour);
 
	if (hour >= 06 && hour <= 18) {
	  bg = "images/light.jpg";
	} else {
	  bg = "images/dark.jpg";
	}
 
	backgroundImg = loadImage(bg);
	console.log(backgroundImg);
 }