var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradiant");
var h3 = document.querySelector("h3");

function changeColor(){
	body.style.background ="linear-gradient(to right, "+color1.value+", "+color2.value+" )";
	h3.textContent = color1.value+"    "+color2.value;
}

color1.addEventListener("input",changeColor)
color2.addEventListener("input",changeColor)