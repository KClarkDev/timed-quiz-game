/////////////////////////////////////////
//////////INITIALIZE VARIABLES///////////
/////////////////////////////////////////

// Create array with objects of various quiz questions and the correct answers
var quizQuestions = [
  {
    questionNum: 1,
    question:
      "Inside the HTML document, where do you place your JavaScript code?",
    answers: {
      a: "a.  Inside the &lt;footer&gt element",
      b: "b.  Inside the &lt;link&gt element",
      c: "c.  In the &lt;head&gt element",
      d: "d.  Inside the &lt;script&gt element",
    },
    correctAnswer: "d",
  },
  {
    questionNum: 2,
    question: "What operator is used to assign a value to a declared variable?",
    answers: {
      a: "a.  Double-equal (==)",
      b: "b.  Colon (:)",
      c: "c.  Equal sign (=)",
      d: "d.  Question mark (?)",
    },
    correctAnswer: "c",
  },
  {
    questionNum: 3,
    question: "What are the six primitive data types in JavaScript?",
    answers: {
      a: "a.  string, num, falsy, bigInt, symbol, undefined",
      b: "b.  sentence, int, truthy, bigInt, symbol, undefined",
      c: "c.  sentence, float, data, bigInt, symbol, undefined",
      d: "d.  string, number, boolean, bigInt, symbol, undefined",
    },
    correctAnswer: "d",
  },
  {
    questionNum: 4,
    question: "What is the difference between && and ||?",
    answers: {
      a: "a.  The logical operator && returns true is one expression is true while the logical operator || returns true if both expressions return true.",
      b: "b.  The logical operator && returns true is both expressions are true while the logical operator || returns true if one expression or the other returns true.",
      c: "c.  The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",
      d: "d.  The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
    },
    correctAnswer: "b",
  },
  {
    questionNum: 5,
    question: "How do we declare a conditional statement in Javsacript?",
    answers: {
      a: "a.  if...else",
      b: "b.  difference...between",
      c: "c.  while loop",
      d: "d.  for loop",
    },
    correctAnswer: "a",
  },
  {
    questionNum: 6,
    question:
      "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
    answers: {
      a: "a.  0",
      b: "b.  1",
      c: "c.  2",
      d: "d.  3",
    },
    correctAnswer: "b",
  },
  {
    questionNum: 7,
    question: "How do we stop a loop from repeating indefinitely?",
    answers: {
      a: "a.  When we have iterated through half of the condition.",
      b: "b.  A loop will stop executing when the condition is false.",
      c: "c.  We have to explicitly end the loop with the break keyword.",
      d: "d.  A loop will stop executing when the condition is true.",
    },
    correctAnswer: "b",
  },
  {
    questionNum: 8,
    question:
      "Which statement below is NOT true about functions in Javascript?",
    answers: {
      a: "a.  A function must always be assigned an identifier.",
      b: "b.  Function are able to be recursive.",
      c: "c.  Functions can be reused throughout your code.",
      d: "d.  Functions can receive arguments that can alter the output of a function.",
    },
    correctAnswer: "a",
  },
  {
    questionNum: 9,
    question: "What are the two types of scope Javascript uses?",
    answers: {
      a: "a.  Abroad and Local",
      b: "b.  Outside and Inside",
      c: "c.  Global and Local",
      d: "d.  Surrounding and Inner",
    },
    correctAnswer: "c",
  },
  {
    questionNum: 10,
    question:
      "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
    answers: {
      a: "a.  forEach() and pop()",
      b: "b.  push() and sort()",
      c: "c.  pop() and unshift()",
      d: "d.  concat() and shift()",
    },
    correctAnswer: "c",
  },
  {
    questionNum: 11,
    question: "How do we access a value stored in an object?",
    answers: {
      a: "a.  Dot notation, Curl bracket notation",
      b: "b.  Period notation, Square bracket notation",
      c: "c.  Equal notation, Abstract notation",
      d: "d.  Dot notation, Bracket notation",
    },
    correctAnswer: "d",
  },
  {
    questionNum: 12,
    question: "What is an object method?",
    answers: {
      a: "a.  A function that takes an object for an argument.",
      b: "b.  An array saved inside an object",
      c: "c.  A function associated with an object",
      d: "d.  Keys in an object that have a number assigned to it",
    },
    correctAnswer: "c",
  },
  {
    questionNum: 13,
    question: "What is the purpose of the 'This' operator?",
    answers: {
      a: "a.  'This' keyword lets us make a reference to our window gives us access to special object methods.",
      b: "b.  The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.",
      c: "c.  This' keyword allows us to specify certain variables to it which can be used in the global scope.",
      d: "d.  This' is an array where we can easily store global variables for when we need access to them.",
    },
    correctAnswer: "b",
  },
  {
    questionNum: 14,
    question:
      "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
    answers: {
      a: "a.  git checkout test-branch",
      b: "b.  git merge test-branch",
      c: "c.  git change test-branch",
      d: "d.  git commit test-branch",
    },
    correctAnswer: "a",
  },
  {
    questionNum: 15,
    question:
      "From the reasons listed below, which is NOT true about JavaScript?",
    answers: {
      a: "a.  JavaScript increases interactivity of our websites.",
      b: "b.  JavaScripts handles numbers better than most programming languages.",
      c: "c.  Javascript allows developers to create richer interfaces for the users.",
      d: "d.  JavaScript lets provide the user immediate feedback upon an action.",
    },
    correctAnswer: "b",
  },
];

