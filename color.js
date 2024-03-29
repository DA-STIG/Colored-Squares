var numSquares =6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1 = document.querySelector("h1");
var h3 = document.querySelector("h3");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display= "none";
	}
}
});



hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display= "block";
	}
});

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of the squares on the page
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else {
			squares[i].style.display="none";		
		}
	}
	h1.style.backgroundColor = "steelblue";

})

colorDisplay.textContent= pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor= colors[i];

	//add click listener to squares
	squares[i].addEventListener("click", function() {
		//get color of clicked square
		clickedColor=this.style.backgroundColor;


		//compare color of cliked square with rgb color number
		if (clickedColor === pickedColor) {
			messageDisplay.textContent="Correct!!";
			resetButton.textContent = "Play again?";
			//coloring all squares same color
			changeColors(clickedColor);
			h1.style.backgroundColor=(clickedColor);
			h3.style.backgroundColor=(clickedColor);

		} else {
				//clicking on wrong square makes it black
				this.style.backgroundColor= "#232323";
				messageDisplay.textContent="Try again";

		}


	});
}


function changeColors(color){
	//loop through all squares and change in same color picked
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor= color;

}
}


function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
//random number from the colors
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//repeat num times  
	for (var i = 0; i < num; i++) {
	// add random colors to array
	arr.push(randomColor());
	}
	//return that array
	return arr;

}
function randomColor(){
	//pick a red,green,blue from 0-255 
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	// "rgb(r,g,b)"
	return "rgb("+ r+ ", "+g+", "+b+")";
}
