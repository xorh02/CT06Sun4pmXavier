// write your codes here
let shapecolor = 'blue';

function setup(){
    createCanvas(600,400);
    background(220);
}

function draw(){
    fill(shapecolor);
    circle(300,200,300);
    //random(); -> generate a number between 0 and 1
    //random(one number)
}

function mousePressed(){
    shapecolor = 'red';
}

function mouseReleased(){
    shapecolor = 'blue';
}