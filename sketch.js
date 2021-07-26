//variables 
var wall,thickness
var bullet,speed,weight
thickness=random(22,83)

//preload
//for now not needed

//setup
function setup() {
  createCanvas(1000,400);
  wall = createSprite(900,200,60,thickness,height/2)
  bullet = createSprite(50,200,50,50)

  speed=random(223,321)
  weight=random(30,52)
  
  
  edges=createEdgeSprites();
  
  wall.shapeColor = "blue"
  bullet.shapeColor ="orange"

  wall.debug = true
  bullet.debug = true
  bullet.velocityX = speed;
}

//draw
function draw() {
  background(5); 
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight *speed* speed/12500;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0)
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0)
    }
  }
 
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bylletRIghtEdge=lbullet.x +lbullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);

    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
}