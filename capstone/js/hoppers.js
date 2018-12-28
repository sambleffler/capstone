var genPic, warmPic, coolPic;

function preload() {
  genPic = loadImage('img/hopper.png');
   hopPic = loadImage('img/hopper_jump.png'); 
  // warmPic = loadImage('assets/warm.png');
  // coolPic = loadImage('../cool.png');
    
}

function gHopper(x,y){
	this.xPoso=x;
	this.yPoso=y;
	this.xPos=x;
	this.yPos=y;
	this.xPrev=x;
	this.yPrev=y;
    this.active=true;
    this.vo=0;
    this.vx=0;
    this.vy=0;
    this.vxPrev=0;
    this.vyPrev=0;
    this.dist;



	gHopper.prototype.show=function(time,temp,elev){
		
		
		switch(elev){
			case 0:
				this.dist = -6.939e-4 * Math.pow(temp,2) + 0.04595 * temp - 0.1931;
				break;
			case 1:
				this.dist = -0.0010 * Math.pow(temp,2) + 0.0583 * temp - 0.2295;
				break;
			case 2:
				this.dist = -0.0008* Math.pow(temp,2)+0.0495 * temp - 0.2145;
				break;
			case 3:
				this.dist = -0.0006* Math.pow(temp,2)+0.0359* temp-0.0746;
				break;
		}

		if (this.dist<=0) {
			this.dist=0.01;
		}

		this.dist= this.dist * width;
		if(this.active){
            this.vo = Math.sqrt((this.dist*9.81)/Math.sin(PI/2));
            this.vx= Math.cos(PI/4)*this.vo;
            this.vy= Math.sin(PI/4)*this.vo;

        }
		if (this.yPos < this.yPoso) {
					this.xPos =this.vx * time + this.xPoso;
					
		}
		this.yPos = this.yPoso-this.vy*time + 4.9 * Math.pow(time,2);
		//this.yPrev = this.yPoso-vy*tPrev + 4.9 * Math.pow(tPrev,2);
		if (this.yPos > this.yPoso) {
			this.yPos=this.yPoso;
		}

		noStroke();
		image(genPic, this.xPos-30, this.yPos-45);
		stroke(0,255,0);
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vx * tPrev + this.xPoso;
			var y1= this.yPoso-this.vy*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vx * i + this.xPoso;
			var y2= this.yPoso-this.vy*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}
		stroke('rgba(0,255,0,0.2)');
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vxPrev * tPrev + this.xPoso;
			var y1= this.yPoso-this.vyPrev*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vxPrev * i + this.xPoso;
			var y2= this.yPoso-this.vyPrev*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}

        
		
	}

}

class wHopper extends gHopper{
	show(time,temp,elev){
		

		switch(elev){
			case 3:
				this.dist = 7.071e-4 * Math.pow(temp,2) - 0.006 * temp - 0.005;
				break;
			case 2:
				this.dist = -2.316e-4 * Math.pow(temp,2) + 0.0257  * temp - 0.2573;
				break;
			case 1:
				this.dist = -0.001* Math.pow(temp,2)+0.056 * temp - 0.453;
				break;
			case 0:
				this.dist = -7.533e-4* Math.pow(temp,2)+0.0473* temp-0.3956;
				break;
		}

		if (this.dist<=0) {
			this.dist=0.01;
		}

		this.dist= this.dist * width;
		
		if(this.active){
            this.vo = Math.sqrt((this.dist*9.81)/Math.sin(PI/2));
            this.vx= Math.cos(PI/4)*this.vo;
            this.vy= Math.sin(PI/4)*this.vo;
        }
		if (this.yPos < this.yPoso) {
					this.xPos =this.vx * time + this.xPoso;
					//this.xPrev=vx * tPrev + this.xPoso;
		}
		this.yPos = this.yPoso-this.vy*time + 4.9 * Math.pow(time,2);
		//this.yPrev = this.yPoso-vy*tPrev + 4.9 * Math.pow(tPrev,2);
		if (this.yPos > this.yPoso) {
			this.yPos=this.yPoso;
		}

		noStroke();
		fill(0,255,0);
		// console.log(this.xPos +", "+ this.yPos);
		//ellipse(this.xPos,this.yPos, 10);
        
		
		//text(int(this.xPos-5) +'mm', this.xPoso + 800, this.yPoso);
		stroke(0, 255, 0);
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vx * tPrev + this.xPoso;
			var y1= this.yPoso-this.vy*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vx * i + this.xPoso;
			var y2= this.yPoso-this.vy*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}
		stroke('rgba(0,255,0,0.2)');
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vxPrev * tPrev + this.xPoso;
			var y1= this.yPoso-this.vyPrev*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vxPrev * i + this.xPoso;
			var y2= this.yPoso-this.vyPrev*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}
        
        imageMode(CENTER);
        
        if(this.yPos >= this.yPoso){
            image(genPic, this.xPos, this.yPos-12);
        }
        
        else{
            image(hopPic, this.xPos, this.yPos-12);
        }
	}
}

