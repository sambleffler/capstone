var dateSlider, GDDSlider;
var img;
var myWidth;
var myHeight;
var points = [];
var points2 = [];
var plot;
var maxGDDprev;
var currentMaxGDD=480;
var warmYear = true;
var answers;
var solved=false;

function setup() {
    loadFont('work_sans/WorkSans-Regular.ttf');
    soundFormats('mp3', 'ogg');
  mySound = loadSound('click.mp3');
  myWidth= windowWidth;
  myHeight= windowHeight-10;
  createCanvas(myWidth, myHeight);
 	background(230);
  dateSlider=new dateSlider(myWidth/12, 3*myHeight/4, 5*myWidth/12, myHeight/12);
  // dateSlider =createSlider(100, 300, 100);
  // dateSlider.position(8*myWidth/12, 2*myHeight/12);
  // GDDSlider =createSlider(320, 480, 400);
  // GDDSlider.position(10*myWidth/12, 2*myHeight/12);
  img = loadImage("img/hopper_growth.png");
  plot = new GPlot(this);
    plot.setPos(6*myWidth/12, myHeight/24);
    plot.setXLim(0, 500);
    plot.setYLim(0, 6);
    plot.setDim(5*myWidth/12, myHeight/3);
    plot.addLayer("layer 2", points2);
    // maxGDDprev=GDDSlider.value();
    answers = new answers(10*myWidth/12,  8.25*myHeight/12, 1.5*myWidth/12, 200);
    textFont("Work Sans");
}



function draw() {
  clear();
  background(250);
  
  stroke(0);
    strokeWeight(3);
    fill(255);
    rect(0,0,myWidth,myHeight/2);
    rect(9.5*myWidth/12,myHeight/2,2.5*myWidth/12,1.1*myHeight/2);
    noStroke();
    if(!warmYear){
      fill('#29AAE1');
      noStroke();
    }
    else
      {
        fill(255);
        stroke('#29AAE1');
      }
    rect(7*myWidth/12, 7*myHeight/12, 2*myWidth/12, 2*myHeight/12);
    if (warmYear) {
      fill('#C0272D');
      noStroke();
    }
    else{
      fill(255);
      stroke('#C0272D');
    }
    rect(7*myWidth/12, 9*myHeight/12+20,2*myWidth/12, 2*myHeight/12);
    noStroke();
    if (warmYear){fill(0);}
    else{fill(255);}
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, BASELINE);
    text("Cool Year", 8*myWidth/12,8*myHeight/12);
    textSize(15);
    textAlign(CENTER, TOP);
    text("16 GDD/Day", 8*myWidth/12,8*myHeight/12+10);
    if(warmYear){fill(255);}
    else{fill(0);}
    textSize(30);
    textStyle(BOLD);
    textAlign(CENTER, BASELINE);
    text("Warm Year", 8*myWidth/12,10*myHeight/12+20);
    textSize(15);
    textAlign(CENTER, TOP);
    text("24 GDD/Day", 8*myWidth/12,10*myHeight/12+30);
  // if (maxGDDprev!== GDDSlider.value()) {
  //   points=[];
  // }
  var GDDperDay= currentMaxGDD/200;
  var x = (dateSlider.val)*GDDperDay;
  var growth =  -2e-5 * Math.pow(x,2) + 0.0226 * x - 0.0511;
  if (growth > 6){
    growth = 6;
  }
  var multiplier = growth/6;
  var stage= Math.round(growth * 10) / 10;
  if (stage > 6){stage=6;}
  if (stage < 0){stage=0;}
  imageMode(CENTER);
  image(img, myWidth/4, 4*myHeight/12, img.width*multiplier, img.height*multiplier);
  noStroke();
  fill(0);
  textAlign(CENTER);
  textStyle(BOLD);
  textSize(70);
  text("Stage: "+stage, 3*myWidth/12, 1.5*myHeight/12);
  // text("Seasonal GDDs: "+GDDSlider.value(),10*myWidth/12, 2*myHeight/12);

if(warmYear){
  points[points.length] = new GPoint(x, growth);
            points.sort(function(obj1, obj2){
              return obj1.x - obj2.x;
            });
}
else{
  points2[points2.length] = new GPoint(x, growth);
            points.sort(function(obj1, obj2){
              return obj1.x - obj2.x;
            });
}
  
  dateSlider.show();
  fill(0);
  textAlign(LEFT);
  textStyle(BOLD);
  textSize(25);
  text("Day:", myWidth/12, 2.65*myHeight/4);
  text("Spring", myWidth/12, 10.25*myHeight/12);
  textAlign(RIGHT);
  text("Fall", 6*myWidth/12, 10.25*myHeight/12);
  textAlign(LEFT);
  textSize(50);
  text(int(dateSlider.val), myWidth/12, 2.75*myHeight/4);

  plot.setPoints(points);
  plot.setLineColor('#C0272D');
    plot.setPointColor('#C0272D');
  plot.getXAxis().setAxisLabelText("Accumulated GDD");
  plot.getYAxis().setAxisLabelText("Stage");
  plot.setTitleText("Growth");

  plot.getLayer("layer 2").setPoints(points2);
    plot.getLayer("layer 2").setLineColor('#29AAE1');
    plot.getLayer("layer 2").setPointColor('#29AAE1');
    // Draw it!
  plot.defaultDraw();
  // maxGDDprev=GDDSlider.value();
  answers.show();
  fill(0);
  textAlign(LEFT, BASELINE);
  textStyle(BOLD);
  textSize(32);
  text("All of the\ngrasshoppers\nreach adulthood\nin a cool year.", 10*myWidth/12, 6.5*myHeight/12);
  
  if(answers.val==1){
    solved=true;
  }

  if(answers.val==0){
    textSize(32);
    textAlign(CENTER);
    textStyle(BOLD);
    text('Incorrect', 10.5*myWidth/12, 10.25*myHeight/12);
    solved=false;
  }

  if (solved) {
    fill(0);
    strokeWeight(3);
    rect(10*myWidth/12, 10*myHeight/12, 1.5*myWidth/12, 60);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(30);
    text("Continue",10*myWidth/12+1.5*myWidth/24, 10*myHeight/12+30)
  }
  
    
}

function touchStarted(){
  
  if(mouseX >= 7*myWidth/12 && mouseX <= 9*myWidth/12 && mouseY >= 9*myHeight/12+20 && mouseY <= 11*myHeight/12+20){
    mySound.setVolume(0.3);
            mySound.play();
      warmYear=true;
    currentMaxGDD = 480;
  }
  if(mouseX >= 7*myWidth/12 && mouseX <= 9*myWidth/12 && mouseY >= 7*myHeight/12 && mouseY <= 9*myHeight/12){
    mySound.setVolume(0.3);
            mySound.play();
      warmYear=false;
    currentMaxGDD = 320;
  }

  if (mouseX > 10*myWidth/12 && mouseX < 10*myWidth/12+1.5*myWidth/12 && mouseY > 10*myHeight/12 && mouseY < 10*myHeight/12 +60 && solved) {
      mySound.setVolume(0.3);
            mySound.play();
      pause(150);
      window.location.href = "phenology-conclusion.html";
            }
    if(mouseX > 10*myWidth/12 && mouseX < 11.25*myWidth/12 && mouseY > 8.25*myHeight/12 && mouseY < (200 + 8.25*myHeight/12) ){
        mySound.setVolume(0.3);
            mySound.play();
    }
    return false;
}


