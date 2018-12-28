function dateSlider(x,y,w,h){
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h; 
	this.val=0;
	this.min=0;
	this.max=200;


	dateSlider.prototype.show=function(){
		var percent = this.val/this.max;
		fill(230);
		rect(this.x, this.y,this.w,this.h);
		fill('#C0272D');
		rect((this.w-this.h/2) * percent + this.x, this.y, this.h*0.5, this.h);
		if(mouseX > this.x && mouseX < this.x+this.w && mouseY >this.y && mouseY < this.y+this.h&&mouseIsPressed){
			this.val = (mouseX-this.x)/(this.w-this.h/2) * this.max ;
			if (this.val < this.min) {
				this.val = this.min;
			}
			if (this.val > this.max) {
				this.val=this.max;
			}
		}

	}
}

function answers(x, y, w, h){
	this.opt = ["True", "False"]
	this.val=4;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;


	answers.prototype.show= function() {
	  	  
	  for (var i = 0; i < 2; i++) {
	  	
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
	  	}
	  }
	  }
	}