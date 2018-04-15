$(document).ready(function () {
    $("#end-game").hide()
    $(".question").hide();
    $("#submit").hide();
    $("#timer-container").hide();


    $("#start").on("click", function (event) {
        event.preventDefault();
        startGame();
        time = 60;

    })

    //timer//
    var time = 60;
    $("#time").text(time);
    var myTimer = setInterval(function () {
        time--
        $("#time").text(time);

        if (time == 0) {
            clearInterval(myTimer);
            checkAnswers();
        }
    }, 1000)


    //correct answers
    var q1CorrectAnswer = "Will Smith";
    var q2CorrectAnswer = "Jeff Townes";
    var q3CorrectAnswer = "Quincy Jones";
    var q4CorrectAnswer = "West Philadelphia";
    var q5CorrectAnswer = "Kevin Hart";
    var q6CorrectAnswer = "Hilary Banks";
    var q7CorrectAnswer = "Nicky";
    var q8CorrectAnswer = "ULA";
    var q9CorrectAnswer = "Isaiah Thomas";
    var q10CorrectAnswer = "6";


    var correctAnswers = 0;
    var wrongAnswers = 0;

    // function to check answers from submit button and timer//
    function checkAnswers() {
        var q1ChosenAnswer = $('input[name="q1"]:checked').val()
        var q2ChosenAnswer = $('input[name="q2"]:checked').val()
        var q3ChosenAnswer = $('input[name="q3"]:checked').val()
        var q4ChosenAnswer = $('input[name="q4"]:checked').val()
        var q5ChosenAnswer = $('input[name="q5"]:checked').val()
        var q6ChosenAnswer = $('input[name="q6"]:checked').val()
        var q7ChosenAnswer = $('input[name="q7"]:checked').val()
        var q8ChosenAnswer = $('input[name="q8"]:checked').val()
        var q9ChosenAnswer = $('input[name="q9"]:checked').val()
        var q10ChosenAnswer = $('input[name="q10"]:checked').val()
       

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
        if (q5ChosenAnswer == q5CorrectAnswer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

        if (q6ChosenAnswer == q6CorrectAnswer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

        if (q7ChosenAnswer == q7CorrectAnswer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

        if (q8ChosenAnswer == q8CorrectAnswer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }
        if (q9ChosenAnswer == q9CorrectAnswer) {
            correctAnswers++;
        }
        else {
            wrongAnswers++;
        }

        if (q10ChosenAnswer == q10CorrectAnswer) {
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
    $("#submit").on("click", function (event) {
        event.preventDefault();
        checkAnswers();
        clearInterval(myTimer);
    })





    // run game//
    function startGame() {
        console.log("starting game again");
        $(".question").show();
        $("#submit").show();
        $("#instructions").hide();
        $("#timer-container").show();

        $("#score").hide();
        $("#end-game").hide();
        time = 60;
        correctAnswers = 0;
        wrongAnswers = 0;

        var time = 60;
        $("#time").text(time);
        myTimer = setInterval(function () {
            time--
            $("#time").text(time);

            if (time == 0) {
                clearInterval(myTimer);
                checkAnswers();
            }
        }, 1000)
        //reset form
        $(".myForm")[0].reset();
        $(".myForm")[1].reset();
        $(".myForm")[2].reset();
        $(".myForm")[3].reset();
        $(".myForm")[4].reset();
        $(".myForm")[5].reset();
        $(".myForm")[6].reset();
        $(".myForm")[7].reset();
        $(".myForm")[8].reset();
        $(".myForm")[9].reset();


    }


    $("#start-game").on("click", function (event) {
        event.preventDefault();
        startGame();
        time = 60;

    })


});

