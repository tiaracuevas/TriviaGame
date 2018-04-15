$(document).ready(function() {
    $("#end-game").hide()
    
    
        //timer//
        var time= 60;
        $("#time").text(time);
        var myTimer = setInterval (function(){
            time--
            $("#time").text(time);
    
            if (time == 0) {
                clearInterval(myTimer);
                checkAnswers();
            }
            },1000)
        
        
        //correct answers
        var q1CorrectAnswer= "yellow";
        var q2CorrectAnswer= "orange";
        var q3CorrectAnswer= "red";
        var q4CorrectAnswer= "green";
    
        var correctAnswers= 0;
        var wrongAnswers= 0;
    
        // function to check answers from submit button and timer//
        function checkAnswers(){
            var q1ChosenAnswer = $('input[name="q1"]:checked').val()
            var q2ChosenAnswer = $('input[name="q2"]:checked').val()
            var q3ChosenAnswer = $('input[name="q3"]:checked').val()
            var q4ChosenAnswer = $('input[name="q4"]:checked').val()
           
            if (q1ChosenAnswer == q1CorrectAnswer) {
                correctAnswers++;
            }
            else {
                wrongAnswers++;
            }
    
            if (q2ChosenAnswer == q2CorrectAnswer) {
                correctAnswers++;
            }
            else {
                wrongAnswers++;
            }
    
            if (q3ChosenAnswer == q3CorrectAnswer) {
                correctAnswers++;
            }
            else {
                wrongAnswers++;
            }
    
            if (q4ChosenAnswer == q4CorrectAnswer) {
                correctAnswers++;
            }
            else {
                wrongAnswers++;
            }

            $(".question").hide();
            $("#submit").hide();
            $("#instructions").hide();
            $("#timer-container").hide();
    
            $("#end-game").show();
            $("#score").show();
            $("#score").html("You have " + correctAnswers + " correct answers.<br> You have " + wrongAnswers + " wrong answers.")
        }
    
    
        // checks answers when check answer button is clicked//
            $("#submit").on("click", function(event){
                event.preventDefault();
                checkAnswers();
                clearInterval (myTimer);
            }) 
    
        
    
    
    
        // run game//
        function startGame () {
            console.log ("starting game again");
            $(".question").show();
            $("#submit").show();
            $("#instructions").hide();
            $("#timer-container").show();
    
            $("#score").hide();
            $("#end-game").hide();
            time= 60;
            correctAnswers= 0;
            wrongAnswers= 0;
    
            var time= 60;
        $("#time").text(time);
        var myTimer = setInterval (function(){
            time--
            $("#time").text(time);
    
            if (time == 0) {
                clearInterval(myTimer);
                checkAnswers();
            }
            },1000)
            //reset form
            $(".myForm")[0].reset();
            $(".myForm")[1].reset();
            $(".myForm")[2].reset();
            $(".myForm")[3].reset();
    
    
          
        }
    
    
        $("#start-game").on("click", function(event){
            event.preventDefault();
            startGame();
            correctAnswers= 0;
            wrongAnswers= 0;
            
        }) 
      
    
    });