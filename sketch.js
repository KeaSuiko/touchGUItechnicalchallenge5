let d = 75;
let m = 35;
let outline = true;

let gui;
let dslider;
let mslider;
let outlinecheck;
let j;

function setup() {
  createCanvas(400, 400);

  rectMode(CENTER);
  strokeWeight(10);

  gui = createGui();
  j = createJoystick("joystick",260,275,100,100)
  j.setStyle({
    fillBg:color("red")
  })

  dslider = createSlider("Diameter",275,10,100,20,10,100);
  dslider.setStyle({
    fillBg:color("red")
    })
  mslider = createSlider("Rotate",20, 10, 100, 20, 0, 365);
  mslider.setStyle({
    fillBg:color("red")
  })
  outlinecheck = createCheckbox("Outline", 160,10,50,50,true);
  outlinecheck.setStyle({
    fillBg:color("red")
  })
}

function draw() {
  background(246,174,174);
  drawGui ();

  if (outlinecheck.val == true) {
    stroke("red");
}
else { noStroke(); 
}

fill(250)
  rect(100, 200, 50, dslider.val);

  rect(290, 150, j.valY * 100, j.valX * 100)

  push();
  translate(200,200);
  rotate(radians(mslider.val));
  ellipse(0, 0, 70, 100);
  pop();

  noStroke ();
  text("Change the size of the rect!", 240, 50);
  text("Rotate the oval!", 10, 50);
  text ("Outline?", 165,75)

}