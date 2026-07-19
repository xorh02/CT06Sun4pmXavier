


function setup() {
    createCanvas(600, 400);
    background(220);
    noLoop(); // Stops continuous drawing
  }
  
function draw() {
  // Recap 1: Repeating Circles
  // fill(255,0,0); 
  // circle(75,200,100);

  // fill(0,255,0);
  // circle(225,200,100);

  // fill(0,0,255);
  // circle(375,200,100);

  // fill(100,24,75);
  // circle(525,200,100);
  
  //to do for loop-> for(let i =0; i<11; i++ ){}
  for(let i=0; i<4;i++){
    //fill(r,g,b)
    circle(75 + (i*150),200,100);
  }
  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}