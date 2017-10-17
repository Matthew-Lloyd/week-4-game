console.log("hello world")//Testing my javascript pairing

//setting a global counter to be used as a scorecard
var counter = 0;
var currentgoal = $("#current-goal");
var isGamerunning = false;
var wins = 0;
var losses = 0;

//This will be all the game logic for setting adding and updating a score.
var game = {
	randomNumber: function() {
	    var x = (Math.floor((Math.random() * 101) + 19));
	    currentgoal.attr("data-value", x);
	    currentgoal.html(x);
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
		counter = 0;
		$("#current-score").html(counter);
	},
	gameStartup: function(){		
		isGamerunning = true;
		game.randomNumber();
		game.randombuttonvalue();
		game.currentscore();
		counter = 0;
	},
	winsLossescounter: function() {
	},
};

//This adds the value of the crystal clicked to the total score
$(".btn").on("click", function() {
	var score = ($("#current-goal").text());
	score = parseInt(score);

	var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;
	$("#current-score").html(counter);
		console.log(counter);
		console.log(score);
	if (counter === score) {
	  	isGamerunning = false;
	    wins++;
	    $("#wins").text(wins);	    
	    alert("Winner, Winner!");	    
	    alert("If you wish to play again press [space]");	    
	    }
	else if (counter > score) {
	    isGamerunning = false; 
	    losses++;
	    $("#losses").text(losses);
	    alert("You lose!!");
	    alert("If you wish to play again press [space]");
	    }

});
//This starts the game when the page loads
game.gameStartup();
//and restarts it when the spacebar is pressed.
window.onkeyup = function(e){
	if(e.keyCode == 32){
       // user has pressed space
    game.gameStartup();
   }
	
};
