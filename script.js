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
    
    showQuestion(displayNextQuestion)
    timer()
}
console.log(questionsEl)

function showQuestion(question) {
    questionsEl.innerText = question.question
    question.choices.forEach(element => {
        var button = document.createElement('button')
        button.innerText=element
        answerButtons.appendChild(button)
        button.addEventListener('click', displayNextQuestion)
    })
}  

function displayNextQuestion(e) {
    currentindex++
    if (currentindex < questionsEl.length) {
        selection(e.target.innerText == nextQuestions.answer)
        answerButtons.innerHTML= ""
        if (currentindex < questionsEl.length) {
            nextQuestions = questionsEl[currentindex]
            showQuestion(nextQuestions)
        }   else {
            currentindex = 0
            showQuestion(nextQuestions)
        }
    } else {
        endGame()
    }
}

function selection(response) {
    if (response){
        alert.innertext = "true"
    } else {
        alert.innerText = "false"
        count = count - 15
        timer.innerHTML = count
    }
    setTimeout(function(){
        alert.innerText= ""
    }, 1000);
}

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

// function checkHighScore(score) {
//     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
//     if (score > lowestScore) {
//         saveHighScore(score, highScores);
//         showHighScores();
//     }
// }

// function showHighScores() {
//     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     const highScoreList = document.getElementById(HIGH_SCORES);
//     highScoreList.innerHTML = highScores
//     .map((score) => '<li>${score.score} - ${score.name}')
//     .join('');
// }

// const NO_OF_HIGH_SCORES = 10;
// const HIGH_SCORES ='highScores';

// function saveHighScore(score, highScores) {
//     const name = prompt('You got a highscore! Enter name:');
//     const newScore = {score, name};
//     highScores.push(newScore)
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(NO_OF_HIGH_SCORES);
//     localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
// }

function endGame(){
    questionsContainer.classList.add("hide")
}
