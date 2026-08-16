// write your codes here
let size = 5;
let colors;
function setup(){
    createCanvas(600,400);
    background(220);
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
function keyPressed(){ 
    background(220);
    let numCircles = floor(random(5,21));
    for(let i =0; i < numCircles;i++){
        let x = random(width);
        let y = random(height);
        let size = random(5,40);
        fill(random(255),random(255),random(255));
        circle(x,y,size);
    }

//========excercise 1 printing key and keyCode=====
    console.log("key:",key);
    console.log("keycode:",keyCode);
 }
function keyReleased(){ 
    background(220);
 }
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

//==
}
//============challenge2 we will come back ltr=======

