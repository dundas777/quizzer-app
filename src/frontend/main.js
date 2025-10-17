import { capitalise, getLoggedInUser, getScores } from './utils.js';
import { questionsApiEndpoint } from './constants.js';

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

let categoryContainer;
let startQuizButton;

let quizContainer;
let quizQuestion;
let quizAnswers;
let quizIncorrectAnswer;
let quizSubmitButton;
let quizNextButton;

let scoreContainer;
let restartButton;
let finalScore;

document.addEventListener('DOMContentLoaded', () => {

    categoryContainer = document.getElementById('category-container');
    startQuizButton = document.getElementById('start-quiz');

    quizContainer = document.getElementById('quiz-container');
    quizQuestion = document.getElementById('quiz-question');
    quizAnswers = document.getElementById('quiz-answers');
    quizIncorrectAnswer = document.getElementById('quiz-incorrect-answer');
    quizSubmitButton = document.getElementById('quiz-submit-button');
    quizNextButton = document.getElementById('quiz-next-button');

    scoreContainer = document.getElementById('score-container');
    finalScore = document.getElementById('final-score');
    restartButton = document.getElementById('restart-button');

    startQuizButton.addEventListener('click', () => {
        console.log('Start Quiz button clicked');
        let error = false;

        const selectedQuizOption = document.querySelector('input[name="category"]:checked');
        let selectedQuiz;
        if (selectedQuizOption) {
            selectedQuiz = selectedQuizOption.value;
        } else {
            error = true;
            alert('Please select a quiz category before proceeding.');
        }

        const selectedNumberOption = document.querySelector('input[name="number"]:checked');
        let selectedNumber;
        if (selectedNumberOption) {
            selectedNumber = selectedNumberOption.value;
        } else {
            error = true;
            alert('Please select the number of questions to answer before proceeding.');
        }

        if (!error) {
            fetchQuestions(selectedQuiz, selectedNumber);
        }
    });

    restartButton.addEventListener('click', () => {
        scoreContainer.style.display = 'none';
        categoryContainer.style.display = 'block';
    });
});

function fetchQuestions(category, numberOfQuestions) {
    document.body.style.cursor = 'wait';

    console.log('fetchQuestions() called', questions);

    setTimeout(function () {
        currentCategory = category;
        fetch(`${questionsApiEndpoint}?subject=${category}&numberOfQuestions=${numberOfQuestions}`)
            .then(response => response.json())
            .then(data => {
                console.log('Data received from API');
                questions = getRandomQuestions(data, numberOfQuestions);
                console.log('Fetched questions:', questions.length);
                currentQuestionIndex = 0;
                score = 0;
                showQuestion();
            });

        categoryContainer.style.display = 'none';
        quizContainer.style.display = 'block';
        document.body.style.cursor = 'default';
    }, 1000);
}

function getRandomQuestions(questions, count) {
  if (count > questions.length) {
    throw new Error("Requested more questions than available");
  }

  const selectedQuestions = [];
  const usedIndices = new Set();

  while (selectedQuestions.length < count) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selectedQuestions.push(questions[randomIndex]);
    }
  }

  return selectedQuestions;
}

function showQuestion() {
    // alert('showQuestion() called');
    const question = questions[currentQuestionIndex];
    quizQuestion.innerText = question.question;
    quizAnswers.innerHTML = '';

    // Add html option for each answer
    question.answers.forEach((option, index) => {
        const radio = document.createElement('input');
        radio.id = 'answer' + index;
        radio.type = 'radio';
        radio.name = 'answers';
        radio.value = index;
        quizAnswers.appendChild(radio);

        const radioText = document.createElement('label');
        radioText.htmlFor = 'answer' + index;
        radioText.innerText = option;
        radioText.classList.add('radio-text');
        quizAnswers.appendChild(radioText);

        quizAnswers.appendChild(document.createElement('br'));
    });

    // create action to check the answer
    quizSubmitButton.onclick = () => {
        const selectedRadio = document.querySelector('input[name="answers"]:checked');
        if (selectedRadio) {
            checkAnswer(parseInt(selectedRadio.value, 10));
        } else {
            alert('Please select an answer before proceeding.');
        }
    };

    quizNextButton.onclick = () => {
        quizIncorrectAnswer.style.display = 'none';
        quizIncorrectAnswer.innerText = `Incorrect!`;
        quizSubmitButton.style.display = 'block';
        quizNextButton.style.display = 'none';
        nextQuestion();
    };
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswerIdx) {
        score++;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    } else {
        quizIncorrectAnswer.style.display = 'block';
        quizIncorrectAnswer.innerText = `Incorrect! The correct answer was: ${question.answers[question.correctAnswerIdx]}`;
        quizSubmitButton.style.display = 'none';
        quizNextButton.style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    quizContainer.style.display = 'none';
    scoreContainer.style.display = 'block';
    finalScore.innerText = `${score} out of ${questions.length}`;

    // save score if a user is logged in
    const user = getLoggedInUser();
    if (user) {
        const scoreEntry = {
            email: user.email,
            dateOfScore: new Date(),
            category: capitalise(currentCategory),
            numberOfQuestions: questions.length,
            score: score
        };

        // store locally
        let scores = getScores() || [];
        scores.push(scoreEntry);
        localStorage.setItem("scores", JSON.stringify(scores));

        // store in API
        fetch('http://localhost:5000/api/scores', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(scoreEntry)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Score successfully saved to API:', data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }
}