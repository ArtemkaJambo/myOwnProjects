const question = [
    {
        question: 'Що означає вираз - Take off?',
        answers: [
            {text: 'Знімати', correct: true},
            {text: 'Одягати', correct: false},
            {text: 'Брати', correct: false},
            {text: 'Переодягатись', correct: false},
        ]
    },
    {
        question: 'Що тут сказано: How long does it take to get to school?',
        answers: [
            {text: 'Як довго ти спав?', correct: false},
            {text: 'Якій у тебе зріст?', correct: false},
            {text: 'Скільки часу в тебе забирає добратись до школи?', correct: true},
            {text: 'Де моя куртка?', correct: false},
        ]
    },
    {
        question: 'Як правильно перекласти слово - Pavement?',
        answers: [
            {text: 'Оплата', correct: false},
            {text: 'Дорожня розмітка', correct: false},
            {text: 'Дорожний знак', correct: false},
            {text: 'Тротуар', correct: true},
        ]
    },
    {
        question: 'Andy: Where ___ Adrian come from? Mark: I think he’s from Spain.',
        answers: [
            {text: 'is', correct: false},
            {text: 'does', correct: true},
            {text: 'are', correct: false},
            {text: 'do', correct: false},
        ]
    },
    {
        question: 'Що означає фраза - Look for?',
        answers: [
            {text: 'Доглядяьт', correct: false},
            {text: 'Шукати', correct: true},
            {text: 'Дивитись', correct: false},
            {text: 'Спостерігати', correct: false},
        ]
    },
    {
        question: 'Як перекласти слово - Jealous?',
        answers: [
            {text: 'Щедрий', correct: false},
            {text: 'Хитрий', correct: false},
            {text: 'Впертий', correct: false},
            {text: 'Ревнивий', correct: true},
        ]
    },
    {
        question: 'Як перекласти слово - bribery?',
        answers: [
            {text: 'Дати в борг', correct: false},
            {text: 'Відкинути', correct: false},
            {text: 'Хабарництво', correct: true},
            {text: 'Покладатись', correct: false},
        ]
    },


]

const checkLevelBtn = document.getElementById('check-button')
const checkLevelIDScreen = document.querySelector('.checkLevel')
const firstSection = document.querySelector('.first-section')


// body and text section
const bodyContainer = document.getElementById('body-container')
const listText = document.getElementById('list-text')

checkLevelBtn.addEventListener('click', function() {
    console.log('clicked');
    
    checkLevelIDScreen.style.display = 'block'
    firstSection.style.display = 'none'
    bodyContainer.style.display = 'none'
    listText.style.display = 'none'
    arrow.style.display = 'none'
})

const questionElement = document.getElementById('question')
const buttonsAnswers = document.getElementById('buttons-answer')
const nextButton = document.getElementById('nextButton')
const levelTestResult = document.getElementById('result-test')

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
    levelTestResult.style.display = 'none'
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
    nextButton.innerText = 'Повернутись на головний екран'

    if (score >= 6) {
        levelTestResult.innerHTML = 'Ваш рівень англійської мови B1 Intermediate'
    } else if (score <= 5 ) {
        levelTestResult.innerHTML = 'Ваш рівень англійської мови A2 Elementary'
    } else if (score <=2) {
        levelTestResult.innerHTML = 'Ваш рівень англійської мови Elementary'
    }
    levelTestResult.style.display = 'block'
}

nextButton.addEventListener('click', function() {
    if (currentQuestionIndex < question.length) {
        clickNextQuestion()
    } else {
    checkLevelIDScreen.style.display = 'none'
    firstSection.style.display = 'block'
    bodyContainer.style.display = 'block'
    listText.style.display = 'block'
    arrow.style.display = 'block'
    startQuiz()

    }
})

startQuiz()

