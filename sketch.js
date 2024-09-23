let d = 75;
let m = 35;
let outline = true;

let gui;
let dslider;
let mslider;
let outlinecheck;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  dslider = createSlider("Diameter",275,10,100,20,10,100);
  mslider = createSlider("Rotate",20, 10, 100, 20, 0, 365);
  outlinecheck = createCheckbox("Outline", 160,10,50,50,true);
}

function draw() {
  background(125);
  drawGui ();

  if (outlinecheck.val == true) {
    stroke("red");
}
else { noStroke(); 
}

fill(250)
  ellipse(100, 200, 50, dslider.val);


  push();
  translate(200,200);
  rotate(radians(mslider.val));
  rect(0, 0, 70, 100);
  pop();

  noStroke ();
  text("Change the size of the oval!", 240, 50);
  text("Rotate the rectangle!", 10, 50);
  text ("Outline?", 165,75)

}