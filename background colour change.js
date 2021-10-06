
function setup() {
  createCanvas(400,400);
  ckground(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change ckground color 
  // to red when RIGHT_ARROW is pressed
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    ckground("blue");
    
  }

  if (keyIsDown(RIGHT_ARROW))
  {
    ckground("red");
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    ckground("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    ckground("green");
  }


  
  drawSprites();
}

