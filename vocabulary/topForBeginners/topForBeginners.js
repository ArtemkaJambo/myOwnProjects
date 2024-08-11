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
        question: 'Книга',
        answers: [
            {text: 'Book', correct: true},
            {text: 'Chair', correct: false},
            {text: 'Table', correct: false},
        ]
    },
    {
        question: 'Стіл',
        answers: [
            {text: 'Table', correct: true},
            {text: 'Door', correct: false},
            {text: 'Window', correct: false},
        ]
    },
    {
        question: 'Двері',
        answers: [
            {text: 'Door', correct: true},
            {text: 'Window', correct: false},
            {text: 'Pen', correct: false},
        ]
    },
    {
        question: 'Вікно',
        answers: [
            {text: 'Window', correct: true},
            {text: 'Book', correct: false},
            {text: 'Table', correct: false},
        ]
    },
    {
        question: 'Ручка',
        answers: [
            {text: 'Pen', correct: true},
            {text: 'Pencil', correct: false},
            {text: 'Book', correct: false},
        ]
    },
    {
        question: 'Ложка',
        answers: [
            {text: 'Spoon', correct: true},
            {text: 'Fork', correct: false},
            {text: 'Knife', correct: false},
        ]
    },
    {
        question: 'Вилка',
        answers: [
            {text: 'Fork', correct: true},
            {text: 'Spoon', correct: false},
            {text: 'Knife', correct: false},
        ]
    },
    {
        question: 'Ніж',
        answers: [
            {text: 'Knife', correct: true},
            {text: 'Spoon', correct: false},
            {text: 'Fork', correct: false},
        ]
    },
    {
        question: 'Годинник',
        answers: [
            {text: 'Clock', correct: true},
            {text: 'Watch', correct: false},
            {text: 'Timer', correct: false},
        ]
    },
    {
        question: 'Шапка',
        answers: [
            {text: 'Hat', correct: true},
            {text: 'Shoe', correct: false},
            {text: 'Sock', correct: false},
        ]
    },
    {
        question: 'Взуття',
        answers: [
            {text: 'Shoe', correct: true},
            {text: 'Hat', correct: false},
            {text: 'Sock', correct: false},
        ]
    },
    {
        question: 'Носок',
        answers: [
            {text: 'Sock', correct: true},
            {text: 'Shoe', correct: false},
            {text: 'Hat', correct: false},
        ]
    },
    {
        question: 'Ключ',
        answers: [
            {text: 'Key', correct: true},
            {text: 'Lock', correct: false},
            {text: 'Door', correct: false},
        ]
    },
    {
        question: 'Книжка',
        answers: [
            {text: 'Booklet', correct: true},
            {text: 'Magazine', correct: false},
            {text: 'Newspaper', correct: false},
        ]
    },
    {
        question: 'Лампа',
        answers: [
            {text: 'Lamp', correct: true},
            {text: 'Light', correct: false},
            {text: 'Bulb', correct: false},
        ]
    },
    {
        question: 'Комп\'ютер',
        answers: [
            {text: 'Computer', correct: true},
            {text: 'Laptop', correct: false},
            {text: 'Tablet', correct: false},
        ]
    },
    {
        question: 'Іграшка',
        answers: [
            {text: 'Toy', correct: true},
            {text: 'Game', correct: false},
            {text: 'Doll', correct: false},
        ]
    },
    {
        question: 'Кава',
        answers: [
            {text: 'Coffee', correct: true},
            {text: 'Tea', correct: false},
            {text: 'Milk', correct: false},
        ]
    },
    {
        question: 'Вода',
        answers: [
            {text: 'Water', correct: true},
            {text: 'Juice', correct: false},
            {text: 'Soda', correct: false},
        ]
    },
    {
        question: 'Кошик',
        answers: [
            {text: 'Basket', correct: true},
            {text: 'Bag', correct: false},
            {text: 'Box', correct: false},
        ]
    },
    {
        question: 'Інструмент',
        answers: [
            {text: 'Tool', correct: true},
            {text: 'Instrument', correct: false},
            {text: 'Device', correct: false},
        ]
    },
    {
        question: 'Сонце',
        answers: [
            {text: 'Sun', correct: true},
            {text: 'Moon', correct: false},
            {text: 'Star', correct: false},
        ]
    },
    {
        question: 'Місяць',
        answers: [
            {text: 'Moon', correct: true},
            {text: 'Sun', correct: false},
            {text: 'Star', correct: false},
        ]
    },
    {
        question: 'Зірка',
        answers: [
            {text: 'Star', correct: true},
            {text: 'Sun', correct: false},
            {text: 'Moon', correct: false},
        ]
    },
    {
        question: 'Телефон',
        answers: [
            {text: 'Phone', correct: true},
            {text: 'Tablet', correct: false},
            {text: 'Computer', correct: false},
        ]
    },
    {
        question: 'Футболка',
        answers: [
            {text: 'T-shirt', correct: true},
            {text: 'Shirt', correct: false},
            {text: 'Pants', correct: false},
        ]
    },
    {
        question: 'Штани',
        answers: [
            {text: 'Pants', correct: true},
            {text: 'Skirt', correct: false},
            {text: 'Dress', correct: false},
        ]
    },
    {
        question: 'Сукня',
        answers: [
            {text: 'Dress', correct: true},
            {text: 'Skirt', correct: false},
            {text: 'Pants', correct: false},
        ]
    },
    {
        question: 'Піджак',
        answers: [
            {text: 'Jacket', correct: true},
            {text: 'Coat', correct: false},
            {text: 'Sweater', correct: false},
        ]
    },
    {
        question: 'Кофта',
        answers: [
            {text: 'Sweater', correct: true},
            {text: 'Jacket', correct: false},
            {text: 'Coat', correct: false},
        ]
    },
    {
        question: 'Шапка',
        answers: [
            {text: 'Hat', correct: true},
            {text: 'Cap', correct: false},
            {text: 'Beanie', correct: false},
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