var t1=0;
var gen, tempSlider, elev, jump, answers;
var myWidth;
var myHeight;
var plains = [];
var foothills =[];
var montane = [];
var subalpine = [];
var plot;
var fill1 = "#FFFFFF";
var solved = false;

function setup() {
     loadFont('work_sans/WorkSans-Regular.ttf');
    soundFormats('mp3', 'ogg');
  mySound = loadSound('click.mp3');
  myWidth= windowWidth;
  myHeight= windowHeight-10;
  createCanvas(myWidth, myHeight);
 	background(255);
  gen = new wHopper(5,myHeight/2 -5);
  // tempSlider = createSlider(10, 35, 25);
  // tempSlider.position(5*myWidth/12, 7*myHeight/12);
  tempSlider = new thermo(3.5*myWidth/12,11*myHeight/12,0.75*myWidth/12, 4.8*myHeight/12);
  elev = new elevations("10,000ft", "8,500ft", "7,200ft","5,300ft", 0.75*myWidth/12,  2.25*myHeight/4, 2*myWidth/12, 2.5*myHeight/6);
  jump = new jumpButton(9*myWidth/12, myHeight/4 +20, myWidth/6, 110);
  // check = new checkButton(5*myWidth/12, 11*myHeight/12, 150, 40);
  answers = new answers(10*myWidth/12,  8*myHeight/12, 1.5*myWidth/12, 200);
    plot = new GPlot(this);
    plot.setPos(5.25*myWidth/12, 2.2*myHeight/4);
    plot.setDim(myWidth/3, 0.75*myHeight/2);
    plot.setMar(0,0,0,0);
    plot.setXLim(50, 95);
    plot.setYLim(0, 25);
    plot.getXAxis().setAxisLabelText("Temperature (F)");
    plot.getYAxis().setAxisLabelText("Distance (in)");
    plot.setTitleText("Performance");
    
    plot.addLayer("layer 2", foothills);
    plot.addLayer("layer 3", montane);
    
    plot.addLayer("layer 4", subalpine);
    plot.getLayer("layer 4").setLineColor(color('#BBAA90'));
        textFont("Work Sans");

}



function draw() {
  clear();
  background(250);
  
  //   switch(elev.val){
		// 	case 0:
		// 		fill1 = "#BFC788";
		// 		break;
		// 	case 1:
		// 		fill1 = "#D9DEBB";
		// 		break;
		// 	case 2:
		// 		fill1 = "#DCD3AE";
		// 		break;
		// 	case 3:
		// 		fill1 = "#BBAA90";
		// 		break;
		// }
  stroke(0);
    strokeWeight(3);
    fill(250);
    rect(0,0,myWidth,myHeight/2);
    fill(250);
    rect(9.5*myWidth/12,myHeight/2,2.5*myWidth/12,1.1*myHeight/2);
  
  for (var i = 0; i < 36; i++) {
    strokeWeight(0.8);
    line(i*myWidth/36, myHeight/2, i*myWidth/36, myHeight/2-10);
  }
  fill(0);
    noStroke();
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER,CENTER);
  text("Elevation", 1.75*myWidth/12,myHeight/2+30)
  strokeWeight(3);
  textSize(15);


  elev.show();
  var temp = tempSlider.val;
  tempSlider.show();
  textAlign(LEFT, BASELINE);
  textStyle(BOLD);
  textSize(20);
  fill(0);
  text('Temperature: ', 3.8*myWidth/12, 7*myHeight/12 +10);
  textSize(40);
  text(int(temp*1.8+32)+'\xB0F',3.8*myWidth/12,7*myHeight/12 +50);

  textSize(32);
  text("What type of\ngrasshopper\nis this?", 10*myWidth/12, 6.5*myHeight/12);
  textSize(150);
  textStyle(BOLD);
  text(int(gen.xPos/width*100*0.39) + "in", 9*myWidth/12, myHeight/4);
  gen.show(t1,temp, elev.val);

    jump.show();

    // check.show();
    answers.show();

  if(gen.active){
    t1+= 0.5;
    if (t1>20) {
        gen.active=false;
    }  
  }


  textSize(16);
  fill(0);
  if(answers.val==1){
    textSize(32);
    textStyle(BOLD);
    text('Correct', 10.5*myWidth/12, 10.75*myHeight/12);
    solved=true;
  }

  if(answers.val==0 || answers.val==2){
    textSize(32);
    textStyle(BOLD);
    text('Incorrect', 10.5*myWidth/12, 10.75*myHeight/12);
    solved=false;
  }

  if (solved) {
    fill(0);
    strokeWeight(3);
    rect(10*myWidth/12, 10.5*myHeight/12, 1.5*myWidth/12, 60);
    fill(255);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    noStroke();
    textSize(30);
    text("Continue",10*myWidth/12+1.5*myWidth/24, 10.5*myHeight/12+30)
  }

    // console.log(t1);

    plot.setPoints(plains);
    plot.setLineColor(color('#009145'));
    plot.setPointColor(color('#009145'));
    plot.getLayer("layer 2").setPoints(foothills);
    plot.getLayer("layer 2").setLineColor(color('#F7D926'));
    plot.getLayer("layer 2").setPointColor(color('#F7D926'));
    plot.getLayer("layer 3").setPoints(montane);
    plot.getLayer("layer 3").setLineColor(color('#F6921E'));
    plot.getLayer("layer 3").setPointColor(color('#F6921E'));
    plot.getLayer("layer 4").setPoints(subalpine);
    plot.getLayer("layer 4").setLineColor(color('#C0272D'));
    plot.getLayer("layer 4").setPointColor(color('#C0272D'));

    
    
    // Draw it!
    plot.defaultDraw();
}



