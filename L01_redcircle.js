function setup(){
    createCanvas(600, 400);//width , height
    background(220); //
}

function draw(){
    fill(255, 0, 0); // fill(red,green,blue);
    ellipse(300,100,100,100); //ellipse(x position, y position,width,height) 
    
    // Todo: Challenge 3 Traffic Light create two more circle 
    //circle 1
    fill(255,255,0);
    ellipse(300,200,100,100);
    //circle 2
    
    fill(0,255,0);
    ellipse(300,300,100,100);
    
    fill(0,255,0);
    ellipse(200,200,100,100); 

     fill(0,255,0);
    ellipse(400,200,100,100);
}