// write your codes here
let size = 5;
let colors;
let ballcolor;

let x = 100;
let y =100;
let speed = 30;

function setup(){
    createCanvas(600,400);
    background(220);
    ballcolor = color(255);
}

function mousePressed(){
    colors = color(random(255),random(255),random(255));
    size = 5;
}
function mouseDragged(){
    fill(colors);
    circle(mouseX,mouseY,size);
    
    size += 0.5;
}
//==============challenge 1  =======================
// function keyPressed(){ 
//     background(220);
//     let numCircles = floor(random(5,21));
//     for(let i =0; i < numCircles;i++){
//         let x = random(width);
//         let y = random(height);
//         let size = random(5,40);
//         fill(random(255),random(255),random(255));
//         circle(x,y,size);
//     }

// //========excercise 1 printing key and keyCode=====
//     console.log("key:",key);
//     console.log("keycode:",keyCode);
//  }
// function keyReleased(){ 
//     background(220);
//  }
//==== task1 shapedrawer=============================
function draw(){
    if(key === 'c' || key === 'C') {
        circle(100,100,80);
    }
    if(key === 's' || key === 'S'){
        square(60,60,80);
    }
    if(key === 't' || key === 'T'){
        triangle(100,50,50,150,150,150);
    }

//======== task 2 up and down arrow control==========
     fill(ballcolor);
     circle( 100,100,50);
//      if(keyCode === 38){
//         ballcolor = color(255,0,0);
//      }
//      if(keyCode === 40){
//         ballcolor = color(0,0,0);
// ;     }
//====== task 3: else yellow=====================
    if(key === 'w' || key ==='W'){
        ballcolor = color(255);//white
    }
    else if(key ==='r' || key ==='R'){
        ballcolor = color(255,0,0);//red
    }else if(key==='b'||key==='B'){
        ballcolor = color(0,0,255);//blue
    }
    else if(key ==='g'||key==='G'){
        ballcolor = color(0,255,0);}//green
    else{ 
        ballcolor = color(255,255,0);//yellow
    }
//============== task4 ================
    if(keyIsDown(LEFT_ARROW)){
        x-= speed;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x+= speed;
    }
    if(keyIsDown(UP_ARROW)){
        y-= speed;
    }
    if(keyIsDown(DOWN_ARROW)){
        y += speed;
    }
     circle( 100,100,50);
}
//============challenge2 we will come back ltr=======

