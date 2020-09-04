// JavaScript Document

var charakter = document.getElementById("charakter");
var block = document.getElementById("block");

var runde = 0;

function jump(){
	if(charakter.classList != "animate"){
		charakter.classList.add("animate");
		runde++;
		console.log(runde);
		document.getElementById('score').innerHTML = runde;
	};
	
	setTimeout(function(){
		charakter.classList.remove("animate");
	},500)
};


var checkDead = setInterval(function(){
	var charakterTop = parseInt(window.getComputedStyle(charakter).getPropertyValue("top"));
	var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
	
	
	
	if (blockleft <20 && blockleft >0 && charakterTop>=130){
		block.style.animation = "none";
		block.style.display = "none"
		
		
		alert("ups, you've lost\nScore:"+ runde)
		
	};
},10);