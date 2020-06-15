// timer
var timerEl = document.querySelector("#timer");
var wrapperEl = document.querySelector("#wrapper");
var instructionFormEl = document.querySelector(".instruction-form");
var questionFormEl = document.querySelector(".questions-form");

const quizQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
      },
      correctAnswer: "d"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
        },
        correctAnswer: "c"
    },
    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
          a: "Angular",
          b: "jQuery",
          c: "RequireJS",
        },
        correctAnswer: "c"
    }
  ];

// var countdown = function() {
//     formEl.remove();
//     // questionCardsEl();
    
    

//     var timeInterval = setInterval(function() {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
         
//         // when timer hits zero, stop countdown
//         if (timeLeft === -1) {  
//           clearInterval(timeInterval);
//           timerEl.innerHTML="Time\'s up!";
//         }
    
//     }, 1000);

// }

var startButtonHandler = function() {
    //formEl.remove(".instruction-card"); // remove instructions
    questionCardsEl();

    var globalCounter = 75
    var count = 0

    var startTimer = function (internalCounter) {
        count = setInterval(function() {
            timerEl.textContent = internalCounter; // prints time left
            internalCounter--; // start to decrease internal time by 1
            globalCounter--; // start to decreases the global counter by 1
        
            // when timer hits zero, stop countdown          
            if (internalCounter <= 0) {
              stopTimer(count)
              timerEl.innerHTML="Time\'s up!";
            }    
        }, 1000);
    }

    var stopTimer = function (timerToBeStopped) {
        clearInterval(timerToBeStopped)
    }
      
    var handleOptionClick = function () {
        if (rightOption) {
          // do this
        }
    
        if (wrongOption) {
          stopTimer(count) // stop existing timer
          
          globalCounter = globalCounter - 10 // deduct 10s out of global counter
    
          startTimer(globalCounter) // restart timer with new start time
        }
    
        if (lastQuestion) {
          // do this
        }
    }

    startTimer(globalCounter);
    // optionButton.addEventListener(click, handleOptionClick);
}
      


var questionCardsEl = function () {
    // create question card
    var formContainerEl = document.createElement("div");
    formContainerEl.className = "question-card";
    formContainerEl.innerHTML = "<h2 class='question-heading'>" 
        + Object.keys(quizQuestions)
        + "</h2>";
    formEl.appendChild(formContainerEl);
    // // create answer buttons
    // var buttonA = document.createElement("button");
    // buttonA.textContent = "quizQuestions.answers";
    // buttonA.className = "btn button-a";
    // formEl.appendChild(startButtonEl);
}

// instruction card


var loadPage = function() {
    // create instruction card
    var formContainerEl = document.createElement("div");
    formContainerEl.className = "instruction-card";
    formContainerEl.innerHTML = "<h2 class='instruction-heading'>" 
        + "Coding Quiz Challenge" 
        + "</h2><span class='instruction-body'>" 
        + "Try to answer the following code-releated questions within the time limit."
        + "<br>"
        + "Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
        + "</span>";
    formEl.appendChild(formContainerEl);
    // create start button
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start Quiz";
    startButtonEl.className = "btn start-btn";
    formEl.appendChild(startButtonEl);
}




wrapperEl.addEventListener("click", startButtonHandler);

//var something = timerEl.getAttribute("#timer");

// loads with page
loadPage();


