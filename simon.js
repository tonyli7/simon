//Variables for elements on screen
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");

var button = document.getElementById("new"); //Button for starting the game
var high = document.getElementById("high"); //High score display

//Functions to flash the different sectors
var redFlash = function redFlash() {
    console.log("red");
    red.setAttribute("fill","#ffaaaa"); //Changes the color slightly to show a flash
    if (entering) { //Whether this flash is for playing or a user is inputing
	player.push(0); //Adds this sectors value to the list for the player
    }
    setTimeout(redReturn, 400); //Waits for the color to return
}
var redReturn = function redReturn() {
    red.setAttribute("fill", "red"); //Changes back to the initial color
    setTimeout(play,100); //Calls play for a check on the state of the game (Explained in play)
}
var greenFlash = function greenFlash() {
    console.log("green");
    green.setAttribute("fill","#aaffaa");
    if (entering) {
	player.push(1);
    }
    setTimeout(greenReturn, 400);
}
var greenReturn = function greenReturn() {
    green.setAttribute("fill", "green");
    setTimeout(play,100);
}
var blueFlash = function blueFlash() {
    console.log("blue");
    blue.setAttribute("fill","#aaaaff");
    if (entering) {
	player.push(2);
    }
    setTimeout(blueReturn, 400);
}
var blueReturn = function blueReturn() {
    blue.setAttribute("fill", "blue");
    setTimeout(play,100);
}
var yellowFlash = function yellowFlash() {
    console.log("yellow");
    yellow.setAttribute("fill","#ffffaa");
    if (entering) {
	player.push(3);
    }
    setTimeout(yellowReturn, 400);
}
var yellowReturn = function yellowReturn() {
    yellow.setAttribute("fill", "yellow");
    setTimeout(play,100);
}
//Storing the flashing functions
var flash = [ redFlash, greenFlash, blueFlash, yellowFlash ];

//Playing a sequence
var playing = false; //Whether or not play a sequence
var flashes = []; //The sequence as a global variable
function toplay(instructions) {
    flashes = instructions; //Set the sequence to the global variable
    playing = true; //Set playing to true
    play(); //Play the sequence
}
//Multiptle Functionality
// - Since all the flashing functions loops back to this singular function, it can be a crossroads
//    - Used to check if the player has entered enough moves and then will determine a level up or a lose
//    - Used to continue the playing of a sequence by flashing a sector from the list and removing it
//       - The flash will then loop back again until the list is empty
//    - Allows the user to input values again after the playing has finished
function play() {
    if (simon.length == player.length) {
	removeEventListners();
	for (i = 0; i < simon.length; i++) {
	    if (simon[i] != player[i]) {
		gameover();
		return;
	    }
	}
	setTimeout(levelup, 200);
    } else if (playing && flashes.length > 0) {
	flash[flashes[0]]();
	flashes = flashes.slice(1,flashes.length);
    } else {
	playing = false;
	flashes = [];
	addEventListeners();
    }
}

//Functions to allow user input or deny user input
var removeEventListners = function removeEventListners() {
    entering = false; //No more inputs from the user
    red.removeEventListener("click",redFlash);
    green.removeEventListener("click",greenFlash);
    blue.removeEventListener("click",blueFlash);
    yellow.removeEventListener("click",yellowFlash);
}
var addEventListeners = function addEventListener() {
    red.addEventListener("click",redFlash);
    green.addEventListener("click",greenFlash);
    blue.addEventListener("click",blueFlash);
    yellow.addEventListener("click",yellowFlash);
    entering = true; //Inputs will be from the user
}

//Initialized for the game
var simon = []; 
var player = [];
var entering = false; //Player is not entering values
var setup = function() {
    removeEventListners(); //Prevents user actions
    simon = []; //Clears previous data
    messenger = true; //Allows for gameover message
    //Adds the four initial moves
    for (i = 0; i < 4; i++) {
	simon.push(Math.floor(Math.random() * 4));
    }
    toplay(simon); //Plays the four initial moves
    player = []; //Clears previous player data
}

//To level up after completing a level
var levelup = function() {
    player = []; //Clears the data entered by the player 
    simon.push(Math.floor(Math.random() * 4)); //Adds another move to simon's list
    toplay(simon); //Plays the list again
}

var messenger = false; //Prevents multiple gameover messages
var gameover = function gameover() {
    output = "GAME OVER\n"; //Initial Message
    if (player.length > parseInt(high.innerHTML)) { //Checks for high scores 
	output += "New high score of " + player.length + "!"; //Declares new high scores
	high.innerHTML = player.length.toString(); //Sets new high scores
    } else {
	output += "You scored " + player.length + "."; //Just the score since there is no new high score
    }
    if (messenger) { //If a message should be sent
	messenger = false; //No more messages 
	alert(output); //Alert the user of the game over status
    }
}

button.addEventListener("click", setup);
