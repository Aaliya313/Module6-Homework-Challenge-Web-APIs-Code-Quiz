//JavaScript file for just the questions and answers, store as two variable and make an object array
/*Object array of quizQuestions and answers why: to iterate in a nested for loop so if the answer matched the one that was selected by the user...
it will add a point and this will be connected to local stoage in scores.js*/


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


