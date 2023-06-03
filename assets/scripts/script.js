// Create array with objects of various quiz questions and the correct answers
var quizQuestions = [
    {
        questionNum: 1,
        question: "Inside the HTML document, where do you place your JavaScript code?",
        answers: {
            a: 'Inside the <footer> element',
            b: 'Inside the <link> element',
            c: 'In the <head> element',
            d: 'Inside the <script> element'
        },
        correctAnswer: 'd'
    },
    {
        questionNum: 2,
        question: "What operator is used to assign a value to a declared variable?",
        answers: {
            a: 'Double-equal (==)',
            b: 'Colon (:)',
            c: 'Equal sign (=)',
            d: 'Question mark (?)'
        },
        correctAnswer: 'c'
    },
    {
        questionNum: 3,
        question: "What are the six primitive data types in JavaScript?",
        answers: {
            a: 'string, num, falsy, bigInt, symbol, undefined',
            b: 'sentence, int, truthy, bigInt, symbol, undefined',
            c: 'sentence, float, data, bigInt, symbol, undefined',
            d: 'string, number, boolean, bigInt, symbol, undefined'
        },
        correctAnswer: 'd'
    },
    {
        questionNum: 4,
        question: "What is the difference between && and ||?",
        answers: {
            a: 'The logical operator && returns true is one expression is true while the logical operator || returns true if both expressions return true.',
            b: 'The logical operator && returns true is both expressions are true while the logical operator || returns true if one expression or the other returns true.',
            c: 'The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.',
            d: 'The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.'
        },
        correctAnswer: 'b'
    },
    {
        questionNum: 5,
        question: "How do we declare a conditional statement in Javsacript?",
        answers: {
            a: 'if...else',
            b: 'difference...between',
            c: 'while loop',
            d: 'for loop'
        },
        correctAnswer: 'a'
    },
    {
        questionNum: 6,
        question: "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",
        answers: {
            a: '0',
            b: '1',
            c: '2',
            d: '3'
        },
        correctAnswer: 'b'
    },
    {
        questionNum: 7,
        question: "How do we stop a loop from repeating indefinitely?",
        answers: {
            a: 'When we have iterated through half of the condition.',
            b: 'A loop will stop executing when the condition is false.',
            c: 'We have to explicitly end the loop with the break keyword.',
            d: 'A loop will stop executing when the condition is true.'
        },
        correctAnswer: 'b'
    },
    {
        questionNum: 8,
        question: "Which statement below is NOT true about functions in Javascript?",
        answers: {
            a: 'A function must always be assigned an identifier.',
            b: 'Function are able to be recursive.',
            c: 'Functions can be reused throughout your code.',
            d: 'Functions can receive arguments that can alter the output of a function.'
        },
        correctAnswer: 'a'
    },
    {
        questionNum: 9,
        question: "What are the two types of scope Javascript uses?",
        answers: {
            a: 'Abroad and Local',
            b: 'Outside and Inside',
            c: 'Global and Local',
            d: 'Surrounding and Inner'
        },
        correctAnswer: 'c'
    },
    {
        questionNum: 10,
        question: "As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use?",
        answers: {
            a: 'forEach() and pop()',
            b: 'push() and sort()',
            c: 'pop() and unshift()',
            d: 'concat() and shift()'
        },
        correctAnswer: 'c'
    },
    {
        questionNum: 11,
        question: "How do we access a value stored in an object?",
        answers: {
            a: 'Dot notation, Curl bracket notation',
            b: 'Period notation, Square bracket notation',
            c: 'Equal notation, Abstract notation',
            d: 'Dot notation, Bracket notation'
        },
        correctAnswer: 'd'
    },
    {
        questionNum: 12,
        question: "What is an object method?",
        answers: {
            a: 'A function that takes an object for an argument.',
            b: 'An array saved inside an object',
            c: 'A function associated with an object',
            d: 'Keys in an object that have a number assigned to it'
        },
        correctAnswer: 'c'
    },
    {
        questionNum: 13,
        question: "What is the purpose of the 'This' operator?",
        answers: {
            a: "'This' keyword lets us make a reference to our window gives us access to special object methods.",
            b: "The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.",
            c: "This' keyword allows us to specify certain variables to it which can be used in the global scope.",
            d: "This' is an array where we can easily store global variables for when we need access to them."
        },
        correctAnswer: 'b'
    },
    {
        questionNum: 14,
        question: "We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch?",
        answers: {
            a: 'git checkout test-branch',
            b: 'git merge test-branch',
            c: 'git change test-branch',
            d: 'git commit test-branch'
        },
        correctAnswer: 'a'
    },
    {
        questionNum: 15,
        question: "From the reasons listed below, which is NOT true about JavaScript?",
        answers: {
            a: 'JavaScript increases interactivity of our websites.',
            b: 'JavaScripts handles numbers better than most programming languages.',
            c: 'Javascript allows developers to create richer interfaces for the users.',
            d: 'JavaScript lets provide the user immediate feedback upon an action.'
        },
        correctAnswer: 'b'
    }

]

// Create a list of numbers that represent indexes of available (unasked) questions for the quiz
var availableQuestions = [];
for(var i=0; i < quizQuestions.length; i++) {
    availableQuestions.push(i);
}

// Function to show random question and corresponding answer choices
function showQuestion(questionList, possibleQuestions) {
    // Create a list of numbers that represent indexes of available (unasked) questions for the quiz
    // var possibleQuestions = [];
    // for(var i=0; i < quizQuestions.length; i++) {
    //     possibleQuestions.push(i);
    // }

    var questionIndex = Math.floor(Math.random() * possibleQuestions.length);
    possibleQuestions.splice(questionIndex, 1);
    
   document.getElementById("question").innerHTML = questionList[questionIndex].question;
   document.getElementById("answerA").innerHTML = questionList[questionIndex].answers.a;
   document.getElementById("answerB").innerHTML = questionList[questionIndex].answers.b;
   document.getElementById("answerC").innerHTML = questionList[questionIndex].answers.c;
   document.getElementById("answerD").innerHTML = questionList[questionIndex].answers.d;
   console.log("Remaining questions: " + possibleQuestions.length);
}

var titleScreen = document.querySelector(".title-screen");
var quiz = document.querySelector(".question-container");

titleScreen.querySelector("button").addEventListener("click", function(event) {
  
  var state = titleScreen.getAttribute("data-visibility");
  if(state==="visible") {
    titleScreen.setAttribute("data-visibility", "hidden");
    quiz.setAttribute("data-visibility", "visible")
  } else {
    titleScreen.setAttribute("data-visibility", "visible");
  }
});

showQuestion(quizQuestions, availableQuestions);

// Function for behavior when answer is selected

// Function for timer. Start with 60 seconds, lose 5 seconds each time a question is answered incorrectly
