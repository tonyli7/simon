var size = 500;

var screen = document.getElementById("vimage");



var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");

var red_sound = document.createElement("AUDIO");
var green_sound = document.createElement("AUDIO");
var blue_sound = document.createElement("AUDIO");
var yellow_sound = document.createElement("AUDIO");

red_sound.src="sound/E4.wav";
//red_sound.currentTime=.5;
green_sound.src="sound/G5.wav";
blue_sound.src="sound/G4.wav";
yellow_sound.src="sound/C4.wav";



red.addEventListener("click",function (e){
    red_sound.play()
});

green.addEventListener("click", function(e){
    green_sound.play()
});

blue.addEventListener("click",function(e){
    blue_sound.play()
});
yellow.addEventListener("click",function(e){
    yellow_sound.play()
});

console.log(red_sound)

