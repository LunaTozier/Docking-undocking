var iss, spacecraft, hasDocked;
var issImage, spacecraft1, spacecraft2,spacecraft3, spacecraft4, bg;

function preload() {
  issImage = loadImage("iss.png");
  spacecraft1 = loadImage("spacecraft1.png");
  spacecraft2 = loadImage("spacecraft2.png");
  spacecraft3 = loadImage("spacecraft3.png");
  spacecraft4 = loadImage("spacecraft4.png");
  bg = loadImage("spacebg.jpg");
}

function setup() {
 createCanvas(800,400);
  hasDocked = false;
  iss = createSprite(500,100,0,0);
  iss.addImage("iss",issImage);
  iss.scale = 0.5;
  spacecraft = createSprite(400,300,0,0);
  spacecraft.addImage("spacecraft",spacecraft1);
  spacecraft.scale = 0.2;
}

function draw() {
  background(bg);
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2);
    }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(20);
    fill("white")
    text("Docking Successful", 200, 380);
  }
  drawSprites();
}