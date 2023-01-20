//DECLARING ALL VARIABLES AS GLOBAL
var timeEl;
var mainEl;
var secondsLeft;
var timerInterval;
var startQuiz;
var counter = 0;
var Score = 0;
var startPage;
var showQuestions;
var showQuestionsTitle;
var showQuestionsChoices;


//Getting the id's from the HTML file and storing them in variables
startQuiz = document.getElementById('start'); //The StartQuiz button with the id='start' in the HTML file store in a variable
startQuiz.addEventListener("click", questionDisplayInitiation); //addEventListener, when startQuiz button clicked, executed questionDisplayInitiation();
startPage = document.getElementById('start-screen'); //The id='start-screen' in the HTML file stored in a variable
showQuestions = document.getElementById('questions'); //The id='questions' in the HTML file stored in a variable
showQuestionsTitle = document.getElementById('question-title'); //The id='question-title' in the HTML file stored in a variable
showQuestionsChoices = document.getElementById('choices'); //The id='choices' in the HTML file stored in a variable

/* FUNCTION questionDisplayInitiation()
The function that will execute to display the questions and thus will carry out the following: 
1) the timer will start decrementing
2) When the user presses startQuiz btn will display the questions
3) When the user has selected the choice they want, the page will update to the next question 
(Note: in the score.js file the local storage, adding up of points & removing time will be there)
*/
function questionDisplayInitiation(){
//Hiding/showing
startQuiz.style.display = "none"; //Hiding startQuiz button
startPage.style.display = "none"; //Hiding start page 
showQuestions.style.display = "block"; //Showing questions
showQuestionsTitle.style.display = "block"; //Showing question title
showQuestionsChoices.style.display = "block"; //Showing the question choices

//Calling on the variables made in question.js file to display Question 1
showQuestionsTitle.textContent = quizQuestions[0].Question1; //Showing Question 1 title

/*Showing question 1 choices in the form of buttons:
1) I have encountered an issue here and do not know where I have gone wrong:
Issues: The buttons are outputting multiple times, unsure on how ti fix this.
I will work on this and eventually resubmit this assignment to fix the error.
To then display the other questions after this one, I will repeat the same logic in hide/show but for the questions and calling on question.js file*/
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
    secondsLeft--; //decrements
    timeEl.textContent = secondsLeft + " seconds left till you run out of time"; 

    if(secondsLeft < 0) { //stops minus time, timer stops at 0 seconds
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


//FUNCTION gameOver: Function to automatically redirect user to highscores page
// function gameOver() { 
// if(secondsLeft === 0) {
    //disable buttons to answer question
    //redirect to highscores page 
//  } else (all questions are answered) {
          //redirect to highscores page
      //}
// };

