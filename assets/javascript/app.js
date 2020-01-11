//clear
$(document).ready(function () {
    //!click function to enter the game
    $("#game-start").click(function () {
        $("#instructions").empty();
        $("#game-start").empty();
        questionDisplay();
    });

    //!define game variables
    var timerRunning = false;
    var timer = 20;
    var intervalId;
    var unanswered = 0;
    var rightAnswers = 0;
    var wrongAnswers = 0;
    var userOption = "";

    var questions = [{
            question: "When firing at the enemy, where should you aim?",
            options: [
                "A: Directly at the enemy",
                "B: Behind the enemy in case they step back",
                "C: At the enemy's feet so they know you mean business",
                "D: Both B and C"
            ],
            answerPosition: 3,
            answerLetter: "D"
        },
        {
            question: "What does our armor protect against?",
            options: [
                "A: Old-school bullets",
                "B: Phaser Blasts",
                "C: Nothing, its just so we look scary",
                "D: The force"
            ],
            answerPosition: 2,
            answerLetter: "C"
        }
    ];

    //!Timing functions
    //starts the timer
    function runTimer() {
        if (!timerRunning) {
            //tells the timer to count down by 1 sec
            intervalId = setInterval(decrement, 1000);
            //sets the timer to run
            timerRunning = true;
        }
    }
    //stops the timer
    function stopTimer() {
        //sets timer to not run
        running = false;
        //resets the interval
        clearInterval(intervalId);
    };

    function decrement() {
        timer--;
        $("#timer").html("Time Remaining: " + timer);
        if (timer === 0) {
            unanswered++;
            console.log(unanswered);
            stopTimer();
            $("#correct-answer").html("<h3>Out of time. Correct answer: " + choice.options[choice.answerPosition] + "</h3>");
        }
    }

    //!Game functions
    function questionDisplay() {
        index = Math.floor(Math.random() * questions.length);
        choice = questions[index];
        //show the question in html
        $("#question").text(choice.question);
        console.log(choice.question);
        //loop to display the answer options
        for (var i = 0; i < choice.options.length; i++) {
            //create a new div for each option
            var userOption = $("<div>");
            //give each option the class of answer
            userOption.addClass("answer");
            //put the value into the new div
            userOption.html(choice.options[i]);
            //assign the index position as an attribute
            userOption.attr("data-position", i);
            //put it all inside the html div
            $("#answer-options").append(userOption);
        }
        runTimer();

        //grab info from the users choice
        $(".answer").click(function () {
            // alert("user clicked");
            selection = parseInt($(this).attr("data-position"));
            // alert(selection);

            if (selection == choice.answerPosition) {
                stopTimer();
                rightAnswers++;
                selection = "";
                $("#correct-answer").html("<h3>You are correct</h3>");
            } else {
                stopTimer();
                wrongAnswers++;
                selection = "";
                $("#correct-answer").html("<h3>WRONG. " + choice.answerLetter + " is correct </h3>");
            };


        });
    }
    //checks the users selection
    // $(".answer").click(function() {
    // 	alert("user clicked");

    // selection = parseInt($(this).attr("data-position"));
    // alert(selection);
    // });
});