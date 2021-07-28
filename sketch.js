var shipImg,ship,seaImage,sea;
function preload(){
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(600,300);
  sea=createSprite(10,200,600,10)
  sea.x=sea.width/2
  sea.velocityY=-2
  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship",shipImg)
  ship.scale=0.2
  sea.visible=false
  

}

function draw() {
 background("blue")
  
 if(keyDown("space")){
 ship.velocityX=-10
}
ship.velocityY= ship.velocityY + 0.8
if(sea.X<0){
  sea.x=sea.width/2
}
ship.collide(sea)
drawSprite()
}
