// write your codes here
let shapecolor = 'blue';
let size = 100
function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolor);
    circle(300,200,100);
}

function mousePressed(){
    shapecolor = 'red';
}

function mouseReleased(){
    shapecolor = 'blue';
}