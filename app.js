var difficulty = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#messageText");
var btnReset = document.querySelector("#btnReset");
var btnModes = document.querySelectorAll(".btnMode");

initGame();

function initGame() {
    setupSquares();
    setupModes();
    resetGame();
    btnReset.addEventListener("click", resetGame);
}

function setupSquares() {
    for (var i=0; i<squares.length; i++) {
        squares[i].addEventListener("click", function() {
            if (this.style.backgroundColor === pickedColor) {
                //display message
                message.textContent = "Correct!"
                //change all square colors to pickedColor
                changeAllColors(pickedColor);
                //change h1 background color to pickedcolor
                document.querySelector("h1").style.backgroundColor = pickedColor;
                //change btn name to play again
                btnReset.textContent = "Play Again?";
            } else {
                //display message
                message.textContent = "Try again";
                //change square color to background
                this.style.backgroundColor = "#232323";
            }
        });
    }
}

function resetGame() {
    //re-generate colors array
    colors = generateColors(difficulty);
    //update square colors
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }
    //update testRGB
    pickedColor = pickColor(colors);
    document.querySelector("#rgbText").textContent = pickedColor;
    //remove h1 color
    document.querySelector("h1").style.backgroundColor = "steelblue";
    //hide message
    message.textContent = "";
    //change btn name to New colors
    btnReset.textContent = "New colors";
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

function setupModes() {
    // new difficulty logic
    for (var i=0; i<btnModes.length; i++) {
        btnModes[i].addEventListener("click", function() {
            for (var j=0; j<btnModes.length; j++) {
                btnModes[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "Easy" ? difficulty = 3 : difficulty = 6;
            resetGame();
        });
    }
}

// legacy code for difficulty logic
//
// var btnEasy = document.querySelector("#btnEasy");
// var btnHard = document.querySelector("#btnHard");
//
// btnEasy.addEventListener("click", function(){
//     btnEasy.classList.add("selected");
//     btnHard.classList.remove("selected");
//     difficulty = 3;
//     resetGame();
// });
//
// btnHard.addEventListener("click", function(){
//     btnHard.classList.add("selected");
//     btnEasy.classList.remove("selected");
//     difficulty = 6;
//     resetGame();
// });