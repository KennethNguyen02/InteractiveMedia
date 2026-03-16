let cloudPosX = 0;
let cloudPosY = 100;

let windowsRows = 9;
let windowsColumns = 4;

let pink;



function sun(){
	fill(255,255,0);
	circle(0,0,500);	
}


function heaven(){
	fill(173,216,225);	
	noStroke();	
	rect(0,0,windowWidth,200); //x,y,width,height
}

function drawCloud(x,y){
	for (let i = 0; i<4; i++){
		fill("white");
		ellipse(x+i*50,y,70, 80);
	}

}


function skyScraper(x,y,width,height,color){
	fill(color)
	noStroke();
	rect(x, y, width, height); //(x-top corner, y-topleft corn, x width, y pos)

	for (let row = 0; row < windowsRow; row++){ //iterate over the rows, 40 is spacing for door
		if (y+10 + row*20 > height-40)
			break
		for (let col = 0; col < windowsCol; col++){
			if (y+10 + col*20 > width-10)
			break
			fill(255,255,0);
			rect(x+10 + col*20 , y+10 + row*20 ,10, 15);
		}
	}
}


function setup() {
	pink = color(255,200,200);
	createCanvas(windowWidth, windowHeight);
	skyScraper(50, height-350 , 100, 350,pink); //y-coordinate has to be height - actual height of skyscraper

}


function draw() {
		
		heaven();
		sun();
		drawCloud(cloudPosX,cloudPosY);
		cloudPosX += 1;
		if (cloudPosX == windowWidth){cloudPosX=0}
}







