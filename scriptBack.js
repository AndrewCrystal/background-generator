var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(css);
// console.log(color1);
// console.log(color2);
//console.log(body);

//body.style.background = "red";

function setGradient() {
	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	//adds text to page to show above line - it sets the h3 content because that is the css var value
	css.textContent = body.style.background + ";";
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//start with values used in css file
//color1.value = "#ff0000";
//color2.value = "#ffff00";

//change to use randomly generated numbers
color1.value = getRandomColor();
color2.value = getRandomColor();

//note do not need () on callback function below as automatically called by input event
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



setGradient();

// color2.addEventListener("input", function() {
// 	body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
// })