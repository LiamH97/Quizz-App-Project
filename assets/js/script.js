const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressBarText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressFull');


let currentQuestion = {}
let acceptAnswers = true
let questionCounter = 0
let currentScore = 0
let remainingQuestions = []

/** adding the questions and some filler template questions below, the answer is to call the choice in the array based on its number**/
let questions = [
    {
    question: "Who is the current UFC Welterweight Champion?",
    choice1: "Jose Aldo",
    choice2: "Jon Jones",
    choice3: "Conor McGregor",
    choice4: "Kamaru Usman",
    answer: 4,
    },

    {
        question: "Who won the 2021 Formula One World Driver's title?",
        choice1: "Carlos Sainz",
        choice2: "Lewis Hamilton",
        choice3: "Max Verstappen",
        choice4: "Valentino Rossi",
        answer: 3,
        },
        
            {
                question: "Who replaced Ole Gunnar Solskjaer as manager of Manchester United?",
                choice1: "Thomas Tucel",
                choice2: "Ralph Ragnick",
                choice3: "David Moyes",
                choice4: "Jose Mourinho",
                answer: 2,
                },
                {
                    question: "Tom Brady won his seventh Super Bowl title this year with which NFL team?",
                    choice1: "Tampa Bay Buccaneers",
                    choice2: "Green Bay Packers",
                    choice3: "New England Patriots",
                    choice4: "Kansas City Chiefs",
                    answer: 1,
                    },
                    {
                        question: "Who was the winner of the 2021 Snooker World Championships?",
                        choice1: "Mark Selby",
                        choice2: "Mark Williams",
                        choice3: "Judd Trump",
                        choice4: "Ronnie O'Sullivan",
                        answer: 1,
                        },
                        {
                            question: "Which boxer defeated Anthony Joshua taking his WBA, IBF and WBO heavyweight titles in London this year?",
                            choice1: "Tyson Fury",
                            choice2: "Oleksandr Usyk",
                            choice3: "Andy Ruiz Jr",
                            choice4: "Deontay Wilder",
                            answer: 2,
                            },
                            {
                                question: "Which three England players missed their penalty in the Euro 2020 finals in Wembeley",
                                choice1: "Harry Kane, Jadon Sancho, Marcus Rashford",
                                choice2: "Raheem Sterling, Bukayo Saka, Luke Shaw",
                                choice3: "Jadon Sancho, Mason Mount, Kieran Trippier",
                                choice4: "Jadon Sancho, Bukayo Saka, Marcus Rashford",
                                answer: 4,
                                },
                                {
                                    question: "Which football team won the 2021 UEFA Champion's League?",
                                    choice1: "Manchester United",
                                    choice2: "Real Madrid",
                                    choice3: "Chelsea",
                                    choice4: "PSG",
                                    answer: 3,
                                    },
                                    {
                                    question: "Who defeated Gary Anderson to claim their first ever World Darts Championship title in 2021?",
                                    choice1: "Michael Van Gerwin",
                                    choice2: "Gerwyn Price",
                                    choice3: "Adrian Lewis",
                                    choice4: "Peter Wright",
                                    answer: 2,
                                    },

]

const scorePoints = 10
const maxQuestions = 10
/** starts the quiz with a variables of questionCounter and score set to 0 and calls the following function to get a new question**/
startQuiz = () => {
    questionCounter = 0
    score = 0
    remainingQuestions = [...questions]
    getNewQuestion()
}
/** grabs a new question if the remaining questions is 0 or the question counter is higher than the set maxQuestions variable (10) it will store your score and return you to the finished page**/
getNewQuestion = () => {
    if(remainingQuestions.length === 0 || questionCounter > maxQuestions ){
        localStorage.setItem('recentScore', score)
        return window.location.assign('/finished.html')
    }

questionCounter++ 

/** Adds text to the progress bar with your current question of the max questions eg 5 of 10**/
progressBarText.innerText = `Question ${questionCounter} of ${maxQuestions}`

/** gives the progress bar a width with the percentage of progress ie questions/maxQuestions**/
progressFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

/** gives the progress bar a width with the percentage of progress ie questions/maxQuestions**/
const questionsIndex = Math.floor(Math.random() * remainingQuestions.length)
currentQuestion = remainingQuestions[questionsIndex]
question.innerText = currentQuestion.question


choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})
/*Removes 1 number from the number of remaining questions */
remainingQuestions.splice(questionsIndex, 1)

acceptAnswers = true

}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptAnswers) return

        acceptAnswers = false
        const clickedChoice = e.target
        const clickedAnswer = clickedChoice.dataset['number']

        let classApplied = clickedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classApplied =='correct'){
            incrementScore(scorePoints)
        }

        clickedChoice.parentElement.classList.add(classApplied)

        setTimeout(()=> {
            clickedChoice.parentElement.classList.remove(classApplied)
            getNewQuestion()
        } ,800)
    } )

})

incrementScore= num =>{
    score +=num
    scoreText.innerText = score
}



startQuiz()