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
        question: 'Academic',
        answers: [
            {text: 'Академічний', correct: true},
            {text: 'Підхід', correct: false},
            {text: 'Аргумент', correct: false},
        ]
    },
    {
        question: 'Achieve',
        answers: [
            {text: 'Досягати', correct: true},
            {text: 'Припускати', correct: false},
            {text: 'Авторитет', correct: false},
        ]
    },
    {
        question: 'Analyse',
        answers: [
            {text: 'Аналізувати', correct: true},
            {text: 'Користь', correct: false},
            {text: 'Виклик', correct: false},
        ]
    },
    {
        question: 'Assess',
        answers: [
            {text: 'Оцінювати', correct: true},
            {text: 'Заключати', correct: false},
            {text: 'Розглядати', correct: false},
        ]
    },
    {
        question: 'Assume',
        answers: [
            {text: 'Припускати', correct: true},
            {text: 'Порівняння', correct: false},
            {text: 'Сприяти', correct: false},
        ]
    },
    {
        question: 'Authority',
        answers: [
            {text: 'Авторитет', correct: true},
            {text: 'Культура', correct: false},
            {text: 'Демонструвати', correct: false},
        ]
    },
    {
        question: 'Benefit',
        answers: [
            {text: 'Користь', correct: true},
            {text: 'Економічний', correct: false},
            {text: 'Оцінювати', correct: false},
        ]
    },
    {
        question: 'Challenge',
        answers: [
            {text: 'Виклик', correct: true},
            {text: 'Доказ', correct: false},
            {text: 'Глобальний', correct: false},
        ]
    },
    {
        question: 'Conclude',
        answers: [
            {text: 'Заключати', correct: true},
            {text: 'Вплив', correct: false},
            {text: 'Використовувати', correct: false},
        ]
    },
    {
        question: 'Consider',
        answers: [
            {text: 'Розглядати', correct: true},
            {text: 'Промисловість', correct: false},
            {text: 'Впливати', correct: false},
        ]
    },
    {
        question: 'Contrast',
        answers: [
            {text: 'Контраст', correct: true},
            {text: 'Метод', correct: false},
            {text: 'Об\'єктивний', correct: false},
        ]
    },
    {
        question: 'Contribute',
        answers: [
            {text: 'Сприяти', correct: true},
            {text: 'Політика', correct: false},
            {text: 'Ресурс', correct: false},
        ]
    },
    {
        question: 'Culture',
        answers: [
            {text: 'Культура', correct: true},
            {text: 'Значущий', correct: false},
            {text: 'Стратегія', correct: false},
        ]
    },
    {
        question: 'Demonstrate',
        answers: [
            {text: 'Демонструвати', correct: true},
            {text: 'Академічний', correct: false},
            {text: 'Досягати', correct: false},
        ]
    },
    {
        question: 'Economic',
        answers: [
            {text: 'Економічний', correct: true},
            {text: 'Аналізувати', correct: false},
            {text: 'Оцінювати', correct: false},
        ]
    },
    {
        question: 'Evaluate',
        answers: [
            {text: 'Оцінювати', correct: true},
            {text: 'Припускати', correct: false},
            {text: 'Авторитет', correct: false},
        ]
    },
    {
        question: 'Evidence',
        answers: [
            {text: 'Доказ', correct: true},
            {text: 'Користь', correct: false},
            {text: 'Виклик', correct: false},
        ]
    },
    {
        question: 'Global',
        answers: [
            {text: 'Глобальний', correct: true},
            {text: 'Заключати', correct: false},
            {text: 'Розглядати', correct: false},
        ]
    },
    {
        question: 'Impact',
        answers: [
            {text: 'Вплив', correct: true},
            {text: 'Контраст', correct: false},
            {text: 'Сприяти', correct: false},
        ]
    },
    {
        question: 'Implement',
        answers: [
            {text: 'Впроваджувати', correct: true},
            {text: 'Культура', correct: false},
            {text: 'Демонструвати', correct: false},
        ]
    },
    {
        question: 'Industry',
        answers: [
            {text: 'Промисловість', correct: true},
            {text: 'Економічний', correct: false},
            {text: 'Оцінювати', correct: false},
        ]
    },
    {
        question: 'Influence',
        answers: [
            {text: 'Впливати', correct: true},
            {text: 'Доказ', correct: false},
            {text: 'Глобальний', correct: false},
        ]
    },
    {
        question: 'Method',
        answers: [
            {text: 'Метод', correct: true},
            {text: 'Вплив', correct: false},
            {text: 'Впроваджувати', correct: false},
        ]
    },
    {
        question: 'Objective',
        answers: [
            {text: 'Об\'єктивний', correct: true},
            {text: 'Впроваджувати', correct: false},
            {text: 'Промисловість', correct: false},
        ]
    },
    {
        question: 'Policy',
        answers: [
            {text: 'Політика', correct: true},
            {text: 'Впливати', correct: false},
            {text: 'Глобальний', correct: false},
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