const question = [
    {
        question: 'Я хочу сказати, що це справді має значення',
        answers: [
            {text: 'I want to say that it really matters', correct: true},
            {text: 'I want said it really matter', correct: false},
            {text: 'I want to say that it really matter', correct: false},
            {text: 'I want that its really matters', correct: false},
        ]
    },
    {
        question: 'Я хочу сказати тобі, що це справді надихає мене.',
        answers: [
            {text: 'I would like you its really inspire me ', correct: false},
            {text: 'I want to say you that it really inspires me', correct: false},
            {text: 'I want to tell you that it really inspires me', correct: true},
            {text: 'I want say that Its inspires me', correct: false},
        ]
    },
    {
        question: 'Я бачу, така проблема існує',
        answers: [
            {text: 'I see so problem exist', correct: false},
            {text: 'I see such problem exists', correct: false},
            {text: 'I look such a problem exists', correct: false},
            {text: 'I see such a problem exists', correct: true},
        ]
    },
    {
        question: 'Я знаю, що така теорія існує',
        answers: [
            {text: 'I known such such theory exist', correct: false},
            {text: 'I know that such a theory exists', correct: true},
            {text: 'I know that so theory exists', correct: false},
            {text: 'I knows that such a theory exist', correct: false},
        ]
    },
    {
        question: 'Я розумію, що це може статись з кожним з нас',
        answers: [
            {text: 'I know that It can happen to each of us', correct: false},
            {text: 'I understand that It can happen to each of us', correct: true},
            {text: 'I knows that It can happen to each of us', correct: false},
            {text: 'I know that that It can happens to each of us', correct: false},
        ]
    },
    {
        question: 'Я думаю, що все залежить від нас',
        answers: [
            {text: 'I think that everything depend on us', correct: false},
            {text: 'I think that Its everything depend on us', correct: false},
            {text: 'I think that It everything depends on us', correct: false},
            {text: 'I think that everything depends on us', correct: true},
        ]
    },
    {
        question: 'Мені здається, що не все залежить від нас',
        answers: [
            {text: 'It seems me that everything depend on us', correct: false},
            {text: 'Its seem to me that everything depend on us', correct: false},
            {text: 'It seems to me that not everything depends on us', correct: true},
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
        question: 'Мені здається, що це можливо',
        answers: [
            {text: 'It seems to me Its really possible', correct: true},
            {text: 'It seems to me that It are posibble', correct: false},
            {text: 'I think Its possible', correct: false},
            {text: 'Its seems that Its possible', correct: false},
        ]
    },
    {
        question: 'Я не думаю, що це справді працює ',
        answers: [
            {text: 'I know that It doesnt work', correct: false},
            {text: 'I dont think that Its really work', correct: false},
            {text: 'I dont think that It really works', correct: true},
            {text: 'I understand How it works', correct: false},
        ]
    },
    {
        question: 'Я не думаю, що цей метод справді працює',
        answers: [
            {text: 'It seems to me that this method really works', correct: false},
            {text: 'Im sure that Its really work', correct: false},
            {text: 'I doesnt think that this method really works', correct: false},
            {text: 'I dont think that this method really works', correct: true},
        ]
    },
    {
        question: 'Ти знаєш, я також думаю так',
        answers: [
            {text: 'I know I think the same', correct: false},
            {text: 'You know I also think so', correct: true},
            {text: 'You understand I also think so', correct: false},
            {text: 'You knows I also think so', correct: false},
        ]
    },
    {
        question: 'Ти знаєш, в мене така ж думка',
        answers: [
            {text: 'I have the same opinion', correct: false},
            {text: 'We know about this opinion', correct: false},
            {text: 'You know I has this onion', correct: false},
            {text: 'You know I have the same opinion', correct: true},
        ]
    },
    {
        question: 'Я відчуваю що я правий',
        answers: [
            {text: 'I feel that Im right', correct: true},
            {text: 'I have the same opinion', correct: false},
            {text: 'We know about this opinion', correct: false},
            {text: 'You know I has this onion', correct: false},
        ]
    },
    {
        question: 'Я відчуваю що він дуже надійна людина',
        answers: [
            {text: 'I felt He is a very reliable person', correct: false},
            {text: 'I feel that He is a very reliable person', correct: true},
            {text: 'I feels He is a very reliable person', correct: false},
            {text: 'He is feel a very reliable man', correct: false},
        ]
    },
    {
        question: 'Я думаю що це дуже важлива річ',
        answers: [
            {text: 'This thing is very important', correct: false},
            {text: 'He is think a very important', correct: false},
            {text: 'I think Its a very important think', correct: false},
            {text: 'I think that Its a very important think', correct: true},
        ]
    },
    {
        question: 'Я думаю що це дуже важлива річ',
        answers: [
            {text: 'I think Its a very important thing', correct: true},
            {text: 'This thing is very important', correct: false},
            {text: 'He is think a very important', correct: false},
            {text: 'I thought Its a very important thing', correct: false},
        ]
    },
    {
        question: 'Я справді думаю, що це доволі добре особливо спочатку',
        answers: [
            {text: 'Its very good espesially in the beginning', correct: false},
            {text: 'I really think that Its quite good especially in the beginning', correct: true},
            {text: 'I dont really think that Its quite good expecially in the beginning', correct: false},
            {text: 'I thinks that Its very good in the beginning', correct: false},
        ]
    },
    {
        question: 'Я знаю що він працює менеджером',
        answers: [
            {text: 'He works a manager', correct: false},
            {text: 'I knows that he work a manager', correct: false},
            {text: 'I know that he works as a manager', correct: true},
            {text: 'Im know He works as a manager', correct: false},
        ]
    },
    {
        question: 'Ти знаєш це чудове почуття',
        answers: [
            {text: 'You know Its a wonderful feeling', correct: true},
            {text: 'You knows Its a perfect feeling', correct: false},
            {text: 'Its a wonderful feeling', correct: false},
            {text: 'This feeling is wonderful', correct: false},
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
