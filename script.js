const startButton = document.getElementById("start-btn")
const counter = document.getElementById("#timer")
const questionsContainer = document.getElementById("questions-container")
const questionsEl = document.getElementById("questions")
const answerButtons = document.getElementById("anwser-buttons")
var score = 0
var currentindex = 0
const questionsArray = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [
            "1. client", "2. server", "3. both", "4. none"],
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
    startButton.classList.add("hide")
    questionsContainer.classList.remove('hide')
    
    showQuestion(displayNextQuestion)
    timer()
}
console.log(questionsEl)

function showQuestion(id) {
    if (id  < questionsEl.length) {
        questionEl.textContent = questionsArray[id].question;
        answerButtons.textContent = questionsArray[id].answers[0];
        answerButtons.textContent = questionsArray[id].answers[1];
        answerButtons.textContent = questionsArray[id].answers[2];
        answerButtons.textContent = questionsArray[id].answers[3];
    }
}  

function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
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

function timer() {
    var sec = 90;
    var timer = setInterval(function() {
        document.getElementById('timer').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000)
}

