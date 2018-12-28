//const key = 'pk.eyJ1Ijoic2FtYmxlZmZsZXIiLCJhIjoiY2puYnZ5bjY3MDhhZzNrcGxuY2ljM3MyeCJ9.5pR-OUYudKxSUoVMxRGxBw';
//
//const mappa = new Mappa('Mapbox', key);

let cahautPoints = [];
  let a1Points = [];
  let b1Points = [];
  let c1Points = [];
  var answers;
  var solved=false;

//const options = {
//  lat: 40.006938,
//  lng: -105.4,
//  zoom: 10.5,
//  width: 960,
//  height: 485,
//  scale: 1,
//  pitch: 0,
//  style: 'satellite-v9'
//}

//const myMap = mappa.staticMap(options);
let img;
let currentElevation="5,300ft";
let currentName="Chautauqua";
let timeButtons;
let chautauquaHoppers=[0,1,1,2,10,6,0];
let a1Hoppers=[0,0,0,1,4,6,0];
let b1Hoppers=[0,0,0,1,1,2,0];
let c1Hoppers=[0,0,0,1,1,1,1];
let currentHoppers=chautauquaHoppers[0];
let currentSite=0;
var ChautImg, A1Img, B1Img, C1Img, currentImage;

function preload() {
  img = loadImage("img/boulder-map.jpg");
    soundFormats('mp3', 'ogg');
  mySound = loadSound('click.mp3');
}

let chautauqua, a1, b1, c1, museum;
var plot;

function setup() {
    loadFont('work_sans/WorkSans-Regular.ttf');
	canvas = createCanvas(windowWidth,windowHeight-10);
//	museum = myMap.latLngToPixel(40.006938, -105.272812); 
//	chautauqua = myMap.latLngToPixel(39.999, -105.283);
//	a1 = myMap.latLngToPixel(40.015, -105.377); 
//	b1 = myMap.latLngToPixel(40.023, -105.430); 
//	c1 = myMap.latLngToPixel(40.036, -105.547);
//  console.log(museum);
//  console.log(a1);
//  console.log(b1);
//  console.log(c1);
//  console.log(chautauqua); 
	timeButtons= new dates(25,7.5*windowHeight/12,5*windowWidth/12-25,windowHeight/4);
  answers = new answers(10*windowWidth/12,  8.25*windowHeight/12, 1.5*windowWidth/12, 200);
  plot = new GPlot(this);
    plot.setPos(0.9*windowWidth/2, 1.1*windowHeight/2);
    plot.setDim(windowWidth/3, windowHeight/3);
    plot.setMar(0,0,0,0);
    plot.setXLim(3, 11);
    plot.setYLim(0, 12);
    plot.getXAxis().setAxisLabelText("Month");
    plot.getYAxis().setAxisLabelText("Accidentals");
    plot.setTitleText("Accidentals over a Season");
    
    plot.addLayer("layer 2", a1Points);
    plot.addLayer("layer 3", b1Points);
    plot.addLayer("layer 4", c1Points);

    ChautImg = loadImage("img/chautaqua.jpg"); 
    A1Img = loadImage("img/a1.jpg");
    B1Img = loadImage("img/b1.jpg");
    C1Img = loadImage("img/c1.jpg");
    currentImage=ChautImg;
        textFont("Work Sans");
} 

