var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
   easybtn.classList.add("selected");
   hardbtn.classList.remove("selected");
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   resetButton.textContent = "New Colors";
   for(var i=0; i<squares.length; i++)
   {
   	 if(colors[i])
   	 	squares[i].style.backgroundColor = colors[i];
   	 else
   	 	squares[i].style.display = "none";
   }
});

hardbtn.addEventListener("click", function(){
   hardbtn.classList.add("selected");
   easybtn.classList.remove("selected");
   numSquares = 6;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   resetButton.textContent = "New Colors";
   for(var i=0; i<squares.length; i++)
   {
   	 	squares[i].style.backgroundColor = colors[i];
   	 	if(i>2)
   	 		squares[i].style.display = "block";
   }
});

resetButton.addEventListener("click", function(){
    //generate random colors
    colors = generateRandomColors(numSquares);
    //pick a random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of the squares
    for(var i = 0; i < squares.length; i++)
    	squares[i].style.backgroundColor = colors[i];
    //change the content of the button from play again to new colors
    this.textContent = "New Colors";
    //to remove the mesage "Corect"
    messageDisplay.textContent = "";
    //changing the background of h1 back to normal
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++)
{
	//add initial colors to the square
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to the squares
	squares[i].addEventListener("click", function(){
       //get color of clicked square
       var clickedColor = this.style.backgroundColor;
       //compare color to pickedColor
       if(pickedColor === clickedColor){
       	  resetButton.textContent = "Play Again?";
       	  messageDisplay.textContent = "Correct";
       	  changeColors(pickedColor);
       	  h1.style.backgroundColor = pickedColor;
       }
       else{
       	  //set the color of square to be that of the background
       	  this.style.backgroundColor = "#232323";
       	  messageDisplay.textContent = "Try Again";
       }
	});
}

function changeColors(color){
	//loop through all squares 
   //so as to change color of all squares to the pickedColor
   for(var i = 0; i < colors.length; i++){
   	 squares[i].style.backgroundColor = color;
   }
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
    //create an array
    var arr = [];
    //add num random colors to the array
    for(var i = 0; i < num; i++)
    {
    	//get random color and put it in the array
        arr.push(randomColor());
    }
    //return the array of num random colors
    return arr;
}

function randomColor(){
	//pick red content from 0 to 200
	var r = Math.floor(Math.random() * 256);
    //pick blue content from 0 to 200
    var g = Math.floor(Math.random() * 256);
	//pick green content from 0 to 200
	var b = Math.floor(Math.random() * 256);
    
    //return the randomColor generated
    return "rgb(" + r + ", " + g + ", " + b + ")";
}