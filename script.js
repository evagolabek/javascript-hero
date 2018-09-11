//variables experiment 
// var a = "10";
// var b = "5";

// a = parseInt(a);
// b = parseInt(b);

// a = a + b; 

// console.log(a);
// console.log( typeof a);


var show_message = function(){
var message = "hello";
var name = document.getElementById("name").value;
message = message + " " + name + "!";
document.getElementById("message").innerHTML = message;
}


var add_numbers = function(){
	var number = document.getElementById("number").value;
	var other_number = document.getElementById("other_number").value;
	number = parseFloat(number); 
	other_number = parseFloat(other_number);
	var sum = number + other_number;
	document.getElementById("sum").innerHTML = sum;
}

var change_color = function(){
	var color = document.getElementById('color').value;
	document.body.style.backgroundColor = color;
}

var castle_theme = new Audio("Visager_-_02_-_Castle_Theme.mp3");

var play_castle_theme = function(){
	castle_theme.play();
}


var song = new Audio("BoxCat_Games_-_10_-_Epic_Song.mp3");
var play_song = function(){
	song.play();
}

var pause_song = function(){
	song.pause();
}

var hero = document.getElementById("hero");
var hide_hero = function() {
	hero.style.display = "none";
}

var show_hero = function() {
	hero.style.display = "";
}

var teleport_hero = function() {
	hero.style.marginLeft = "360px";
}