var titleScreen = document.querySelector(".title-screen");
var quiz = document.querySelector(".question-container");
var timer = document.querySelector(".timer");
var buttons = document.querySelectorAll(".quiz-button");
var messageBox = document.querySelector(".message-container");
var answerMessage = document.getElementById("answer-message");
var scoreBox = document.getElementById("score");
var initials = document.getElementById("initials");
var saveBtn = document.getElementById("save-btn");
var highScoreTable = document.getElementById("highscore-table");

var timeLeft = quizQuestions.length * 15; // Allows for 15 seconds per question
var timeInterval;
var currentIndex = 0; // Start with the first question of the shuffled array
// var score = 0;

var highScores = []; // Will be an array of objects with initials/high score pairs

if (localStorage.getItem("highScores")) {
  highScores = JSON.parse(localStorage.getItem("highScores")); //converts back to an array
}
//////////////////////////////
//////////FUNCTIONS///////////
//////////////////////////////

// from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Durstenfeld shuffle (aka Fisher-Yates modern shuffle algorithm)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function initializeQuiz() {
  shuffleArray(quizQuestions);
  var state = titleScreen.getAttribute("data-visibility");

  if (state === "visible") {
    titleScreen.setAttribute("data-visibility", "hidden");
    quiz.setAttribute("data-visibility", "visible");
    timer.setAttribute("data-visibility", "visible");

    countdown(quizQuestions);
    showQuestion(quizQuestions, currentIndex);
  } else {
    titleScreen.setAttribute("data-visibility", "visible");
  }
}

// Display a question from the shuffled array, starting with the first index. When an answer (button) is clicked, proceed to the next question in the array.
function showQuestion(questionList, currentIndex) {
  var currentQuestion = questionList[currentIndex];

  // Populate the appropriate HTML elements with the current question and answer text
  document.getElementById("question").innerHTML = currentQuestion.question;
  document.getElementById("a").innerHTML = currentQuestion.answers.a;
  document.getElementById("b").innerHTML = currentQuestion.answers.b;
  document.getElementById("c").innerHTML = currentQuestion.answers.c;
  document.getElementById("d").innerHTML = currentQuestion.answers.d;
}

function checkQuestion(event) {
  var currentQuestion = quizQuestions[currentIndex - 1]; // Since this function is called when the button is clicked, but the question display also changes when the button is clicked, we need to compare the clicked answer to the previously displayed question.

  var correctAnswer = currentQuestion.correctAnswer;
  var selectedAnswer = event.target.id;

  messageBox.setAttribute("data-visibility", "visible"); // Makes the messagebox display after answering the first question of the quiz

  if (selectedAnswer === correctAnswer) {
    // score++;
    messageBox.setAttribute("data-answer-status", "correct");
    answerMessage.innerHTML = "Correct!";
    // scoreBox.innerHTML = "Score: " + score;
  } else {
    messageBox.setAttribute("data-answer-status", "incorrect");
    answerMessage.innerHTML = "Wrong!";
    timeLeft = timeLeft - 15;
    // scoreBox.innerHTML = "Score: " + score;
  }
}

function endGame() {
  quiz.setAttribute("data-visibility", "hidden");
  //   timer.setAttribute("data-visibility", "hidden");
  answerMessage.setAttribute("data-visibility", "hidden");
  document
    .getElementById("initials-container")
    .setAttribute("data-visibility", "visible");
  clearInterval(timeInterval);
  scoreBox.textContent = timeLeft;
}

// Sets the behavior for the timer. Allots 5 seconds per question. Lose 5 seconds each time a question is answered incorrectly

function countdown() {
  var timerEl = document.getElementById("count-down");

  //   var timeLeft = 10;
  timerEl.textContent = " " + timeLeft + " seconds"; // Ensures that timer displays as soon as the quiz starts

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = " " + timeLeft + " seconds";

    if (timeLeft == 0) {
      endGame();
    }
  }, 1000);
}

function showScores() {
  highScoreTable.setAttribute("data-visibility", "visible");
  highScoreTable.textContent = "";
  highScores = highScores.sort(function (a, b) {
    return b.timeLeft - a.timeLeft;
  });
  for (let i = 0; i < highScores.length; i++) {
    var li = document.createElement("li");
    li.textContent = highScores[i].initials + " - " + highScores[i].timeLeft;
    highScoreTable.appendChild(li);
  }
}

////////////////////////////////////
//////////EVENT LISTENERS///////////
////////////////////////////////////

titleScreen.querySelector("button").addEventListener("click", initializeQuiz);

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentIndex < quizQuestions.length - 1) {
      currentIndex++;
      showQuestion(quizQuestions, currentIndex);
    } else {
      endGame();
    }
  });
});

buttons.forEach(function (button) {
  button.addEventListener("click", checkQuestion);
});

saveBtn.addEventListener("click", function () {
  // Local storage does not have an expiration date
  highScores.push({
    initials: initials.value,
    timeLeft: scoreBox.textContent,
  });
  localStorage.setItem("highScores", JSON.stringify(highScores));
  console.log(highScores);
  showScores();
});
