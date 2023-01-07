const startButton = document.getElementById("start-btn");
const counter = document.getElementById("timer");
const questionsContainer = document.getElementById("questions-container");
const questionsEl = document.getElementById("questions");
const answerButtons = document.getElementById("anwser-buttons");
const questionTitle = document.getElementById("questionTitle");
const choiceA = document.getElementById("answer1");
const choiceB = document.getElementById("answer2");
const choiceC = document.getElementById("answer3");
const choiceD = document.getElementById("answer4");
const answerCheck = document.getElementById("answerCheck");
const controls = document.getElementById("controls");
const container = document.getElementById("container")
const initialInput = document.getElementById("initialInput");
const highScoreSection = document.getElementById("highScoreSection");
const finalScore = document.getElementById("finalScore");
const clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
const viewHighScore = document.getElementById("viewHighScore");
const listOfHighScores = document.getElementById("listOfHighScores");
const submitInitialBtn = document.getElementById("submitInitialBtn");
const goBackBtn = document.getElementById("goBackBtn");
const scoreContainer = document.getElementById("scoreContainer")
const summary = document.getElementById("summary");

var correctAns = 0;
var score = 0;
var currentindex = 0;
const questions = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: ["1. client", "2. server", "3. both", "4. none"],
        correctAnswer: "3. both"
    }, {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: [ "1. if(x2)", "2. if(x = 2)", "3. if(x == 2)", "4. if(x !=2"],
        correctAnswer: "3. if(x == 2)"
    }, {
        question: "Who invented JavaScript?",
        answers: [ "1. Douglas Crockford", "2. Sheryl Sandberg", "3. Brendan Eich"],
        correctAnswer: "3. Brendan Eich"
    }, {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "1. quotes"
    }, {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2. curly brackets"
    }

];


function startGame() {
    
    questionIndex = 0
    initialInput.textContent = ""
    startButton.style.display = "none"
    questionsContainer.style.display = "block"
    
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

function checkAnswer(correctAnswer) {

    answerCheck.style.display = "block"

    if (questions[questionIndex].correctAnswer === questions[questionIndex].answers[correctAnswer]) {
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

function chooseA() { checkAnswer(0) }

function chooseB() { checkAnswer(1) }

function chooseC() { checkAnswer(2) }

function chooseD() { checkAnswer(3) }

function gameOver() {
    summary.style.display = "block"
    questionsContainer.style.display = "none";
    counter.style.display = "none";
    controls.style.display = "none";
    container.style.display = "none";

    finalScore.textContent = correctAns;
}

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

function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    counter.style.display = "none"
    highScoreSection.style.display = "block"

    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null) {
        scoresArray = [];
    } else {
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore = {
        initials: initialInput.value,
        score: finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);

    showHighScores();
}

var i = 0;
function showHighScores() {

    counter.style.display = "none"
    questionsContainer.style.display = "none"
    highScoreSection.style.display = "block"


    var savedHighScores = localStorage.getItem("high scores");

    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event) { 
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    highScoreSection.style.display = "none"
    summary.style.display = "none"
});

clearHighScoreBtn.addEventListener("click", function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
});

startButton.addEventListener("click", startGame)
answer1.addEventListener("click", chooseA);
answer2.addEventListener("click", chooseB);
answer3.addEventListener("click", chooseC);
answer4.addEventListener("click", chooseD);
