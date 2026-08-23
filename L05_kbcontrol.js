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
    if(key === 'b' || key ==='B'){
        shapeColor = color(0,0,255);
    }
     if(key === 'g' || key ==='G'){
        shapeColor = color(0,255,0);
    }
     if(key === 'y' || key ==='Y'){
        shapeColor = color(255,255,0);
    }
}
function keyReleased(){
    background(220);
}