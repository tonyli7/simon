var red = document.getElementById("0");
var green = document.getElementById("1");
var blue = document.getElementById("2");
var yellow = document.getElementById("3");
var sectors = [red, green, blue, yellow];
var colors = ["red", "green", "blue", "yellow", "#98002e", "#00f113", "#2153f2", "#ffd200", "#909090", "#909090", "#909090", "#909090"];
var flashes = ["#ffaaaa", "#aaffaa", "#aaaaff", "#ffffaa", "#f8aaae", "#aaf1a3", "#a1a3f2", "#ffd2ba", "#a8a8a8", "#a8a8a8", "#a8a8a8", "#a8a8a8"]

var high = document.getElementById("high");
var score = document.getElementById("score");

var red_sound = document.createElement("AUDIO");
var green_sound = document.createElement("AUDIO");
var blue_sound = document.createElement("AUDIO");
var yellow_sound = document.createElement("AUDIO");
red_sound.src="sound/E4.mp3";
green_sound.src="sound/G5.mp3";
blue_sound.src="sound/G4.mp3";
yellow_sound.src="sound/C4.mp3";
var sounds = [red_sound, green_sound, blue_sound, yellow_sound];

function flash(color_num) {
    console.log(colors[color_num]);
    sounds[color_num].play();
    sectors[color_num].setAttribute("fill", flashes[color_num + colorshift]);
    setTimeout(function() {sectors[color_num].setAttribute("fill", colors[color_num + colorshift]);}, 400);
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
	setTimeout(play, 600, steps.slice(1, steps.length));
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
    score.innerHTML = simon.length.toString();
    simon.push(Math.floor(Math.random() * 4));
    setTimeout(play, 750, simon);
}
function gameover() {
    output = "GAME OVER\n"; //Initial Message
    var endscore = parseInt(score.innerHTML);
    if (endscore > parseInt(high.innerHTML)) { //Checks for high scores 
	output += "New high score of " + endscore.toString() + "!"; //Declares new high scores
	high.innerHTML = endscore.toString(); //Sets new high scores
    } else {
	output += "You scored " + endscore + "."; //Just the score since there is no new high score
    }
    alert(output); //Alert the user of the game over status
    demoID = setInterval(demo, 600);
}

var demoID;
var demo = function demo() {
    flash(Math.floor(Math.random() * 4));
}
var startup = function() {
    clearInterval(demoID);
    score.innerHTML = "0";
    for (var i = 0; i < 4; i++) {
	flash(i);
    }
    setTimeout(setup, 1500);
}

var rotationID;
var rotating = false;
var toRotate = function() {
    if (rotating) {
	clearInterval(rotationID);
	rotating = false;
    } else {
	rotationID = setInterval(rotate, 200);
	rotating = true;
    }
}
var rotate = function() {
    for (var i = 0; i < 4; i++) {
	var degrees = parseInt(sectors[i].getAttribute("transform").split(" ")[0].slice(7));
	degrees = (degrees + (simon.length/4 + 1)) % 360;
	sectors[i].setAttribute("transform", "rotate(" + degrees.toString() + "  250 250)");
    }
}

var colorshift = 0;
var changeColor = function() {
    colorshift = (colorshift + 4) % colors.length;
    for (var i = 0; i < 4; i++) {
	flash(i);
    }
}

document.getElementById("new").addEventListener("click", startup);
document.getElementById("spin").addEventListener("click", toRotate);
document.getElementById("noColor").addEventListener("click", changeColor);    
demoID = setInterval(demo, 600);
