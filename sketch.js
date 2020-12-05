var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1700,400);
  //createSprite(400, 200, 50, 50);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,15,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80);
}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed /(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor= "lime"
    }
    if(damage>10){
      wall.shapeColor = "red"
    }
  }

  drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false
}