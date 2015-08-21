// JavaScript Document
$(document).ready(function(){
  // Document is now ready for jQuery.
  // Now start the game when they click 'play'.
  
  $('#chooseRock').click(function(){
		$('#userChoice').val('rock');
	});
	$('#choosePaper').click(function(){
		$('#userChoice').val('paper');
	});
	$('#chooseScissors').click(function(){
		$('#userChoice').val('scissors');
	});
  
  $('#play').click(function(){
    // Remove play button
    $('#play').addClass('hide');
    // Show reset button
    $('#reset').removeClass('hide');
    // Tell jQuery to store the user input as userChoice
	
    var userChoice = $('#userChoice').val();
    // Execute CodeCademy JavaScript
    var computerChoice = Math.random();
      if (computerChoice < 0.34) {
          computerChoice = "rock";
      } else if(computerChoice <= 0.67) {
          computerChoice = "paper";
      } else {
          computerChoice = "scissors";
      }
      
      function compare(choice1, choice2) {
          if(choice1 === choice2) {
          return "#tie_wins";
      }
      if (choice1 === "rock") {
          if(choice2 === "scissors") {
              return "#rock_wins";
          } else {
              return "#paper_wins";
          }
      }
      if (choice1 === "paper") {
          if(choice2 === "rock") {
              return "#paper_wins";
          } else {
              if(choice2 === "scissors") {
                  return "#scissors_wins";
          }
      }
	  }
      if (choice1 === "scissors") {
          if(choice2 === "rock") {
              return "#rock_wins";
          } else {
              if(choice2 === "paper") {
                  return "#scissors_wins";
              }
          }
      }
      if(choice1 != "scissors", "paper", "rock"){
		  alert("Please click a picture or type rock, paper, or scissors! (It is case sensitive")
	  }
      };
      // Now, tell the user who won using the compare function
      // Like this:
      var winner = compare(userChoice, computerChoice);
      // Show the winner!
      $(winner).removeClass('hide');
    
      // Now you add the 'text' from computerChoice
      // into the '#computerChoice' div
    	$("#computerChoice").text("The Computer Chose " + computerChoice);
		$("#computerChoice").removeClass("computerChoice");
      // You can leave the console.log's for testing.
      console.log("User Choice: " + userChoice);
      console.log("Computer Choice: " + computerChoice);
      console.log(compare(userChoice, computerChoice));
    
      // Alright, the game is over, reset your divs / images.
    $('#reset').click(function(){
      // hide the winner
      $(winner).addClass('hide');
      // Hide reset button
	  $("#computerChoice").addClass("computerChoice");
	  
      $('#reset').addClass('hide');
      // Show play button
      $('#play').removeClass('hide');
    });
    
  });
});