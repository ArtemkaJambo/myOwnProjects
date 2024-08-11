const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal')
})


const questionElement = document.getElementById('question')
const buttonsAnswers = document.getElementById('buttons-answer')
const nextButton = document.getElementById('nextButton')
const question = [
    {
        question: 'Break',
        answers: [
            {text: 'Broke', correct: true},
            {text: 'Broken', correct: false},
            {text: 'Breaked', correct: false},
        ]
    },
    {
        question: 'Choose',
        answers: [
            {text: 'Chose', correct: true},
            {text: 'Chosen', correct: false},
            {text: 'Choose', correct: false},
        ]
    },
    {
        question: 'Drink',
        answers: [
            {text: 'Drank', correct: true},
            {text: 'Drunk', correct: false},
            {text: 'Drinked', correct: false},
        ]
    },
    {
        question: 'Forget',
        answers: [
            {text: 'Forgot', correct: true},
            {text: 'Forgotten', correct: false},
            {text: 'Forgetted', correct: false},
        ]
    },
    {
        question: 'Go',
        answers: [
            {text: 'Went', correct: true},
            {text: 'Gone', correct: false},
            {text: 'Goed', correct: false},
        ]
    },
    {
        question: 'Meet',
        answers: [
            {text: 'Met', correct: true},
            {text: 'Meeted', correct: false},
            {text: 'Meted', correct: false},
        ]
    },
    {
        question: 'Run',
        answers: [
            {text: 'Ran', correct: true},
            {text: 'Runned', correct: false},
            {text: 'Run', correct: false},
        ]
    },
    {
        question: 'Sing',
        answers: [
            {text: 'Sang', correct: true},
            {text: 'Sung', correct: false},
            {text: 'Sing', correct: false},
        ]
    },
    {
        question: 'Take',
        answers: [
            {text: 'Took', correct: true},
            {text: 'Taken', correct: false},
            {text: 'Take', correct: false},
        ]
    },
    {
        question: 'Write',
        answers: [
            {text: 'Wrote', correct: true},
            {text: 'Written', correct: false},
            {text: 'Writed', correct: false},
        ]
    },
    {
        question: 'Speak',
        answers: [
            {text: 'Spoke', correct: true},
            {text: 'Spoken', correct: false},
            {text: 'Speaked', correct: false},
        ]
    },
    {
        question: 'Drive',
        answers: [
            {text: 'Drove', correct: true},
            {text: 'Driven', correct: false},
            {text: 'Drive', correct: false},
        ]
    },
    {
        question: 'Begin',
        answers: [
            {text: 'Began', correct: true},
            {text: 'Begun', correct: false},
            {text: 'Beginned', correct: false},
        ]
    },
    {
        question: 'Swim',
        answers: [
            {text: 'Swam', correct: true},
            {text: 'Swum', correct: false},
            {text: 'Swimmed', correct: false},
        ]
    },
    {
        question: 'Fly',
        answers: [
            {text: 'Flew', correct: true},
            {text: 'Flown', correct: false},
            {text: 'Flyed', correct: false},
        ]
    }
];

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = 'Далі' 
    showQuestion()
}

function showQuestion() {
    resetQuiz()
    let currentQuestion = question[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.innerHTML = answer.text
        buttonsAnswers.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
    nextButton.style.display = 'none'
}

function selectAnswer(e) {
    const isCorrect = e.target.dataset.correct === 'true'
    if (isCorrect) {
        e.target.classList.add('correct')
        score++
        console.log('1');
    } else {
        e.target.classList.add('incorrect')
        console.log('2');
    }
    Array.from(buttonsAnswers.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    nextButton.style.display = 'block'
}

function resetQuiz() {
    while (buttonsAnswers.firstChild) {
        buttonsAnswers.removeChild(buttonsAnswers.firstChild)
    }
}
function clickNextQuestion() {
    currentQuestionIndex++
    if (currentQuestionIndex < question.length) {
        showQuestion()
    } else {
        showScore()
        
    }
}

function showScore() {
    resetQuiz()
    questionElement.innerHTML = `Ви набрали ${score} правильних відповідей з ${question.length}`
    nextButton.innerText = 'Повернутись до наборів'

    
}

nextButton.addEventListener('click', function() {
    if (currentQuestionIndex < question.length) {
        clickNextQuestion()
    } else {
    window.location.href = '../vocabulary.html'

    }
})

startQuiz()