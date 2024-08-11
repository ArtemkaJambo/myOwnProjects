const question = [
    {
        question: 'Він порадив мені зробити це',
        answers: [
            {text: 'He advises me to do it', correct: false},
            {text: 'He advised me to do it', correct: true},
            {text: 'He is advise me to do it', correct: false},
            {text: 'I advised to do it', correct: false},
        ]
    },
    {
        question: 'Вона порадила мені прочитати цю книгу',
        answers: [
            {text: 'I would like to read this book', correct: false},
            {text: 'She doesnt advise to read this book', correct: false},
            {text: 'He was advised to read this static', correct: false},
            {text: 'She advised me to read this article', correct: true},
        ]
    },
    {
        question: 'Я дуже хотів відвідати це місце',
        answers: [
            {text: 'Do you want to visit this place?', correct: false},
            {text: 'I really wanted to visit this place', correct: true},
            {text: 'I am very wanted to visit this place', correct: false},
            {text: 'I am not wanted to visit this place', correct: false},
        ]
    },
    {
        question: 'Я хотів поїхати у відпустку',
        answers: [
            {text: 'I wanted to go on holiday', correct: true},
            {text: 'I want to go on holiday', correct: false},
            {text: 'I would like to go on holiday', correct: false},
            {text: 'Did you want to go on holiday?', correct: false},
        ]
    },
    {
        question: 'Я подивився на це ще один раз',
        answers: [
            {text: 'I know that It can happen to each of us', correct: false},
            {text: 'I knows that It can happen to each of us', correct: false},
            {text: 'I looked at it one more time', correct: true},
            {text: 'I know that that It can happens to each of us', correct: false},
        ]
    },
    {
        question: 'Я подивився на екран',
        answers: [
            {text: 'I want to look at the screen', correct: false},
            {text: 'I see at the screen', correct: false},
            {text: 'I look at the screen', correct: false},
            {text: 'I looked at the screen', correct: true},
        ]
    },
    {
        question: 'Я користувався цією послугою час від часу',
        answers: [
            {text: 'How often do you use it?', correct: false},
            {text: 'I used this service from time to time', correct: true},
            {text: 'Its very important', correct: false},
            {text: 'I use this service from time to time', correct: false},
        ]
    },
    {
        question: 'Я спілкувався з людьми з різних країн',
        answers: [
            {text: 'It are the best choice', correct: false},
            {text: 'I think Its the best choice', correct: false},
            {text: 'I communicated with people from different countries', correct: true},
            {text: 'Its seem me that Its the best choice', correct: false},
        ]
    },
    {
        question: 'Я спілкувався з іноземцями',
        answers: [
            {text: 'It seems to me that It are posibble', correct: false},
            {text: 'I communicated with foreigners', correct: true},
            {text: 'I think Its possible', correct: false},
            {text: 'Its seems that Its possible', correct: false},
        ]
    },
    {
        question: 'Я був на виставці та спілкувався з іноземцями',
        answers: [
            {text: 'I was at the exhibition and communicated with foreigners', correct: true},
            {text: 'I were at the exhibition and communicated with foreigners', correct: false},
            {text: 'Were you visit an exhibiton?', correct: false},
            {text: 'I would like to visit exhibition', correct: false},
        ]
    },
    {
        question: 'Я працював майже кожен день',
        answers: [
            {text: 'I would not work every day', correct: false},
            {text: 'I works every day', correct: false},
            {text: 'He works almost every day', correct: false},
            {text: 'I worked almost every day', correct: true},
        ]
    },
    {
        question: 'Вона працювала консультантом',
        answers: [
            {text: 'She worked as a consultant', correct: true},
            {text: 'She doesnt want to work as a colsultant', correct: false},
            {text: 'She works as a colsultant', correct: false},
            {text: 'Would you like to work as a consultant?', correct: false},
        ]
    },
    {
        question: 'Він працював менеджером по продажам',
        answers: [
            {text: 'He worked as a sales manager', correct: true},
            {text: 'Did he work as a sales manager?', correct: false},
            {text: 'This sales manager is very good', correct: false},
            {text: 'Can you help me?', correct: false},
        ]
    },
    {
        question: 'Він перезвонив мені годину назад',
        answers: [
            {text: 'I waited for your call', correct: false},
            {text: 'He called me back an hour ago', correct: true},
            {text: 'He calls me an hour age', correct: false},
            {text: 'She wants to call me', correct: false},
        ]
    },
    {
        question: 'Я старався зробити все можливе щоб досягнути цієї цілі',
        answers: [
            {text: 'He wanted to call her', correct: false},
            {text: 'She is trying to achieve her aim', correct: false},
            {text: 'I tried to do my best to achieve this aim', correct: true},
            {text: 'He tries to do him best in this situation', correct: false},
        ]
    },
    {
        question: 'Я старався зробити все можливе щоб покращити свій попердній результат',
        answers: [
            {text: 'I tried to do my best to improve my previous result', correct: true},
            {text: 'I was trying to imprive my previous result', correct: false},
            {text: 'Did he want to improve the result?', correct: false},
            {text: 'He is a very pretty man', correct: false},
        ]
    },
    {
        question: 'Я задав йому кілька питань',
        answers: [
            {text: 'She would like to ask me this question', correct: false},
            {text: 'He asks me about it', correct: false},
            {text: 'I asked him a couple of questions', correct: true},
            {text: 'Did you want to ask about that situation?', correct: false},
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
