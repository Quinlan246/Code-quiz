const quizDiv = document.getElementById("#Start")
const counter = document.getElementById("#timer")
const questions = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: {
            a: "client", 
            b: "server",
            c: "both",
            d: "none"
        },
        correctAnswer: "c"
    }, {
        question: "Which are the correct “if” statements to execute certain code if “x” is equal to 2?",
        answers: {
            a: "if(x2)",
            b: "if(x = 2",
            c: "if(x == 2)",
            d: "if(x != 2)"
        },
        correstAnswer: "c"
    }, {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    }
];

function renderQuestion() {
    
}
