
//REQUIREMENT 1 : IF STATMENT
//* A start button that when clicked a timer starts and the first question appears.
// * Questions contain buttons for each answer. 
// * When answer is clicked, the next question appears
// * If the answer clicked was incorrect then subtract time from the clock

//REQUIREMENT 2
// * The quiz should end when all questions are answered or the timer reaches 0.
//   * When the game ends, it should display their score and give the user the ability to save their initials and their score


//DECLARING ALL VARIABLES AS GLOBAL
var timeEl;
var mainEl;
var secondsLeft;
var timerInterval;
var startQuiz;
var counter = 0;
var Score = 0;




//wHEN BUTTONS ARE CLICKED 
startQuiz = document.getElementById('start');
start.addEventListener("click", questionDisplayInitiation);

function questionDisplayInitiation(){

  //When start button is clicked, the timer starts
timeEl = document.querySelector(".timer");
mainEl = document.getElementById("time");
secondsLeft = 60;

function setTime() {
    timerInterval = setInterval(function() {
    secondsLeft--; 
    timeEl.textContent = secondsLeft + " seconds left till you run out of time"; 

    if(secondsLeft === 0) {
      clearInterval(timerInterval); 
      sendMessage(); 
    }

  }, 500); //set in milliseconds 1 sec = 1000 milliseconds, but that's too slow for test purposes, change back when finished
}

// Function to create what happens when timer runs out
function sendMessage() {
  timeEl.textContent = " ";
  alert("Ran out of time");

}
setTime();


//After clicking on the start quiz button on the GUI want to initiate the questions to appear on the screen 
// startQuiz = document.getElementById('hide');
// for (var i = 0; i < quizQuestions.length; i++) {
//     quizQuestions[i].style.display ='show';
// }





};

