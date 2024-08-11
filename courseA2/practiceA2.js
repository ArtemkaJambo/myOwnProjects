const question = [
    {
        question: 'Ти коли небудь був у Англії?',
        answers: [
            {text: 'You have ever been to America?', correct: false},
            {text: 'Have you ever been to England?', correct: true},
            {text: 'I would like to visit this country', correct: false},
            {text: 'Has you ever been to this country?', correct: false},
        ]
    },
    {
        question: 'Ти коли небудь був в цій країні?',
        answers: [
            {text: 'I have already been to this country', correct: false},
            {text: 'Had you ever been there?', correct: false},
            {text: 'Have you ever been to this country?', correct: true},
            {text: 'I want say that Its inspires me', correct: false},
        ]
    },
    {
        question: 'Ти був у Америці в минулому році?',
        answers: [
            {text: 'I see so problem exist', correct: false},
            {text: 'I see such problem exists', correct: false},
            {text: 'I look such a problem exists', correct: false},
            {text: 'Were you in America last year?', correct: true},
        ]
    },
    {
        question: 'Ти був в Китаї два роки тому?',
        answers: [
            {text: 'Did you in China two years ago?', correct: false},
            {text: 'Were you in China two years ago?', correct: true},
            {text: 'Was you in China three years ago?', correct: false},
            {text: 'I were in China two four years ago', correct: false},
        ]
    },
    {
        question: 'Ти був у Індії?',
        answers: [
            {text: 'Have you ever been to England?', correct: false},
            {text: 'I have already been there', correct: false},
            {text: 'Have you been to India?', correct: true},
            {text: 'We need to go that place', correct: false},
        ]
    },
    {
        question: 'Я думаю, що все залежить від нас',
        answers: [
            {text: 'He has already been there', correct: false},
            {text: 'Has you ever been abroad?', correct: false},
            {text: 'We have already been here', correct: false},
            {text: 'Have you ever been abroad?', correct: true},
        ]
    },
    {
        question: 'Ти коли небуль був в англомовній країні? Ні але це в моїх планах',
        answers: [
            {text: 'Have you ever been to an English-speaking country? Not yet but its in my plans', correct: true},
            {text: 'Would you like to visit an English-speaking country', correct: false},
            {text: 'Has you ever been to English-speaking country? Not yet but its in my plan', correct: false},
            {text: 'I seem that everything depends on us', correct: false},
        ]
    },
    {
        question: 'Мені здається, що це найкращий вибір',
        answers: [
            {text: 'It are the best choice', correct: false},
            {text: 'It seems to me that Its the best choice', correct: true},
            {text: 'Its seem me that Its the best choice', correct: false},
            {text: 'I think Its the best choice', correct: false},
        ]
    },
    {
        question: 'Я щойно прибув в Англію',
        answers: [
            {text: 'We will arrive to this country', correct: false},
            {text: 'I have just arrived in England', correct: true},
            {text: 'I think Its possible', correct: false},
            {text: 'I has just arrived in Spain', correct: false},
        ]
    },
    {
        question: 'Я щойно прибув в аєропорт',
        answers: [
            {text: 'We have just arrived to this place', correct: false},
            {text: 'I almost arrive at the aiport', correct: false},
            {text: 'I have just arrived at the airport', correct: true},
            {text: 'This place is so beatifully', correct: false},
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
