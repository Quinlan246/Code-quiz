const startButton = document.getElementById("start-btn")
const counter = document.getElementById("#timer")
const questionsContainer = document.getElementById("questions-container")
const questions = document.getElementById("questions")
const answerButtons = document.getElementById("anwser-buttons")
const questionsArray = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [
            {text: "client", correct: false}, 
            {text: "server", correct: false},
            {text: "both", correct: true},
            {text: "none", correct: false},
        ],
    }, {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: [
            {text: "if(x2)", correct: false},
            {text: "if(x = 2", correct: false},
            {text: "if(x == 2)", correct: true},
            {text: "if(x != 2)", correct: false},
        ],
    }, {
        question: "Who invented JavaScript?",
        answers: [
            {text: "Douglas Crockford", correct: false},
            {text: "Sheryl Sandberg", correct: false},
            {text: "Brendan Eich", correct: true},
        ],
    }
];

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    questionsContainer.classList.remove('hide')
    
    nextQuestion()
}

function nextQuestion() {
    showQuestion()
}

function showQuestion(question) {
    questions.innerText = question.question
    console.log(showQuestion)
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answerButtons.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
}

function selectAnswer(event) {

}

function timer() {
    var sec = 45;
    var timer = setInterval(function() {
        document.getElementById('countdown').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000)
}

function saveHighScore(score, highScores) {
    const newScore = {score, name};
    highScores.push(newScore)
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(NO_OF_HIGH_SCORES);
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
}
