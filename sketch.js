//var box1,base;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11;
var box12,box13,box14,box15,box16,box17,box18,box19;
var box20,box21,box22,box23,box24,box25,box26,box27,box28;
var base1,base2;
var box29,box30,box31,box32,box33,box34,box35,box36,box37,box38;
var slingshot,boxs;
var score = 0;
function preload() {}


function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;


    
    base1 = new Ground(400, 500, 230, 10);

    box1 = new Box(310,450,30,50);
    box2 = new Box(340,450,30,50);
    box3 = new Box(370,450,30,50);
    box4 = new Box(400,450,30,50);
    box5 = new Box(430,450,30,50);
    box6 = new Box(460,450,30,50);
    box7 = new Box(490,450,30,50);
    box8 = new Box(325,380,30,50);
    box9 = new Box(355,380,30,50);
    box10 = new Box(385,380,30,50);
    box11 = new Box(415,380,30,50);
    box12 = new Box(445,380,30,50);
    box13 = new Box(475,380,30,50);
    box14 = new Box(340,320,30,50);
    box15 = new Box(370,320,30,50);
    box16 = new Box(400,320,30,50);
    box17 = new Box(430,320,30,50);
    box18 = new Box(460,320,30,50);
    box19 = new Box(355,260,30,50);
    box20 = new Box(385,260,30,50);
    box21 = new Box(415,260,30,50);
    box22 = new Box(445,260,30,50);
    box23 = new Box(370,200,30,50);
    box24 = new Box(400,200,30,50);
    box25 = new Box(430,200,30,50);
    box26 = new Box(385,140,30,50);
    box27 = new Box(415,140,30,50);
    box28 = new Box(400,90,30,50);
    base2 = new Ground(900, 290, 130, 10);
    box29 = new Box(850,280,30,50);
    box30 = new Box(880,280,30,50);
    box31 = new Box(910,280,30,50);
    box32 = new Box(940,280,30,50);
    box33 = new Box(865,200,30,50);
    box34 = new Box(895,200,30,50);
    box35 = new Box(925,200,30,50);
    box36 = new Box(880,140,30,50);
    box37 = new Box(910,140,30,50);
    box38 = new Box(895,80,30,50);
    boxs =  new Polygon(200,200,50,50);
    slingshot = new SlingShot(boxs.body,{x:200,y:200});

   // box33 = new Box(840,280,30,50);
  
}

function draw(){
    background(0);
    Engine.update(engine);
   // strokeWeight(4);
   text("Score : "+score,500,50);
  // textSize(20);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box1.Score();
    box2.Score();
    box3.Score();
    box4.Score();
    box5.Score();
    box6.Score();
    box7.Score();
    box8.Score();
    box9.Score();
    box10.Score();
    box11.Score();
    box12.Score();
    box13.Score();
    box14.Score();
    box15.Score();
    box16.Score();
    box17.Score();
    box18.Score();
    box19.Score();
    box20.Score();
    box21.Score();
    box22.Score();
    box23.Score();
    box24.Score();
    box25.Score();
    box26.Score();
    box27.Score();
    box28.Score();
    box29.Score();
    box30.Score();
    box31.Score();
    box32.Score();
    box33.Score();
    box34.Score();
    box35.Score();
    box36.Score();
    box37.Score();
    box38.Score();
    boxs.display();
    slingshot.display();
    console.log(box38.body.visiblity);
   // box33.display();
    base1.display();
    base2.display();
}
function mouseDragged(){
    Matter.Body.setPosition(boxs.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(boxs.body);
    }
}