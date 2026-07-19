 let xx=0;

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
  let spacing =50;
  for(let i=0; i<5;i++){
    fill(i * 50);
    circle(spacing + i*spacing,200,40);
  }
  //Challenge 1: Reversed Gradient
  for(let i=0; i<9; i++){
    noStroke();
    fill(255 -i *25);
    rect(50 +i *35,90,25);
  }
  
  //challenge 2: Smooth Gradient
  for(let i =0; i <300;i++){
    noStroke();
    fill(i*255/300);
    rect(50+i,275,1,50);
  }
  // Task 2: Colour Loop
  let spacing =50;
  for(let i=0;i<5;i++){
    if(i%2==0){
      fill(0);
    }else{
      fill(255);
    }
    circle(spacing + i*spacing,200,40);
  }
  //Challenge 3: Checkered Pattern

  // Task 3: Row of Circles
  let circum 
  //step 1 new var&divide canvas width by2
   let halfwidth = width/2;
   //step 2 new var&divide total circle width by2
   
   //step 3 find the gap

   //step 4 find the radius

   //step 5 find startx add gap and radius

   //step 6 create the loop for 5 circle

  // Task 4: Grid of Circles
}