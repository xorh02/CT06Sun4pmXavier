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
  if(keyIsDown(LEFT_ARROW)){
    staticImageX -= staticSpeed;
  }
  if(keyIsDown(RIGHT_ARROW)){
    staticImageX += staticSpeed;
  }
  image(staticImage,staticImageX,staticImageY,50,50);
  constrain(staticImageX,50,350);
  constrain(staticImageY,0,400);
}

function keyPressed(){
    if(keyCode ===32){
        soundEffect.play();
    }
}