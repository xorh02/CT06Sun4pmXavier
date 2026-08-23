let shapeColor = "black";
let shapeX = 200;
let shapeY = 200;
let size = 50;
function setup(){
    createCanvas(400,400);
    background(220);
}

function draw(){
    fill(shapeColor);
    if(key === 'r' || key ==='R'){
         if(key === '-' ){
        size -= 10;
        }
        if(key === '+'){
            size+= 10;
        };
        rect(shapeX,shapeY,size,size);
    }
     if(key === 'e' || key ==='E'){
         if(key === '-' ){
        size -= 10;
        }
        if(key === '+'){
            size+= 10;
        };
        circle(shapeX,shapeY,size);
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
