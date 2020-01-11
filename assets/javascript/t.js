function displayQuestion() {
    //generate random index in array
    index = Math.floor(Math.random() * options.length);
    pick = options[index];

    //	if (pick.shown) {
    //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
    //		displayQuestion();
    //	} else {
    //		console.log(pick.question);
    //iterate through answer array and display
    $("#questionblock").html("<h2>" + pick.question + "</h2>");
    for (var i = 0; i < pick.choice.length; i++) {
        var userChoice = $("<div>");
        userChoice.addClass("answerchoice");
        userChoice.html(pick.choice[i]);
        //assign array position to it so can check answer
        userChoice.attr("data-guessvalue", i);
        $("#answerblock").append(userChoice);
        //		}
    }



    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));

        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stop();
            correctCount++;
            userGuess = "";
            $("#answerblock").html("<p>Correct!</p>");
            hidepicture();

        } else {
            stop();
            wrongCount++;
            userGuess = "";
            $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            hidepicture();
        }
    })
}