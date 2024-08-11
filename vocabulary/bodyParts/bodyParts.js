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
        question: 'Голова',
        answers: [
            {text: 'Head', correct: true},
            {text: 'Hand', correct: false},
            {text: 'Foot', correct: false},
        ]
    },
    {
        question: 'Волосся',
        answers: [
            {text: 'Hair', correct: true},
            {text: 'Nose', correct: false},
            {text: 'Eye', correct: false},
        ]
    },
    {
        question: 'Вухо',
        answers: [
            {text: 'Ear', correct: true},
            {text: 'Mouth', correct: false},
            {text: 'Neck', correct: false},
        ]
    },
    {
        question: 'Око',
        answers: [
            {text: 'Eye', correct: true},
            {text: 'Hand', correct: false},
            {text: 'Foot', correct: false},
        ]
    },
    {
        question: 'Ніс',
        answers: [
            {text: 'Nose', correct: true},
            {text: 'Hair', correct: false},
            {text: 'Head', correct: false},
        ]
    },
    {
        question: 'Рот',
        answers: [
            {text: 'Mouth', correct: true},
            {text: 'Ear', correct: false},
            {text: 'Neck', correct: false},
        ]
    },
    {
        question: 'Шия',
        answers: [
            {text: 'Neck', correct: true},
            {text: 'Ear', correct: false},
            {text: 'Mouth', correct: false},
        ]
    },
    {
        question: 'Плече',
        answers: [
            {text: 'Shoulder', correct: true},
            {text: 'Arm', correct: false},
            {text: 'Leg', correct: false},
        ]
    },
    {
        question: 'Рука',
        answers: [
            {text: 'Arm', correct: true},
            {text: 'Shoulder', correct: false},
            {text: 'Leg', correct: false},
        ]
    },
    {
        question: 'Лікоть',
        answers: [
            {text: 'Elbow', correct: true},
            {text: 'Knee', correct: false},
            {text: 'Ankle', correct: false},
        ]
    },
    {
        question: 'Кисть',
        answers: [
            {text: 'Hand', correct: true},
            {text: 'Foot', correct: false},
            {text: 'Head', correct: false},
        ]
    },
    {
        question: 'Палець',
        answers: [
            {text: 'Finger', correct: true},
            {text: 'Toe', correct: false},
            {text: 'Nail', correct: false},
        ]
    },
    {
        question: 'Нога',
        answers: [
            {text: 'Leg', correct: true},
            {text: 'Arm', correct: false},
            {text: 'Shoulder', correct: false},
        ]
    },
    {
        question: 'Стопа',
        answers: [
            {text: 'Foot', correct: true},
            {text: 'Hand', correct: false},
            {text: 'Head', correct: false},
        ]
    },
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