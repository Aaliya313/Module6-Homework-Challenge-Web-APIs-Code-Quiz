//Logic to keep account of the scores, lnked to highscore.html
/* Requirements:
1) display final score
2) write initials and save 
3) User can save their initials and score
TIP: USE LOCAL STORAGE  */


//Declaring Global Variables
var counter = 0;
var Score = 0;

//Function to iterate through the quizquestions collect the answer that the user inputs and then checks wwith another for loop of the choice matches up to the answer
function collectScore() {
for (i = 0; i < quizQuestions.length; i++) {
    for (j = 0; j < correctAnswers.length; j++) {
      if (quizQuestions.Question1 === correctAnswers[0]) {
        Score = counter++; //stores in this variable 
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
