

$(document).ready(function(){



  var buttonColors = ["red", "blue","green", "yellow"];
  var gamePattern = [];
  var userChosenColor = " ";
  var userClickedPattern = [];
  var started = false;
      var level = 0;



  //start the game on button press only once
      $(document).keypress(function(){

      if(started == false){




          $("#level-title").text("Level "+ level);
            nextSequence();
          started = true;
        }

      });

  //listen for when a button is clicked and add it to the user's pattern
  $(".btn").click(function(){

    userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);

      playSound(userChosenColor);
      animatePress(userChosenColor);
      checkAnswer(userClickedPattern.length - 1);



  });




  function nextSequence(){

    userClickedPattern = [];

    // create random number to choose a random color
    var randomNumber = Math.floor(Math.random()* 4);
    var randomChosenColor = buttonColors[randomNumber];

    //add that color to the pattern
    gamePattern.push(randomChosenColor);
      $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    level++;
    $("#level-title").text("Level "+ level);
    playSound(randomChosenColor);

  }

  function playSound(name){

    //play sound based off which color is added to pattern
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function animatePress(currentColor){



          $("#"+ currentColor).addClass("pressed");


    setTimeout(function(){
          $("#"+ currentColor).removeClass("pressed");
    },100);

  }

  function checkAnswer(currentLevel){

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
      console.log("success");
      if(userClickedPattern.length === gamePattern.length){
        setTimeout(function(){
        nextSequence();
      },1000);

      }
    }

    else{
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
            $("body").removeClass("game-over");
      },200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();


    }



  }

  function startOver(){

    level = 0;
    started = false;
    gamePattern = [];
  }






});
