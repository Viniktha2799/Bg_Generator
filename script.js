var _ = require('lodash');

array = [1,2,3,4,5,6,7,8,9];
console.log('answer : ',_.without(array,6));
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