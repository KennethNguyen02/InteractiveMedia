let cloudX = 50;
let carX = 0;
let rainY = 0;
let buildingLine;



function sun(r,g,b){
	fill(r,g,b);
	circle(0,0,500);	
}


function heaven(){
	fill(100,120,140);	
	noStroke();	
	rect(0,0,windowWidth,windowHeight); //x,y,width,height
}

function cloud(cloudX,cloudY, sizeX, sizeY){
	fill("white");
	ellipse(cloudX,cloudY,sizeX, sizeY);
}

function skyScraper1(x,y,width,height,color){
	fill(color)
	noStroke();
	rect(x, y, width, height); //(x-top corner, y-topleft corn, x width, y pos)

	
	windowsRow = floor((height-50) / 25);
	windowsCol = floor((width -10) / 20);
	for (let row = 0; row < windowsRow; row++){ //iterate over the rows, 40 is spacing for door
		for (let col = 0; col < windowsCol; col++){
			fill(255,255,0);
			rect(x+15 + col*20 , y+10 + row*20 ,10, 15);
		}
	}
}


function skyScraper2(x,y,width,height,color){
	fill(color)
	noStroke();
	rect(x, y, width, height); //(x-top corner, y-topleft corn, x width, y pos)


	windowsRow = floor((height-50) / 30);
	windowsCol = floor((width -10) / 20);
	for (let row = 0; row < windowsRow; row++){ //iterate over the rows, 40 is spacing for door
		for (let col = 0; col < windowsCol; col++){
			fill(255,255,0);
			rect(x+15 + col*20 , y+10 + row*20 ,10, 15);
		}
	}
	
	for (let i = 0; i < windowsCol ; i++){
		fill("black")
		rect(x+12 + i*20, y + windowsCol*50, 15, height/6)
	}
}

function car(carX, carY, color) {
    fill(color);
    
    // car body
    rect(carX, carY, 100, 40);

	//car roof
	fill(color)
	rect(carX + 30, carY - 20, 40,20)
	
	//headlight
	fill("yellow")
	rect(carX + 90, carY + 20, 10, 10)
	
    // wheel
    fill("black");
    circle(carX + 20, carY + 40, 20);  // front wheel
    circle(carX + 80, carY + 40, 20);  // back wheel
    
}





function setup() {
	
	createCanvas(windowWidth, windowHeight);
	buildingLine = windowHeight - 200

	
}

function draw() {
	
	heaven();
	
	if (frameCount % 60 < 30){
		sun(255,255,100)
	} else {sun(255,200,0)}
	

	//Road
	fill("grey")
	rect(0,buildingLine, windowWidth, windowHeight)

	//Yellow line
	for (let i = 0; i < 25; i++){
		fill(255,255,100);
		rect(10 + i*70, height - 100, 30, 10)
	}

	car(frameCount * 3 % width, buildingLine + 30, "green")
	car((frameCount * 3 + 300) % width, buildingLine + 30, "pink")
	
	skyScraper1(50, buildingLine-350 , 100, 350,color("pink")); //y-coordinate has to be buildingLine - actual height of skyscraper
	skyScraper1(125, buildingLine-275, 80, 275, color("purple"))
	skyScraper1(370, buildingLine-400, 120, 400, color("red"))
	skyScraper1(550, buildingLine-600, 120, 600, color("orange"))	

	
	skyScraper2(600, buildingLine-400, 120, 400, color("green"))
	skyScraper2(350, buildingLine-250, 80, 250, color("blue"))
	skyScraper2(225, buildingLine-400, 115, 400, color("brown"))



	skyScraper1(800, buildingLine-350 , 100, 350,color("green"));
	skyScraper1(925, buildingLine-275, 80, 275, color("purple"))
	skyScraper1(1170, buildingLine-400, 120, 400, color("purple"))
	skyScraper1(1200, buildingLine-600, 120, 600, color("red"))	

	
	skyScraper2(1400, buildingLine-400, 120, 400, color("green"))
	skyScraper2(1300, buildingLine-250, 80, 250, color("brown"))
	skyScraper2(1700, buildingLine-400, 115, 400, color("orange"))

	

	cloud(cloudX, 50, 80, 40);
	cloud(cloudX - 40, 100, 60, 20);
	cloud(cloudX + 20, 150, 40, 10);
	cloud(cloudX + 400, 200, 50, 10);
	cloud(cloudX + 500, 35, 90, 40);
	cloud(cloudX + 370, 300, 70, 25);
	cloudX = frameCount % width;

	//rain
	for (let i = 0; i < 80; i++){
		fill(0,0,255,150)
		ellipse(i * 20 + noise(i) * 20, (rainY % height) * noise(i), 5, 10);
		ellipse(i * 20 + noise(i) * 20, (rainY + 10 % height) * noise(i), 5, 10);
		ellipse(i * 20 + noise(i) * 20, (rainY + 50 % height) * noise(i), 5, 10);
	   
	}
	rainY += 5
	
	
	
}







