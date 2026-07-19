


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
 
  // Task 1: Colour Gradient
  for(let i=0; i<5;i++){
    fill(i * 50);
    circle(50 + i*50,200,40);
  }
  //Challenge 1: Reversed Gradient


  // Task 2: Colour Loop

  // Task 3: Row of Circles

  // Task 4: Grid of Circles
}