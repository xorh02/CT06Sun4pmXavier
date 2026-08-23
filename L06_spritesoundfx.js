// write your codes here
let soundEffect, bgMusic, staticImage;
let staticImageX = 0;
let staticImageY = 0;
let staticSpeed = 3;
function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusic = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assets/pico-a.png');
}
function setup(){
 createCanvas(400,400);
 bgMusic.loop();
 
}
function draw(){
  background("lightblue");
  if(staticImageX <=50 || staticImageX >=350 
     || staticImageY <=50 || staticImageY >=350){
        background("red");
        soundEffect.play()
     }
  if(keyIsDown(LEFT_ARROW)){
    staticImageX -= staticSpeed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    staticImageX += staticSpeed;
  }
  if(keyIsDown(UP_ARROW)){
    staticImageY -= staticSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    staticImageY += staticSpeed;
  }
  //constrain(value,minimum,maximum);
  staticImageX = constrain(staticImageX, 50,300);
  staticImageY = constrain(staticImageY, 50,300);
  image(staticImage,staticImageX,staticImageY,50,50);
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}