function touchStarted(){
    if (mouseY > jump.y && mouseY < jump.y+jump.h && mouseX > jump.x && mouseX < jump.x + jump.w && mouseIsPressed){
            t1=0;
            gen.active=true;
            gen.vxPrev= Math.cos(PI/4)*gen.vo;
            gen.vyPrev= Math.sin(PI/4)*gen.vo;
            mySound.setVolume(0.3);
            mySound.play();
                
            
            if (elev.val == 3) {
              plains[plains.length] = new GPoint(int(tempSlider.val*1.8+32), int(gen.dist/width*100*0.39));
                plains.sort(function(obj1, obj2){
                  return obj1.x - obj2.x;
                });
            }
              if (elev.val == 2) {
              foothills[foothills.length] = new GPoint(int(tempSlider.val*1.8+32), int(gen.dist/width*100*0.39));
                foothills.sort(function(obj1, obj2){
                  return obj1.x - obj2.x;
                });
            }
            if (elev.val == 1) {
              montane[montane.length] = new GPoint(int(tempSlider.val*1.8+32), int(gen.dist/width*100*0.39));
                montane.sort(function(obj1, obj2){
                  return obj1.x - obj2.x;
                });
            }
            if (elev.val == 0) {
              subalpine[subalpine.length] = new GPoint(int(tempSlider.val*1.8+32), int(gen.dist/width*100*0.39));
                subalpine.sort(function(obj1, obj2){
                  return obj1.x - obj2.x;
                });
            }  
               

            
        }


            if (mouseX > 10*myWidth/12 && mouseX < 10*myWidth/12+1.5*myWidth/12 && mouseY > 10.5*myHeight/12 && mouseY < 10.5*myHeight/12 +60 && solved) {
              mySound.setVolume(0.3);
            mySound.play();
                pause(150);
                window.location.href = "perfromance-conclusion.html";
               
            }
    
    if(mouseX > 0.75*myWidth/12 && mouseX < 2.75*myWidth/12 && mouseY > 2.25*myHeight/4 && mouseY < (2.5*myHeight/6 + 2.25*myHeight/4) ){
        mySound.setVolume(0.3);
            mySound.play();
    }
    
    if(mouseX > 10*myWidth/12 && mouseX < 11.25*myWidth/12 && mouseY > 8*myHeight/12 && mouseY < (200 + 8*myHeight/12) ){
        mySound.setVolume(0.3);
            mySound.play();
    }
    return false;

}


