var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
 var h1 = document.querySelector("h1");

console.log(h1);
console.log(color2);

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	h1.color="purple";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);