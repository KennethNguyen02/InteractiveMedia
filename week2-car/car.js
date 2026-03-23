let carX = 700;
let carY = 500;
let carWidth = 275;
let carHeight = 75;
let wheelSize = 60;
let bgValue = 1;
let roadSize = 275

// light-blu;  (144,213,255);



function dayNight(x,y,size,angle){
	let bgColor = color(144 + bgValue, 213 + bgValue ,255 + bgValue);
	background(bgColor);
	push();
		rotate(angle);
		sun(x,y,size);
		moon(-x,-y,size,bgColor);
	pop();

	if(angle < PI){bgValue -= 1}
	else{bgValue += 1};
}



function sun(x,y,size){
	push();
		noStroke();
		fill("yellow");
		circle(x,y,size);
	pop();
			fill("orange");
			circle(x,y,size*0.75);
				fill("red");
				circle(x,y,size*0.5);

}

function moon(x,y,size,bgColor){
	push();
		noStroke();
		fill("yellow")
		circle(x,y,size)
			fill(bgColor) //background color, to make moon
			circle(x-size/2, y, size)
	pop();
}

function bushTree(x,y,w,h){	
	fill(114,92,66);
	rect(x,y,w,h);
	push();
		noStroke();
		fill("green");
		ellipse(x, y, 90,40);
		ellipse(x + w, y, 90, 40);
		ellipse(x+w/2, y-20, 90,40); //top bush
	pop();
}

function triTree(x,y,w,h){
	fill(165,99,60);
	rect(x,y,w,h);


		fill("green");
		triangle(x+w/2,y-100, x+w/2 - 75, y, x + w/2 + 75 , y) 

}

function bush(x,y,w,h){
	push();
		noStroke();
		fill(6,64,43);
		ellipse(x, y, 90,40);
		ellipse(x + w, y, 90, 40);
		ellipse(x+w/2, y-20, 90,40); //top bush
	pop();
}

 
function forest(h,velocity){
	fill(65,152,10);
	rect(0,height-roadSize-h,windowWidth, h);
		//trees
	
	triTree((velocity   )% windowWidth, (height-roadSize-h)  - 40, 50, 70 );
	bushTree((velocity + 150)% windowWidth, (height-roadSize-h)  - 20, 70, 100 );

	
	triTree((velocity + 350)% windowWidth, (height-roadSize-h) - 10, 50, 70 );
	bushTree((velocity  + 600)% windowWidth, (height-roadSize-h) , 70, 100 );
	
	bush((velocity  + 900)% windowWidth, (height-roadSize-h) + 100 , 70, 100);

	
	triTree((velocity  + 750)% windowWidth, (height-roadSize-h) - 20, 50, 70 );
	bushTree((velocity  + 1120)% windowWidth, (height-roadSize-h)   - 5, 70, 100 );
		
}



function ferrari(x,y,w,h,color, wheelSize){
	
	fill(color);
	rect(x,y,w,h,5);

	//car border
	fill("silver")
	rect(x+75, y+h, w-150, h/8)

	wheel(x+50,y+h,w,h,wheelSize) //backwheel
	wheel(x+w-50,y+h,w,h,wheelSize) //frontwheel


	//window shield
	push();
		strokeWeight(8);
		stroke(173, 216, 230);
		line(x + w/5 , y, x+w/3, y - (h/2));
	pop();
	
	//exhaust pipe
	rect(x+w-20,y+h,30,h/8)
	// SMOKEEEE


	//taillight	
	fill("yellow")
	rect(x,y + h/3 ,15,30)

	//spoiler
	push();
		strokeWeight(5);
		stroke("red");
		line(x + w , y, x + w + (h/4), y - (h/8));
	pop();
}


function wheel(x,y,w,h,d){ 
		//wheel
	fill("black");
	circle(x,y,d);
		//inner circle 
		fill("silver");
		circle(x,y,d/2);
	
		//sticks inside wheel rotating
		push();
			translate(x,y);
			rotate(-frameCount * 2);
			fill("black");
			rect(-d/2, 0, d, h / 60); //horizontal line
			rect(0, -d/2, h/60, d); //vertical line
		pop();			
}



function road(h,velocity){
	fill("grey");
	rect(0,height-h, windowWidth, h);

	//yellow line gen
	for (i = 0; i < 6; i++){
		fill(247, 181,0);
		rect((velocity + i * 250) % windowWidth, height- 100, 50, 10)	
	}
		
	
}



function setup() {
	createCanvas(windowWidth, windowHeight)
}



function draw() {
	let angle = frameCount * 0.01 % TWO_PI 
	let velocity = frameCount * 5
	dayNight(100,100,100,angle);
	forest(125, velocity);
	road(roadSize,velocity);
	ferrari(carX,carY,275,75, "red" ,wheelSize);
	
}



