const startButton = document.getElementById("start-btn");
const counter = document.getElementById("#timer");
const questionsContainer = document.getElementById("questions-container");
const questionsEl = document.getElementById("questions");
const answerButtons = document.getElementById("anwser-buttons");
const questionTitle = document.getElementById("questionTitle");
const choiceA = document.getElementById("answer1");
const choiceB = document.getElementById("answer2");
const choiceC = document.getElementById("answer3");
const choiceD = document.getElementById("answer4");
const answerCheck = document.getElementById("answerCheck");

var correctAns = 0;
var score = 0;
var currentindex = 0;
const questions = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: ["1. client", "2. server", "3. both", "4. none"],
        correctAnswer: "3"
    }, {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: [ "1. if(x2)", "2. if(x = 2)", "3. if(x == 2)", "4. if(x !=2"],
        correctAnswer: "3"
    }, {
        question: "Who invented JavaScript?",
        answers: [ "1. Douglas Crockford", "2. Sheryl Sandberg", "3. Brendan Eich"],
        correctAnswer: "3"
    }, {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1"
    }, {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    }

];

startButton.addEventListener("click", startGame)

function startGame() {
    questionIndex = 0
    startButton.classList.add("hide")
    questionsContainer.classList.remove('hide')
    
    showQuiz()
    timer()
}

function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].answers[0];
    choiceB.textContent = questions[questionIndex].answers[1];
    choiceC.textContent = questions[questionIndex].answers[2];
    choiceD.textContent = questions[questionIndex].answers[3];
}

function checkAnswer() {

    answerCheck.classList.remove('hide');

    if (questions[questionIndex].correctAnswer === questions[questionIndex].correctAnswer) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        sec -= 10;
        timeLeft.textContent = sec;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].correctAnswer;
    }

    questionIndex++;
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

var sec = 90;
var timeLeft = document.getElementById("timer");

function timer() {

    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000)
}

answer1.addEventListener("click", chooseA);
answer2.addEventListener("click", chooseB);
answer3.addEventListener("click", chooseC);
answer4.addEventListener("click", chooseD);
