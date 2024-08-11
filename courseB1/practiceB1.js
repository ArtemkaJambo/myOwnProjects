const question = [
    {
        question: 'Я витрачаю так багато грошей останінім часом',
        answers: [
            {text: 'I has been spending so much money', correct: false},
            {text: 'Have I spent so much money?', correct: false},
            {text: 'I have been spending so much money lately', correct: true},
            {text: 'I want to spend this money', correct: false},
        ]
    },
    {
        question: 'Я намагаюсь розібратись в всьому цьому безпорядку останні два дні',
        answers: [
            {text: 'I am sure about it', correct: false},
            {text: 'Have I been trying to clean this mess', correct: false},
            {text: 'I have been tried to sort out all this mess', correct: false},
            {text: 'I have been trying to sort out all this mess', correct: true},
        ]
    },
    {
        question: 'Я намаюсь розчистити весь цей безпорядок з вчорашнього дня',
        answers: [
            {text: 'Have you ever wanted to do it?', correct: false},
            {text: 'I have been trying to clear up all this mess since yesterday', correct: true},
            {text: 'Has he already done it?', correct: false},
            {text: 'I look such a problem exists', correct: false},
        ]
    },
    {
        question: 'Я неймовірно встомився останнім часом',
        answers: [
            {text: 'I have been incredibly tired lately', correct: true},
            {text: 'I am very tired', correct: false},
            {text: 'Was he tired?', correct: false},
            {text: 'I think they are tired', correct: false},
        ]
    },
    {
        question: 'Як довго ти вчиш англійську?',
        answers: [
            {text: 'Have you ever been to Spain?', correct: false},
            {text: 'I have already been there', correct: false},
            {text: 'How long have you been learning English?', correct: true},
            {text: 'How long has he been learning English?', correct: false},
        ]
    },
    {
        question: 'Я вивчаю англійську пару років',
        answers: [
            {text: 'I have been learning Enlish for a couple of years', correct: true},
            {text: 'I am learning Enlish for a couple of years', correct: false},
            {text: 'We have already been here', correct: false},
            {text: 'Has you ever been abroad?', correct: false},
        ]
    },
    {
        question: 'Я вивчаю англійську біля року',
        answers: [
            {text: 'I have been learning English for about a year', correct: true},
            {text: 'I has been learning Enlish about year', correct: false},
            {text: 'My English grew a lot', correct: false},
            {text: 'I have already learning English for a year', correct: false},
        ]
    },
    {
        question: 'Коли ти почав вивчати англійську?',
        answers: [
            {text: 'I woke up at six onclock in the morning', correct: false},
            {text: 'When did you start learning English?', correct: true},
            {text: 'When were you start learning English?', correct: false},
            {text: 'When will you start learning English?', correct: false},
        ]
    },
    {
        question: 'Як довго ти чекаєш на мене?',
        answers: [
            {text: 'How long had you been waiting for me?', correct: false},
            {text: 'Have you already found this product?', correct: false},
            {text: 'Have long have you been waiting for me?', correct: true},
            {text: 'We need to go to that place', correct: false},
        ]
    },
    {
        question: 'Я чекаю на тебе пів години',
        answers: [
            {text: 'I have been waiting for you for half an hour', correct: true},
            {text: 'Can you wait for me a bit?', correct: false},
            {text: 'We were forced to do it', correct: false},
            {text: 'He waited for me for half an hour', correct: false},
        ]
    },
    
]

const practiceQuiz = document.getElementById('practiceQuiz')
const practiceQuestionID = document.getElementById('practiceQuestionID')
const practiceButtonsAnswers = document.getElementById('practice-buttons-answer')
const practiceNextButton = document.getElementById('practice-nextButton')
const practiceResultTest = document.getElementById('practice-result-test')


let currentQuestionIndex = 0
let score = 0

function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    practiceNextButton.innerHTML = 'Далі'
    showQuestion()
}

function showQuestion() {
    resetQuiz()
    let currentQuestion = question[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    practiceQuestionID.innerHTML = questionNumber + '. ' + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button')
        button.classList.add('btn')
        button.innerHTML = answer.text
        practiceButtonsAnswers.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
    })
    practiceNextButton.style.display = 'none'
    // levelTestResult.style.display = 'none'
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
    Array.from(practiceButtonsAnswers.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        }
        button.disabled = true
    })
    practiceNextButton.style.display = 'block'
}

function resetQuiz() {
    while (practiceButtonsAnswers.firstChild) {
        practiceButtonsAnswers.removeChild(practiceButtonsAnswers.firstChild)
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
    practiceQuestionID.innerHTML = `Ви набрали ${score} правильних відповідей з ${question.length}`
    practiceNextButton.innerText = 'Повернутись на головний екран'

    if (score >= 15) {
        practiceResultTest.innerHTML = 'Неперевершенно! Ви дали більш ніж 15 правильних відвовідей!'
    } else if (score >= 12) {
        practiceResultTest.innerHTML = 'Супер! Але ви маєте деякі помилки на які варто звернути увагу!'
    } else if (score <= 7 ) {
        practiceResultTest.innerHTML = 'Непогано! Але все ж таки маєте багато помилок, повторіть теорію'
    } else if (score <=2) {
        practiceResultTest.innerHTML = 'Нажаль ваш результат дуже поганий :( Варто краще вивчити теорію'
    }
    practiceResultTest.style.display = 'block'
    
}

practiceNextButton.addEventListener('click', function() {
    if (currentQuestionIndex < question.length) {
        clickNextQuestion()
    } else {
    window.location.href = '../index.html';
    }
})

startQuiz()
