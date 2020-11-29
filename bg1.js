var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById("gradient");
var linear= document.getElementById("btnl");
var radial= document.getElementById("btnr");
 
function setGradientLinear()
{
	body.style.background = "linear-gradient(to right," + color1.value +","
	+ color2.value + ")";
    css.textContent = body.style.background + ";";
}
function setGradientRadial()
{
	body.style.background = "Radial-gradient(circle," + color1.value +","
	+ color2.value + ")";
    css.textContent = body.style.background + ";";
}



linear.addEventListener("click",setGradientLinear);
color1.addEventListener("input", setGradientLinear);
color2.addEventListener("input", setGradientLinear);



radial.addEventListener("click",setGradientRadial);