function draw(){
	clear();
	background(250);
	 imageMode(CENTER);
		image(img, 960/2 +25, windowHeight/4);	
    imageMode(CORNER);
    image(currentImage, windowWidth-currentImage.width+25, 20);
    fill(255);
	noStroke();
	textSize(15);
	textStyle(BOLD);
    text('Photo Credit:\nDon Van Horn',1025, windowHeight/2-50);

	fill(255);
	noStroke();
	textSize(15);
	textStyle(BOLD);
  	ellipse(766.956, 267.5, 20, 20);
  	text('You are Here', 766.956, 237.5);
  textSize(15);
  textStyle(BOLD);
  fill(255,0,0);
  if(currentSite==0) {stroke(255,255,0);}
  else{noStroke();}
  fill(255,0,0);
  ellipse(745.973, 288.843, 20, 20);
  noStroke();
  text('Chautauqua', 745.973, 318.843);
  
  if(currentSite==1) {stroke(255,255,0);}
  else{noStroke();}
  fill(0,255,255);
  ellipse(552.371, 245.821, 20, 20);
  noStroke();
  text('A1', 552.371, 275.821);
  
  if(currentSite==2) {stroke(255,255,0);}
  else{noStroke();}
  fill(0,255,0);
  ellipse(443.212, 224.306, 20, 20);
  noStroke();
  text('B1', 443.212, 254.306);
		  
	if(currentSite==3) {stroke(255,255,0);}
  else{noStroke(255);}
  fill(255,0,255);
  ellipse(202.239, 189.339, 20, 20);
  noStroke();
  text('C1', 202.239, 219.339); 
  noStroke();
  timeButtons.show();

  
  
  cahautPoints = [];
  a1Points = [];
  b1Points = [];
  c1Points = [];
  
  for (var i = 0; i <= timeButtons.val; i++) {
     cahautPoints[i]= new GPoint(i+4,chautauquaHoppers[i]);
     a1Points[i]=new GPoint(i+4,a1Hoppers[i]);
     b1Points[i]=new GPoint(i+4,b1Hoppers[i]);
     c1Points[i]=new GPoint(i+4,c1Hoppers[i]); 
   } 

  plot.setPoints(cahautPoints);
    plot.setLineColor(color('red'));
    plot.setPointColor(color('red'));
    plot.getLayer("layer 2").setPoints(a1Points);
    plot.getLayer("layer 2").setLineColor(color('cyan'));
    plot.getLayer("layer 2").setPointColor(color('cyan'));
    plot.getLayer("layer 3").setPoints(b1Points);
    plot.getLayer("layer 3").setLineColor(color(0,255,0));
    plot.getLayer("layer 3").setPointColor(color(0,255,0));
    plot.getLayer("layer 4").setPoints(c1Points);
    plot.getLayer("layer 4").setLineColor(color('magenta'));
    plot.getLayer("layer 4").setPointColor(color('magenta'));

    
    
    // Draw it!
    plot.defaultDraw();

    stroke(0);
    strokeWeight(3);
    line(0,windowHeight/2,windowWidth,windowHeight/2);
    fill(250);
    rect(9.75*windowWidth/12,windowHeight/2,2.5*windowWidth/12,windowHeight/2);

    fill(0);
    noStroke();
    textAlign(LEFT, BASELINE);
    textStyle(BOLD);
    textSize(32);
    text("Which site had\nthe most\naccidentals\nin a season?", 10*windowWidth/12, 6.5*windowHeight/12);

    answers.show();
    if(answers.val==0){
    textSize(32);
    textStyle(BOLD);
    text('Correct', 10.5*windowWidth/12, 10.75*windowHeight/12);
    solved=true;
  }

  if(answers.val==1 || answers.val==2){
    textSize(32);
    textStyle(BOLD);
    fill(0);
    text('Incorrect', 10.5*windowWidth/12, 10.75*windowHeight/12);
    solved=false;
  }

  if (solved) {
    fill(0);
    strokeWeight(3);
    rect(10*windowWidth/12, 10.5*windowHeight/12, 1.5*windowWidth/12, 60);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(30);
    text("Continue",10*windowWidth/12+1.5*windowWidth/24, 10.5*windowHeight/12+30)
  }
    
    noStroke();
  fill(0);
  textAlign(LEFT)
  textSize(20);
  textStyle(NORMAL);
  text("Site:", 25, 2.1*windowHeight/4);
  textSize(40);
  textStyle(BOLD);
  text(currentName, 25, 2.25*windowHeight/4);
  textSize(20);
  textStyle(NORMAL);
  text("Elevation:", 325, 2.1*windowHeight/4);
 textSize(40);
  textStyle(BOLD);
  text(currentElevation, 325, 2.25*windowHeight/4);
  textSize(20);
  textStyle(NORMAL);
  text("Grasshoppers:", 525, 2.1*windowHeight/4);
  textSize(40);
  textStyle(BOLD);
  text(currentHoppers, 525, 2.25*windowHeight/4);
}

