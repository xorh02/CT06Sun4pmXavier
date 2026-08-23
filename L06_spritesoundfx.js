// write your codes here
let x= 200;
let y=200;
let soundEffect, bgMusic, staticImage;

function preload(){
    soundEffect = loadSound('assets/pop.mp3');
    bgMusc = loadSound('assets/bossaNova.mp3');
    staticImage = loadImage('assest/pico-a.png')
}


function setup(){
 createCanvas(400,400);
 background(220);
 
}

function draw(){
  
    if(keyCode === 38){
      y -= 5;
    }
    if(keyCode === 37){
        x -=5;
    }
    if(keyCode === 39){
       x += 5;
    }
    if(keyCode ===40){
      y +=5;
    }
    circle(x,y,50);
}