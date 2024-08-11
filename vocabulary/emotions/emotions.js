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
        question: 'Happy',
        answers: [
            {text: 'Щасливий', correct: true},
            {text: 'Sad', correct: false},
            {text: 'Angry', correct: false},
        ]
    },
    {
        question: 'Sad',
        answers: [
            {text: 'Сумний', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Angry', correct: false},
        ]
    },
    {
        question: 'Angry',
        answers: [
            {text: 'Злений', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Sad', correct: false},
        ]
    },
    {
        question: 'Excited',
        answers: [
            {text: 'Збуджений', correct: true},
            {text: 'Calm', correct: false},
            {text: 'Surprised', correct: false},
        ]
    },
    {
        question: 'Nervous',
        answers: [
            {text: 'Нервовий', correct: true},
            {text: 'Calm', correct: false},
            {text: 'Excited', correct: false},
        ]
    },
    {
        question: 'Calm',
        answers: [
            {text: 'Спокійний', correct: true},
            {text: 'Nervous', correct: false},
            {text: 'Excited', correct: false},
        ]
    },
    {
        question: 'Surprised',
        answers: [
            {text: 'Здивований', correct: true},
            {text: 'Calm', correct: false},
            {text: 'Excited', correct: false},
        ]
    },
    {
        question: 'Confused',
        answers: [
            {text: 'Збентежений', correct: true},
            {text: 'Amused', correct: false},
            {text: 'Proud', correct: false},
        ]
    },
    {
        question: 'Afraid',
        answers: [
            {text: 'Ляканий', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Grateful', correct: false},
        ]
    },
    {
        question: 'Grateful',
        answers: [
            {text: 'Вдячний', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Afraid', correct: false},
        ]
    },
    {
        question: 'Embarrassed',
        answers: [
            {text: 'Сором\'язливий', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Angry', correct: false},
        ]
    },
    {
        question: 'Proud',
        answers: [
            {text: 'Гордий', correct: true},
            {text: 'Confused', correct: false},
            {text: 'Happy', correct: false},
        ]
    },
    {
        question: 'Jealous',
        answers: [
            {text: 'Заздрісний', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Surprised', correct: false},
        ]
    },
    {
        question: 'Lonely',
        answers: [
            {text: 'Самотній', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Sad', correct: false},
        ]
    },
    {
        question: 'Content',
        answers: [
            {text: 'Задоволений', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Nervous', correct: false},
        ]
    },
    {
        question: 'Bored',
        answers: [
            {text: 'Нудьгує', correct: true},
            {text: 'Excited', correct: false},
            {text: 'Happy', correct: false},
        ]
    },
    {
        question: 'Amused',
        answers: [
            {text: 'Розважений', correct: true},
            {text: 'Confused', correct: false},
            {text: 'Happy', correct: false},
        ]
    },
    {
        question: 'Optimistic',
        answers: [
            {text: 'Оптимістичний', correct: true},
            {text: 'Pessimistic', correct: false},
            {text: 'Happy', correct: false},
        ]
    },
    {
        question: 'Pessimistic',
        answers: [
            {text: 'Песимістичний', correct: true},
            {text: 'Optimistic', correct: false},
            {text: 'Happy', correct: false},
        ]
    },
    {
        question: 'Envious',
        answers: [
            {text: 'Заздрісний', correct: true},
            {text: 'Happy', correct: false},
            {text: 'Nervous', correct: false},
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