class cHopper extends gHopper{
	show(time,temp,elev){

		var dist;

		switch(elev){
			case 0:
				dist = -0.001 * Math.pow(temp,2) + 0.0507 * temp - 0.149;
				break;
			case 1:
				dist = -3.416e-4 * Math.pow(temp,2) + 0.0193  * temp + 0.1311;
				break;
			case 2:
				dist = -7.553e-4* Math.pow(temp,2)+0.0349 * temp + 0.1196;
				break;
			case 3:
				dist = -8.479e-4* Math.pow(temp,2)+0.0387* temp+0.1152;
				break;
		}

		dist= dist * width;
		
		if(this.active){
            this.vo = Math.sqrt((dist*9.81)/Math.sin(PI/2));
            this.vx= Math.cos(PI/4)*this.vo;
            this.vy= Math.sin(PI/4)*this.vo;
        }
		if (this.yPos < this.yPoso) {
					this.xPos =this.vx * time + this.xPoso;
					//this.xPrev=vx * tPrev + this.xPoso;
		}
		this.yPos = this.yPoso-this.vy*time + 4.9 * Math.pow(time,2);
		//this.yPrev = this.yPoso-vy*tPrev + 4.9 * Math.pow(tPrev,2);
		if (this.yPos > this.yPoso) {
			this.yPos=this.yPoso;
		}

		noStroke();
		fill(0,255,0);
		// console.log(this.xPos +", "+ this.yPos);
		//ellipse(this.xPos,this.yPos, 10);
		image(genPic, this.xPos-30, this.yPos-45);
		//text(int(this.xPos-5) +'mm', this.xPoso + 800, this.yPoso);
		stroke(0,255,0);
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vx * tPrev + this.xPoso;
			var y1= this.yPoso-this.vy*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vx * i + this.xPoso;
			var y2= this.yPoso-this.vy*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}
		stroke('rgba(0,255,0,0.2)');
		for (var i = 0; i <= time; i+=0.5) {
			var tPrev=i-0.5;
			if (tPrev<0) {tPrev=0;}
			var x1 = this.vxPrev * tPrev + this.xPoso;
			var y1= this.yPoso-this.vyPrev*tPrev + 4.9 * Math.pow(tPrev,2);
			var x2= this.vxPrev * i + this.xPoso;
			var y2= this.yPoso-this.vyPrev*i + 4.9 * Math.pow(i,2);
			if(y2 < this.yPoso){line(x1, y1, x2, y2);}
			
		}
	}
}

