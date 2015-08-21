// JavaScript Document
$(document).ready(function(){

  
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
   
    $('#play').addClass('hide');
   
    $('#reset').removeClass('hide');

	
    var userChoice = $('#userChoice').val();
  
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
     
      var winner = compare(userChoice, computerChoice);
    
      $(winner).removeClass('hide');
    
 
    	$("#computerChoice").text("The Computer Chose " + computerChoice);
		$("#computerChoice").removeClass("computerChoice");
  
      console.log("User Choice: " + userChoice);
      console.log("Computer Choice: " + computerChoice);
      console.log(compare(userChoice, computerChoice));
    
    
    $('#reset').click(function(){
    
      $(winner).addClass('hide');
     
	  $("#computerChoice").addClass("computerChoice");
	  
      $('#reset').addClass('hide');
    
      $('#play').removeClass('hide');
    });
    
  });
});
