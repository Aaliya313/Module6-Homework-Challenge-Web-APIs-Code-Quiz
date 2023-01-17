//Logic to keep account of the scores - lnked to highscore pages

//Declaring Global Variables
var counter = 0;
var Score = 0;

function collectScore() {
for (i = 0; i < quizQuestions.length; i++) {
    for (j = 0; j < correctAnswers.length; j++) {
      if (quizQuestions.Question1 === correctAnswers[0]) {
        Score = counter++;
        //go onto next question
      } else {
        //deduct time
        //move onto next question
      }
      if (quizQuestions.Question2 === correctAnswers[1]) {
        Score = counter++;
        //go onto next question
      } else {
        //deduct time
        //move onto next question
      }
      if (quizQuestions.Question3 === correctAnswers[2]) {
        Score = counter++;
        //go onto next question
      } else {
        //deduct time
        //move onto next question
      }
      if (quizQuestions.Question4 === correctAnswers[3]) {
        Score = counter++;
        //go onto next question
      } else {
        //deduct time
        //move onto next question
      }
      if (quizQuestions.Question5 === correctAnswers[4]) {
        Score = counter++;
        //go onto next question
      } else {
        //deduct time
        //move onto next question
      }
    }
  }
  alert(Score); 

};
