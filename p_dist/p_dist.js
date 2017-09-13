function setup() {
  createCanvas(300, 300);
  createDiv("options");
  slider = createSlider(0, 100, 50);
}

function draw() {
  background(23, 178, 45,12);
  fill(255);
  line(.1*width, height/2 , .9*width, height /2);
  line( width/2, .1*height, width/2 , .9*height); 
  translate(width/2, height/2);

  ellipse(0, 0, slider.value(), slider.value());
}