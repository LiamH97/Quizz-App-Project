const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressBarText = document.getElementById('progressText');
const score = document.getElementById('score');
const progressBarFull = document.getElementById('progressFull');

let currentQuestion = {}
let acceptAnswers = true
let questionCounter = 0
let currentScore = 0
let remainingQuestions = []

let questions = [
    {
    question: 'Who is the current UFC Welterweight Champion?'
    choice1: 'Jose Aldo'
    choice2: 'Jon Jones'
    choice3: 'Conor McGregor'
    choice4: 'Kamaru Usman'
    },
    
]