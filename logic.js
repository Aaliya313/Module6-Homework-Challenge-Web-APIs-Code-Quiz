
//REQUIREMENT 1 : IF STATMENT
//* A start button that when clicked a timer starts and the first question appears.
// * Questions contain buttons for each answer. 
// * When answer is clicked, the next question appears
// * If the answer clicked was incorrect then subtract time from the clock




//DECLARING ALL VARIABLES AS GLOBAL
var timeEl;
var mainEl;
var secondsLeft;
var timerInterval;
var startQuiz;
var counter = 0;
var Score = 0;
var startPage;




//wHEN BUTTONS ARE CLICKED 
startQuiz = document.getElementById('start');
startQuiz.addEventListener("click", questionDisplayInitiation);
startPage = document.getElementById('start-screen');
showQuestions = document.getElementById('questions');
showQuestionsTitle = document.getElementById('question-title');
showQuestionsChoices = document.getElementById('choices');

function questionDisplayInitiation(){

startQuiz.style.display = "none";
startPage.style.display = "none";
showQuestions.style.display = "block";
showQuestionsTitle.style.display = "block";
showQuestionsChoices.style.display = "block";

showQuestionsTitle.textContent = quizQuestions[0].Question1;
showQuestionsChoices.textContent = quizQuestions[0].Choice1a + quizQuestions[0].Choice1b + quizQuestions[0].Choice1c + quizQuestions[0].Choice1d;

// showQuestionsTitle.textContent = quizQuestions[1].Question2;
// showQuestionsChoices.textContent = quizQuestions[1].Choice2a + quizQuestions[1].Choice2b + quizQuestions[1].Choice2c + quizQuestions[1].Choice2d;

// showQuestionsTitle.textContent = quizQuestions[2].Question3;
// showQuestionsChoices.textContent = quizQuestions[2].Choice3a + quizQuestions[2].Choice3b + quizQuestions[2].Choice3c + quizQuestions[2].Choice3d;

// showQuestionsTitle.textContent = quizQuestions[3].Question4;
// showQuestionsChoices.textContent = quizQuestions[3].Choice4a + quizQuestions[3].Choice4b + quizQuestions[3].Choice4c + quizQuestions[3].Choice4d;

  //When start button is clicked, the timer starts
timeEl = document.querySelector(".timer");
mainEl = document.getElementById("time");
secondsLeft = 60;

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--; 
    timeEl.textContent = secondsLeft + " seconds left till you run out of time"; 

    if(secondsLeft <= 0) {
      //clearInterval(timerInterval); 
      sendMessage(); 
    }

  }, 500); 
}

// Function to create what happens when timer runs out
function sendMessage() {
  timeEl.textContent = " ";
  alert("Ran out of time");

}
setTime();
};


//GameOver function
// function gameOver() {
//   if(secondsLeft === 0) {
        //disable buttons to answer question
//     //redirect to highscores page 
//   } else (all questions are answered) {
          //redirecy to highscores page
      //}
// };

