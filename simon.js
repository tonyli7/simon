//Variables for elements on screen
var red = document.getElementById("0");
var green = document.getElementById("1");
var blue = document.getElementById("2");
var yellow = document.getElementById("3");
var sectors = [red, green, blue, yellow];
var colors = ["red", "green", "blue", "yellow"];
var flashes = ["#ffaaaa", "#aaffaa", "#aaaaff", "#ffffaa"]

var button = document.getElementById("new"); //Button for starting the game
var high = document.getElementById("high"); //High score display

//Functions to flash the different sectors
var red_sound = document.createElement("AUDIO");
var green_sound = document.createElement("AUDIO");
var blue_sound = document.createElement("AUDIO");
var yellow_sound = document.createElement("AUDIO");
red_sound.src="sound/E4.wav";
green_sound.src="sound/G5.wav";
blue_sound.src="sound/G4.wav";
yellow_sound.src="sound/C4.wav";
var sounds = [red_sound, green_sound, blue_sound, yellow_sound];

function flash(color_num) {
    console.log(colors[color_num]);
    sounds[color_num].play();
    sectors[color_num].setAttribute("fill", flashes[color_num]);
    setTimeout(function() {sectors[color_num].setAttribute("fill", colors[color_num]);}, 400);
}

var playerAddition = function playerAddition() {
    var color_id = parseInt(this.id);
    player.push(color_id);
    flash(color_id);
    if (simon.length == player.length) {
	check();
    }
}
function removeEventListeners() {
    for (var i = 0; i < 4; i++) {
	sectors[i].removeEventListener("click", playerAddition);
    }
}
function addEventListeners() {
    for (var i = 0; i < 4; i++) {
	sectors[i].addEventListener("click", playerAddition);
    };
}

var play = function play(steps) {
    if (steps.length > 0) {
	flash(steps[0]);
	setTimeout(play, 500, steps.slice(1, steps.length));
    } else {
	addEventListeners();
    }
}

var simon = [];
var player = []
var setup = function() {
    removeEventListeners(); 
    simon = [];
    for (i = 0; i < 4; i++) {
	simon.push(Math.floor(Math.random() * 4));
    }
    play(simon);
    player = []; //Clears previous player data
}
function check() {
    removeEventListeners();
    for (var i = 0; i < simon.length; i++) {
	if (simon[i] != player[i]) {
	    gameover();
	    return;
	}
    }
    levelup();
}
function levelup() {
    player = []
    simon.push(Math.floor(Math.random() * 4));
    setTimeout(play, 500, simon);
}
function gameover() {
    output = "GAME OVER\n"; //Initial Message
    if (player.length > parseInt(high.innerHTML)) { //Checks for high scores 
	output += "New high score of " + player.length + "!"; //Declares new high scores
	high.innerHTML = player.length.toString(); //Sets new high scores
    } else {
	output += "You scored " + player.length + "."; //Just the score since there is no new high score
    }
    alert(output); //Alert the user of the game over status
}

button.addEventListener("click", setup);
