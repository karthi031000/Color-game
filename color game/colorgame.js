var numSquares = 6;
var colors = []
var resul;
var squares = document.getElementsByClassName("square");
var message = document.getElementById("message");
var pick = document.getElementById("picked");
var h1 = document.querySelector("h1");
var reset = document.getElementById("reset");
var mode = document.getElementsByClassName("mode");

init();
function init() {
  modeSetup();
  squareSetup();
  rese();
}

function modeSetup(){
  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener("click", function () {
      mode[0].classList.remove("selected");
      mode[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      }
      else {
        numSquares = 6;
      }
      rese();
    });
  }
}
function squareSetup() {
  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", function () {
      var color = this.style.backgroundColor;
      //console.log(colors,result);
      if (color === resul) {
        message.textContent = "Correct";
        changeColor(color);
        h1.style.backgroundColor = resul;
        reset.textContent = "Play Again?"
      }
      else {
        this.style.backgroundColor = "#232323"
        message.textContent = "Try again";
      }
    });
  }
}
function rese() {
  colors = generateRandomColor(numSquares);
  resul = result();
  pick.textContent = resul;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue"
  reset.textContent = "New game"
  message.textContent = ""
}
reset.addEventListener("click", function () {
  rese()
});

function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function result() {
  var res = Math.floor(Math.random() * colors.length);
  return colors[res];
}

function generateRandomColor(num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(randomColor())
  }

  return arr
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}