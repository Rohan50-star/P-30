const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    polygon_img = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,40);
    stand = new Ground(390,300,250,10);
    stand2 = new Ground(500,500,250,10)

    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    
    //level three
    
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    
    //level four
    block16 = new Block(390,155,30,40);

    //second pyramid
    //block17 = new Block(390,155,30,40);
    //block18 = new Block(390,155,30,40);
    //block19 = new Block(390,155,30,40);
    //block20 = new Block(390,155,30,40);
    //block21 = new Block(390,155,30,40);

    //level two
    //block22 = new Block(390,155,30,40);
    //block23 = new Block(390,155,30,40);
    //block24 = new Block(390,155,30,40);

    //level three
    //block25 = new Block(510,155,30,40);

    polygon = Bodies.circle(50,200,20);
    
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw(){
    background(56,44,44);
    Engine.update(engine);

    stroke(20);
    fill("white");
    text("Press space to try again.", 800, 350);

    ground.display();

    stand.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();

    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  
    slingshot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}