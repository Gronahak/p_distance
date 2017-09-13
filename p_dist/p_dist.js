var p = 1;
var inpt;
function setup() {
  
  var title = createElement('h1' , 'lp norm visualizer');
  createCanvas(300, 300);

  opt = createDiv("Options :");
  slider = createSlider(0, 1000, 50);
  txt = createDiv(slider.value());
  inpt = createInput();
  par = createP("Use the slider to select the value of p. (Between 0 and 10 ) <br> You can also input custom values in the text box.");
  slider.changed(emptyInpt);
}
function emptyInpt(){
     inpt.value("");
   }
function computeLpNorm(x, y, p) {
  if (p == 0) {
    p = 0.001 ;
  }
  return pow ( pow(abs(x), p) + pow(abs(y), p), 1/p);
}

function draw() {
  background(233);


  line(.1*width, height/2, .9*width, height /2);
  line( width/2, .1*height, width/2, .9*height); 
  translate(width/2, height/2);
  fill(23, 45, 123);
  p = slider.value()/100;
  if (inpt.value()) {
    p = inpt.value();
  }
  txt.html(p);

  for (var i = 0; i < 200; i++ ) {
    for (var j =i; j< 200; j++ ) {
      var clpn = computeLpNorm (i, j, p); 
      if ( clpn <= 102 && clpn >= 90) {
        ellipse(i, j, 2, 2);
        ellipse(i, -j, 2, 2); 
        ellipse(-i, -j, 2, 2); 
        ellipse(-i, j, 2, 2);
        ellipse(j, i, 2, 2);
        ellipse(j, -i, 2, 2); 
        ellipse(-j, -i, 2, 2); 
        ellipse(-j, i, 2, 2);
      }
    }
  }
  fill(255);
  //  ellipse(0, 0, slider.value(), slider.value());
}