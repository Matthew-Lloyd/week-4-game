console.log("hello world")//Testing my javascript pairing

//setting a global counter to be used as a scorecard
var counter = 0;
var currentgoal = $("#current-goal");
//This will be all the game logic for setting adding and updating a score.
var game = {
randomNumber: function() {
    var x = (Math.floor((Math.random() * 101) + 19));
    currentgoal.html(x);
    x = $("#current-goal").val(x);
    console.log(currentgoal.attr("value"));
},
randombuttonvalue: function() {
    var i = $("#crystal1")
    i.val(Math.floor((Math.random() * 11) + 1));
    var ii = $("#crystal2")
    ii.val(Math.floor((Math.random() * 11) + 1));
    var iii = $("#crystal3")
    iii.val(Math.floor((Math.random() * 11) + 1));
    var iv = $("#crystal4")
    iv.val(Math.floor((Math.random() * 11) + 1));
},
currentscore: function() {
	var a = $("#crystal1").attr("value")	
	var b = $("#crystal2").attr("value")	
	var c = $("#crystal3").attr("value")	
	var d = $("#crystal4").attr("value")	
	console.log(a)
	console.log(b)
	console.log(c)
	console.log(d)
	// add
},
gamerunning: function(){
	var score = $("#current-goal").attr("html");
	score = parseInt(score);

	if (counter === score) {
      console.log("winner, winner");
    }

    else if (counter >= score) {
      console.log("You lose!!");
    }

},

winsLossescounter: function() {

},

};




//This starts the game when the page loads
window.onload = function() {
$("#wins").html("text");
$("#current-score").html(counter);
game.randomNumber();
game.randombuttonvalue();
game.currentscore();
game.gamerunning();

};
//This adds the value of the crystal clicked to the total score
$(".btn").on("click", function() {
var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
$("#current-score").html(counter);

});
console.log(currentgoal)