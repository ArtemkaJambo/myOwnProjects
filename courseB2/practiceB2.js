const question = [
    {
        question: 'Він запитав мене як довго я буду в відїзді',
        answers: [
            {text: 'He asks me how long I would be away', correct: false},
            {text: 'He asked me how long I would be away', correct: true},
            {text: 'He asked how much He would be away', correct: false},
            {text: 'He wanted to go on holiday', correct: false},
        ]
    },
    {
        question: 'Я не мав поняття як довго я буду в відїзді',
        answers: [
            {text: 'I am sure about it', correct: false},
            {text: 'Have I been trying to clean this mess', correct: false},
            {text: 'I had no idea how long I would be away', correct: true},
            {text: 'I have been tried to sort out all this mess', correct: false},
        ]
    },
    {
        question: 'Знаєш, ти завжди можеш розраховувати на мою підтримку',
        answers: [
            {text: 'You wont count on my support', correct: false},
            {text: 'You can always rely on my support', correct: false},
            {text: 'You know you can always count on my support', correct: true},
            {text: 'He counted on me', correct: false},
        ]
    },
    {
        question: 'На твоєму місці я б не розраховував на це',
        answers: [
            {text: 'He was very tired', correct: false},
            {text: 'If I were you I woundnt count on it', correct: true},
            {text: 'He could rely on me ', correct: false},
            {text: 'If he doesnt do it I wouldnt count on him', correct: false},
        ]
    },
    {
        question: 'Електропостачяння виключили через шторм',
        answers: [
            {text: 'He was asked to turn on the light', correct: false},
            {text: 'Electricity supply was turned off because of the storm', correct: false},
            {text: 'This computer was turned off', correct: false},
            {text: 'The electricity supply was cut off because of the storm', correct: true},
        ]
    },
    {
        question: 'Він просто хотів втікти та заховатись',
        answers: [
            {text: 'He just wanted to run away and hide', correct: true},
            {text: 'She cries and she wants to run away this problems', correct: false},
            {text: 'He hid this thing', correct: false},
            {text: 'He needed to hide it from him', correct: false},
        ]
    },
    {
        question: 'Чи міг би ти говорити трошки голосніше, будь ласка?',
        answers: [
            {text: 'I has been learning Enlish about year', correct: false},
            {text: 'Could you speak up a bit please?', correct: true},
            {text: 'My English grew a lot', correct: false},
            {text: 'I have already learning English for a year', correct: false},
        ]
    },
    {
        question: 'Я так встомився що вирішив залишитись вдома',
        answers: [
            {text: 'She didnt want to stay there', correct: false},
            {text: 'He was tired and he decided to stay in', correct: false},
            {text: 'I was so tired that I decided to stay in', correct: true},
            {text: 'I am so tired that I decided to stay in', correct: false},
        ]
    },
    {
        question: 'З ним важко мати справу',
        answers: [
            {text: 'He wants to deal with her', correct: false},
            {text: 'Its very diffult for her', correct: false},
            {text: 'He is diffucult to deal with', correct: true},
            {text: 'He is easy to deal with', correct: false},
        ]
    },
    {
        question: 'Вона підскульзнулась та впала вниз зі сходів',
        answers: [
            {text: 'She slipped and fell down the staits', correct: true},
            {text: 'She slept and fell down the stairs', correct: false},
            {text: 'She pushed him and he fall down the stairs', correct: false},
            {text: 'She was very angry and pushed him', correct: false},
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
