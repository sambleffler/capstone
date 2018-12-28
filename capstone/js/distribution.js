function dates(x, y, w, h){
	this.opt = ["April", "May", "June", "July", "August", "September", "October"]
	this.val=0;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;


	dates.prototype.show= function() {
	  	  
	  for (var i = 0; i < 7; i++) {
	  	
	  	if (this.val==i) {
	  		fill('#009145');
	  		noStroke();
	  	}
	  		else{
	  			fill(250);
	  			strokeWeight(3);
	  			stroke('#009145');

	  		}

	  	if (i < 4) {
	  		rect(this.x + i*this.w/4,this.y,this.w/4-20,this.h/2);
	  	}
	  	else{
	  		rect(this.x + (i-4)*this.w/4,this.y + this.h/2+20,this.w/4-20,this.h/2);
	  	}

	  	
	  	noStroke();
	  	fill(0);
	  	textSize(24);
	  	if (this.val==i) {fill(255);}
	  	else{fill(0);}
	  	textAlign(CENTER, CENTER);
    	textStyle(BOLD);
	  	
	  	if (i < 4) {
	  		text(this.opt[i], this.x + (2*i+1)*this.w/8-10, this.y +this.h/4);
	  	}
	  	else{
	  		text(this.opt[i], this.x + (2*(i-4)+1)*this.w/8-10, this.y +3*this.h/4 +20);
	  	}
	  	
	  }

//	  if (mouseY > this.y && mouseY < this.y+this.h && mouseX > this.x && mouseX < this.x + this.w) 
//	  {
//	  	if (mouseX > this.x  && mouseX < this.x + 1*this.w/4 -20 && mouseY > this.y && mouseY < this.y+this.h/2 && mouseIsPressed){this.val=0;}
//	  	
//	  		if (mouseX > this.x + 1*this.w/4 && mouseX < this.x + 2*this.w/4 -20 && mouseY > this.y && mouseY < this.y+this.h/2 && mouseIsPressed){this.val=1;}
//	  		
//	  			if (mouseX > this.x + 2*this.w/4 && mouseX < this.x + 3*this.w/4 -20 && mouseY > this.y && mouseY < this.y+this.h/2 && mouseIsPressed){this.val=2;}
//	  			
//	  				if (mouseX > this.x + 3*this.w/4 && mouseX < this.x + 4*this.w/4 -20 && mouseY > this.y && mouseY < this.y+this.h/2 && mouseIsPressed){this.val=3;}
//	  	
//	  					if (mouseX > this.x  && mouseX < this.x + 1*this.w/4 -20 && mouseY > this.y+this.h/2 +20 && mouseY < this.y+this.h && mouseIsPressed){this.val=4;}
//	  	
//	  						if (mouseX > this.x + 1*this.w/4 && mouseX < this.x + 2*this.w/4 -20 && mouseY > this.y+this.h/2 +20 && mouseY < this.y+this.h && mouseIsPressed){this.val=5;}
//	  						
//	  							if (mouseX > this.x + 2*this.w/4 && mouseX < this.x + 3*this.w/4 -20 && mouseY > this.y+this.h/2 +20 && mouseY < this.y+this.h && mouseIsPressed){this.val=6;}
	  					
//	  }
	  }
	}

	function answers(x, y, w, h){
	this.opt = ["Chautauqua", "A1", "C1"]
	this.val=4;
	this.w=w;
	this.h=h;
	this.x=x;
	this.y=y;


	answers.prototype.show= function() {
	  	  
	  for (var i = 0; i < 3; i++) {
	  	
	  	if (this.val==i) {fill(0,0,255);}
	  		else{fill(250);}
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