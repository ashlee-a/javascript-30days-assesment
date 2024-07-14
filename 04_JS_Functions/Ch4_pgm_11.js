// Using the same function with multiple objects

var quizQuestion1;
var quizQuestion2;
var quizQuestion3;
var quizQuestion;
var showQuizQuestion;

quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
};

quizQuestion2 = {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Uranus"],
    answer: "Jupiter"
};

quizQuestion3 = {
    question: "What is the smallest country in the world?",
    options: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
    answer: "Vatican City"
};

showQuizQuestion = function () {
    console.log("Question: " + quizQuestion.question);
    console.log("Options: ");
    for (var i = 0; i < quizQuestion.options.length; i++) {
        console.log((i + 1) + ". " + quizQuestion.options[i]);
    }
    console.log("Answer: " + quizQuestion.answer);
    console.log("------------------------------");
};

quizQuestion = quizQuestion1;
showQuizQuestion();

quizQuestion = quizQuestion2;
showQuizQuestion();

quizQuestion = quizQuestion3;
showQuizQuestion();