function elevations(opt1, opt2, opt3, opt4, x, y, w, h){
	this.opt = [opt1, opt2, opt3,opt4]
	this.val=1;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;


	elevations.prototype.show= function() {
	  var colors = ['#C0272D','#F6921E', '#F7D926', '#009145'];
	  for (var i = 0; i < 4; i++) {
	  	
	  	if (this.val==i) 
	  		{
	  			fill(colors[i]);
	  			noStroke();
	  		}
	  		else{
	  			fill(255);
	  			stroke(colors[i]);
	  		}

	  	rect(this.x,this.y + i*this.h/4,this.w,this.h/4-20);

	  	fill(0);
	  	noStroke();
	  	textSize(40);
	  	textStyle(BOLD);
	  	textAlign(CENTER, CENTER)
	  	if (this.val==i) {fill(255);}
	  	else{fill(0);}
	  	text(this.opt[i], this.x + this.w/2, this.y +(i*2+1)*this.h/8-10);
	  	
	  }

	  if (mouseX > this.x && mouseX < this.x+this.w && mouseIsPressed) 
	  {
	  	if (mouseY > this.y && mouseY < this.y + this.h/4-5){this.val=0;}
	  	else{
	  		if (mouseY > this.y + this.h/4 && mouseY < this.y + this.h/4 + this.h/4-5){this.val=1;}
	  		else{
	  			if (mouseY > this.y + 2*this.h/4 && mouseY < this.y + 2*this.h/4 + this.h/4-5){this.val=2;}
	  			else{
	  				if (mouseY > this.y + 3*this.h/4 && mouseY < this.y + 3*this.h/4 + this.h/4-5){this.val=3;}
	  			}
	  		}
	  	}
	  }
	  }
	}

function answers(x, y, w, h){
	this.opt = ["Generalist", "Warm Adapted", "Cool Adapted"]
	this.val=4;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;


	answers.prototype.show= function() {
	  	  
	  for (var i = 0; i < 3; i++) {
	  	
	  	if (this.val==i) {fill(0,0,255);}
	  		else{fill(255);}
	  	stroke(0);
	  	strokeWeight(3);
	  	rect(this.x,this.y+ i*this.h/3,this.w,this.h/3-20);

	  	fill(0);
	  	noStroke();
	  	textSize(28);
	  	textStyle(NORMAL);
	  	textAlign(CENTER, CENTER);
	  	if (this.val==i) {fill(255);}
	  	else{
	  		fill(0);}
	  		text(this.opt[i], this.x + this.w/2, this.y + (i*2+1)*this.h/6-10);
	  
	  	
	  }

	  if (mouseX > this.x && mouseX < this.x+this.w && mouseIsPressed) 
	  {
	  	if (mouseY > this.y && mouseY < this.y + this.h/3-5){this.val=0;}
	  	else{
	  		if (mouseY > this.y + this.h/3 && mouseY < this.y + this.h/3 + this.h/3-5){this.val=1;}
	  		else{
	  			if (mouseY > this.y + 2*this.h/3 && mouseY < this.y + 2*this.h/3 + this.h/3-5){this.val=2;}
	  		}
	  	}
	  }
	  }
	}

function jumpButton(x,y,w,h){
    this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
    
    jumpButton.prototype.show= function(){
        fill("#009145");
        noStroke();
        rect(this.x,this.y,this.w,this.h);
        fill(255);
	  	textSize(60);
	  	textStyle(BOLD);
	  	textAlign(CENTER, CENTER);
        text("JUMP", this.x + this.w/2, this.y +this.h/2);
    }
}

function checkButton(x,y,w,h){
    this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;
    
    checkButton.prototype.show= function(){
        fill(255);
        noStroke();
        rect(this.x,this.y,this.w,this.h);
        fill(0);
	  	textSize(14);
        text("Check Answers", this.x + this.w/24, this.y +this.h/2);
    }
}

function thermo(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.val=25;
	this.max=35;
	this.min=10;

	thermo.prototype.show=function(){
		var percent = this.val/this.max;
		fill(230);
		ellipse(this.x,this.y,this.w);
		rect(this.x-this.w*0.3, this.y-this.h, this.w*0.6, this.h);
		fill('#C0272D');
		ellipse(this.x,this.y,this.w-30);
		rect(this.x-this.w*0.2, this.y-this.h*percent, this.w*0.4, this.h*percent);

		if(mouseX > this.x-this.w*0.3 && mouseX < this.x-this.w*0.3+this.w*0.6 && mouseY >this.y-this.h*0.95 && mouseY < this.y-this.h*0.95+this.h&&mouseIsPressed){
			this.val = (this.y - mouseY)/this.h * this.max ;
			if (this.val < this.min) {
				this.val = this.min;
			}
			if (this.val > this.max) {
				this.val=this.max;
			}
		}

	}
}