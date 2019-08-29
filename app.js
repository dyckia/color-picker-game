var difficulty = 6;
var colors = generateColors(difficulty);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(colors);
var message = document.querySelector("#messageText");

//update textRGB
document.querySelector("#rgbText").textContent = pickedColor;

for (var i=0; i<squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        if (this.style.backgroundColor === pickedColor) {
            //display message
            message.textContent = "Correct!"
            //change all square colors to pickedColor
            changeAllColors(pickedColor);
            //change h1 background color to pickedcolor
            document.querySelector("h1").style.backgroundColor = pickedColor;
        } else {
            //display message
            message.textContent = "Try again";
            //change square color to background
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeAllColors(color) {
    for (var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function generateColors(num) {
    // generate an array of num rgb values
    var arr = [];
    for (var i=0; i<num; i++) {
        arr.push("rgb(" + randomInt(255) + ", " + randomInt(255) + ", " + randomInt(255) + ")");
    }
    return arr;
}

function randomInt(int) {
    //return a random int between 0 to int (inclusive)
    return Math.floor(Math.random() * (int + 1));
}

function pickColor(arr) {
    return arr[randomInt(arr.length-1)]; 
}