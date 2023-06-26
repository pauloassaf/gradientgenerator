var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("generator");
var button2 = document.getElementById("apply");


color1.addEventListener("input", gradient());
color2.addEventListener("input", gradient());
css.textContent = body.style.background;


function gradient() {
	body.style.background = "linear-gradient(to right, "+ color1.value +", "+ color2.value +")"
	css.textContent = body.style.background;
}


color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);

function generate() {
	var randomColor1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	var randomColor2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
	body.style.background = "linear-gradient(to right, "+ randomColor1 +", "+ randomColor2 +")"
	css.textContent = body.style.background;
	color1.value = randomColor1;
 	color2.value = randomColor2;
}

button.onclick = generate;