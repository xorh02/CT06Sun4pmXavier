let shapeColor = "black";
let shapeX = 200;
let shapeY = 200;
function setup(){
    createCanvas(400,400);
    background(220);
}

function draw(){
    fill(shapeColor);
    if(key === 'r' || key ==='R'){
        rect(shapeX,shapeY,50,50);
    }
     if(key === 'e' || key ==='E'){
        circle(shapeX,shapeY,50);
    }
    
}
function keyReleased(){
    background(220);
}