function touchStarted(){
  if (mouseX <= 755 && mouseX >= 735 && mouseY <= 298 && mouseY >= 278) {
      mySound.setVolume(0.3);
            mySound.play();
    currentName= "Chautauqua";
    currentElevation="5,300ft";
    currentHoppers= chautauquaHoppers[timeButtons.val];
    currentSite=0;
    currentImage = ChautImg;
  }
  if (mouseX <= 562 && mouseX >= 542 && mouseY <= 255 && mouseY >= 235) {
      mySound.setVolume(0.3);
            mySound.play();
    currentName= "A1";
    currentElevation="7,200ft";
    currentHoppers= a1Hoppers[timeButtons.val];
    currentSite=1;
    currentImage=A1Img;
  }
  if (mouseX <= 453 && mouseX >= 433 && mouseY <= 234 && mouseY >= 214) {
      mySound.setVolume(0.3);
            mySound.play();
    currentName= "B1";
    currentElevation="8,500ft";
    currentHoppers= b1Hoppers[timeButtons.val];
    currentSite=2;
    currentImage=B1Img;
  }
  if (mouseX <= 212 && mouseX >= 192 && mouseY <= 199 && mouseY >= 179) {
      mySound.setVolume(0.3);
            mySound.play();
    currentName= "C1";
    currentElevation="10,000ft";
    currentHoppers= c1Hoppers[timeButtons.val];
    currentSite=3;
    currentImage=C1Img;
  }
//  if (mouseX > 25 && mouseX < 5*windowWidth/12 && mouseY > 8*windowHeight/12 && mouseY < 11*windowHeight/12 && !(mouseX > 0.75*(5*windowWidth/12-25)+25 && mouseX < 5*windowWidth/12 && mouseY > 9*windowHeight/12 && mouseY <  11*windowHeight/12 )) {
//      mySound.setVolume(0.3);
//            mySound.play();
//    if (currentSite==0) {
//        currentHoppers= chautauquaHoppers[timeButtons.val];
//
//    }
//    if (currentSite==1) {
//        currentHoppers= a1Hoppers[timeButtons.val];
//    }
//    if (currentSite==2) {
//        currentHoppers= b1Hoppers[timeButtons.val];
//    }
//    if (currentSite==3) {
//        currentHoppers= c1Hoppers[timeButtons.val];
//    }
//  }
    
    if (mouseX > timeButtons.x  && mouseX < timeButtons.x + 1*timeButtons.w/4 -20 && mouseY > timeButtons.y && mouseY < timeButtons.y+timeButtons.h/2 && mouseIsPressed){timeButtons.val=0;
    if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
    }
	  	
	  		if (mouseX > timeButtons.x + 1*timeButtons.w/4 && mouseX < timeButtons.x + 2*timeButtons.w/4 -20 && mouseY > timeButtons.y && mouseY < timeButtons.y+timeButtons.h/2 && mouseIsPressed){timeButtons.val=1;
            if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
            }
	  		
	  			if (mouseX > timeButtons.x + 2*timeButtons.w/4 && mouseX < timeButtons.x + 3*timeButtons.w/4 -20 && mouseY > timeButtons.y && mouseY < timeButtons.y+timeButtons.h/2 && mouseIsPressed){timeButtons.val=2;
                if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
                }
	  			
	  				if (mouseX > timeButtons.x + 3*timeButtons.w/4 && mouseX < timeButtons.x + 4*timeButtons.w/4 -20 && mouseY > timeButtons.y && mouseY < timeButtons.y+timeButtons.h/2 && mouseIsPressed){timeButtons.val=3;
                    if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
                    }
	  	
	  					if (mouseX > timeButtons.x  && mouseX < timeButtons.x + 1*timeButtons.w/4 -20 && mouseY > timeButtons.y+timeButtons.h/2 +20 && mouseY < timeButtons.y+timeButtons.h && mouseIsPressed){timeButtons.val=4;
                        if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
                        }
	  	
	  						if (mouseX > timeButtons.x + 1*timeButtons.w/4 && mouseX < timeButtons.x + 2*timeButtons.w/4 -20 && mouseY > timeButtons.y+timeButtons.h/2 +20 && mouseY < timeButtons.y+timeButtons.h && mouseIsPressed){timeButtons.val=5;
                            if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
                            }
	  						
	  							if (mouseX > timeButtons.x + 2*timeButtons.w/4 && mouseX < timeButtons.x + 3*timeButtons.w/4 -20 && mouseY > timeButtons.y+timeButtons.h/2 +20 && mouseY < timeButtons.y+timeButtons.h && mouseIsPressed){timeButtons.val=6;
                                if (currentSite==0) {
        currentHoppers= chautauquaHoppers[timeButtons.val];

    }
    if (currentSite==1) {
        currentHoppers= a1Hoppers[timeButtons.val];
    }
    if (currentSite==2) {
        currentHoppers= b1Hoppers[timeButtons.val];
    }
    if (currentSite==3) {
        currentHoppers= c1Hoppers[timeButtons.val];
    }
    mySound.setVolume(0.3);
            mySound.play();
                                }

  if (mouseX > 10*windowWidth/12 && mouseX < 10*windowWidth/12+1.5*windowWidth/12 && mouseY > 10.5*windowHeight/12 && mouseY < 10.5*windowHeight/12 +60 && solved) {
      mySound.setVolume(0.3);
            mySound.play(); 
      pause(150);
      window.location.href = "distribution-conclusion.html";
            }
    if(mouseX > 10*windowWidth/12 && mouseX < 11.25*windowWidth/12 && mouseY > 8.25*windowHeight/12 && mouseY < (200 + 8*windowHeight/12) ){
        mySound.setVolume(0.3);
            mySound.play();
    }
    console.log(timeButtons.val);
    return false;
}

//function updateValue(){
//    text("Grasshoppers:", 525, 2.1*windowHeight/4);
//  textSize(40);
//  textStyle(BOLD);
//  text(currentHoppers, 525, 2.25*windowHeight/4);
////    console.log(currentHoppers);
//    console.log(timeButtons.val)
//}
