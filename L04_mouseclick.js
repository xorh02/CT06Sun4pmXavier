// write your codes here
let shapecolor = 'white';

function setup(){
    createCanvas(600,400);
    background(220);
  
}
function draw(){
  
    //random(); -> generate a number between 0 and 1
    //random(one number); -> generate a number between 0 and one number;
    //random(low number,high number); -> generate a number between lownumber and high number
    //fill(r,g,b);and 0 255
    
}

function mousePressed(){
    shapecolor = color(random(255),random(255),random(255))
    fill(random(255),random(255),random(255));
    number = random(3);
    if(number ===0){
        circle(random(255),random(255),random(255));
    }else if(number ===1){
        quad(random(255),random(255),random(255),random(255));
    }else if(number===2){
        ellipse(random(255),random(255),random(255),random(255));
    }else if(number ===3){
        rect(random(255),random(255),random(255),random(255));
    }
}
function mouseReleased(){
    shapecolor = 'white';
}