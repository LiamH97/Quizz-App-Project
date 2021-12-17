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
    question: "Who is the current UFC Welterweight Champion?"
    choice1: "Jose Aldo"
    choice2: "Jon Jones"
    choice3: "Conor McGregor"
    choice4: "Kamaru Usman"
    answer: 4,
    },

    {
        question: "Who won the 2021 Formula One World Driver's title in 2021?"
        choice1: "Carlos Sainz"
        choice2: "Lewis Hamilton"
        choice3: "Max Verstappen"
        choice4: "Valentino Rossi"
        answer: 2,
        },
        {
            {
                question: "Who replaced Ole Gunnar Solskjaer as manager of Manchester United?"
                choice1: "Thomas Tucel"
                choice2: "Ralph Ragnick"
                choice3: "David Moyes"
                choice4: "Jose Mourinho"
                answer: 2,
                },
                {
                    question: "Tom Brady won his seventh Super Bowl title this year with which NFL team?"
                    choice1: "Tampa Bay Buccaneers"
                    choice2: "Green Bay Packers"
                    choice3: "New England Patriots"
                    choice4: "Kansas City Chiefs"
                    answer: 1,
                    },
                    {
                        question: "Who was the winner of the 2021 Snooker World Championships?"
                        choice1: "Mark Selby"
                        choice2: "Mark Williams"
                        choice3: "Judd Trump"
                        choice4: "Ronnie O'Sullivan"
                        answer: 4,
                        },
                        {
                            question: "Which boxer defeated Anthony Joshua taking his WBA, IBF and WBO heavyweight titles in London this year?"
                            choice1: "Tyson Fury"
                            choice2: "Oleksandr Usyk"
                            choice3: "Andy Ruiz Jr"
                            choice4: "Deontay Wilder"
                            answer: 2,
                            },
                            {
                                question: "Which three England players missed their penalty in the Euro 2020 finals in Wembeley"
                                choice1: "Harry Kane, Jadon Sancho, Marcus Rashford"
                                choice2: "Raheem Sterling, Bukayo Saka, Luke Shaw"
                                choice3: "Jadon Sancho, Mason Mount, Kieran Trippier"
                                choice4: "Jadon Sancho, Bukayo Saka, Marcus Rashford"
                                answer: 4,
                                },
                                {
                                    question: "Which boxer defeated Anthony Joshua taking his WBA, IBF and WBO heavyweight titles in London this year?"
                                    choice1: "Tyson Fury"
                                    choice2: "Oleksandr Usyk"
                                    choice3: "Andy Ruiz Jr"
                                    choice4: "Deontay Wilder"
                                    answer: 2,
                                    },
                                    question: "Which boxer defeated Anthony Joshua taking his WBA, IBF and WBO heavyweight titles in London this year?"
                                    choice1: "Tyson Fury"
                                    choice2: "Oleksandr Usyk"
                                    choice3: "Andy Ruiz Jr"
                                    choice4: "Deontay Wilder"
                                    answer: 2,
                                    },

]