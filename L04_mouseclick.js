// write your codes here
let shapecolor = 'white';
let size = 50;
function setup(){
    createCanvas(600,400);
    background(220);
  
}
function draw(){
    // fill(shapecolor);
    // circle(300,200,300);
    //random(); -> generate a number between 0 and 1
    //random(one number); -> generate a number between 0 and one number;
    //random(low number,high number); -> generate a number between lownumber and high number
    //fill(r,g,b);and 0 255
    circle(300,200,size);
}

function mousePressed(){
    shapecolor = color(random(255),random(255),random(255))
    fill(random(255),random(255),random(255));
    rect(random(600),random(400),random(255),random(255));
    
}
function mouseReleased(){
    shapecolor = 'white';
    background(220);
}
function mouseMoved(){
    // ellipse(mouseX,mouseY,10,10);
    size +=1;
}
function mouseDragged(){
    let ssize = random(10,50);
    fill(random(255),random(255),random(255));
    ellipse(mouseX+ random(-20,20),mouseY+random(-20,20),ssize);
}