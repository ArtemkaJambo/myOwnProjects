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
        question: 'Кіт',
        answers: [
            {text: 'Cat ', correct: true},
            {text: 'Dog', correct: false},
            {text: 'duck', correct: false},
        ]
    },
    {
        question: 'Собака',
        answers: [
            {text: 'goat', correct: false},
            {text: 'cow', correct: false},
            {text: 'dog', correct: true},
        ]
    },
    {
        question: 'Гусак',
        answers: [
            {text: 'horse', correct: false},
            {text: 'goose', correct: true},
            {text: 'cow', correct: false},
        ]
    },
    {
        question: 'Курка',
        answers: [
            {text: 'pig', correct: false},
            {text: 'hen', correct: true},
            {text: 'apple', correct: false},
        ]
    },
    {
        question: 'Папуга',
        answers: [
            {text: 'parrot', correct: true},
            {text: 'chicken', correct: false},
            {text: 'rat', correct: false},
        ]
    },
    {
        question: 'Щур',
        answers: [
            {text: 'dog', correct: false},
            {text: 'sheep', correct: false},
            {text: 'rat', correct: true},
        ]
    },
    {
        question: 'Вівця',
        answers: [
            {text: 'sheep', correct: false},
            {text: 'cow', correct: false},
            {text: 'parrot', correct: true},
        ]
    },
    {
        question: 'Цап',
        answers: [
            {text: 'goat', correct: true},
            {text: 'duck', correct: false},
            {text: 'cat', correct: false},
        ]
    },
    {
        question: 'Качка',
        answers: [
            {text: 'pig', correct: false},
            {text: 'duck', correct: true},
            {text: 'rat', correct: false},
        ]
    },
    {
        question: 'Свиня',
        answers: [
            {text: 'pig', correct: true},
            {text: 'goat', correct: false},
            {text: 'goose', correct: false},
        ]
    },
    {
        question: 'Кінь',
        answers: [
            {text: 'rat', correct: false},
            {text: 'horse', correct: true},
            {text: 'sheep', correct: false},
        ]
    },

]

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