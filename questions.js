//JavaScript file for just the questions, store as one single variable and make an object array
//To do:
//make an object array for questions here 
//on logic.js maybe need to do a for loop iterate through object array 
// and addEventListener update the class of start to hide in the startQuiz addeventlistener in logic.js 
//update the hide to show questions maybe in the css?

//Quiz questions object array
let quizQuestions = [
    {
      "Question1": "What is the tag for JavaScript?",
      "Choice1a": "<script></script>", //correct answer
      "Choice1b": "<js></js>",
      "Choice1c": "<JavaScript></JavaScript>",
      "Choice1d": "<scripts></scripts>"
    }, 
    {
        "Question2": "What is the correct syntax to write a function?",
        "Choice2a": "myFunc()",
        "Choice2b": "function myFunc () {}", //correct answer
        "Choice2c": "function(myfunc)",
        "Choice2d": "function"
    }, 
    {
        "Question3": "How do you write 'Hello world' in an alert box?",
        "Choice3a": "alertBox('Hello world')",
        "Choice3b": "alert('Hello World')", //correct answer
        "Choice3c": "alert(Hello world)",
        "Choice3d": "msg('Hello world')"
    },
    {
        "Question4": "How does a FOR loop start?",
        "Choice4a": "for (i<=5;i++)",
        "Choice4b": "for i=1 to 5",
        "Choice4c": "for (i=0;i<=5)",
        "Choice4d": "for (i=0;i<=5;i++)" //correct answer
    },
    {
        "Question5": "How can you add a comment?",
        "Choice5a": "<!--This is the comment-->",
        "Choice5b": "#This is the comment",
        "Choice5c": "//This is the comment", //correct answer
        "Choice5d": "This is the comment"
    },
  ];

  //Array of correct answers to questions above 
  let correctAnswers = [
    Question1Answer === Choice1a,
    Question2Answer === Choice2b,
    Question3Answer === Choice3b,
    Question4Answer === Choice5c
  ];


