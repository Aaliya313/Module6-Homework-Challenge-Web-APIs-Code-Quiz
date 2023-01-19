
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

showQuestionsChoices = document.getElementById('choices');
var button1 = document.createElement('BUTTON');
var text1 = document.createTextNode(quizQuestions[0].Choice1a);
button1.appendChild(text1);
showQuestionsChoices.appendChild(button1);

var button2 = document.createElement('BUTTON');
var text2 = document.createTextNode(quizQuestions[0].Choice1b);
button2.appendChild(text2);
showQuestionsChoices.appendChild(button2);

var button3 = document.createElement('BUTTON');
var text3 = document.createTextNode(quizQuestions[0].Choice1c);
button3.appendChild(text3);
showQuestionsChoices.appendChild(button3);

var button4 = document.createElement('BUTTON');
var text4 = document.createTextNode(quizQuestions[0].Choice1d);
button4.appendChild(text4);
showQuestionsChoices.appendChild(button4);







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

