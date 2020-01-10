//clear
$(document).ready(function () {
    //click function to enter the game
    $("#game-start").click(function () {
        $("#instructions").empty();
        $("#game-start").empty();
        questionDisplay();
    });

    //define game variables
    var timerRunning = false;
    var timer = 20;
    var intervalId;
    var unanswered = 0;

    var questions = {
        question: "When firing at the enemy, where should you aim?",
        options: [{
            letter: "A",
            choice: "Directly at the enemy",
        }, {
            letter: "B",
            choice: "Behind the enemy in case they step back",
        }, {
            letter: "C",
            choice: "At the enemy's feet so they know you mean business",
        }, {
            letter: "D",
            choice: "Both B and C are correct answers"
        }],
    };

    function runTimer() {
        if (!timerRunning) {
            intervalId = setInterval(decrement, 1000);
            timerRunning = true;
        }
    };

    function stopTimer() {
        running = false;
        clearInterval(intervalId);
    }

    function decrement() {
        timer--;
        $("#timer").html("Time Remaining: " + timer);
        if (timer === 0) {
            unanswered++;
            stopTimer()
        }
    };


    function questionDisplay() {
        $("#question").text(questions.question);
        console.log(questions.question);
        $(".answer-a").text("A: " + questions.options[0].choice);
        $(".answer-b").text("B: " + questions.options[1].choice);
        $(".answer-c").text("C: " + questions.options[2].choice);
        $(".answer-d").text("D: " + questions.options[3].choice);

        console.log(questions.options[0].choice + "\n" + questions.options[1].choice);
        runTimer();
    }



});