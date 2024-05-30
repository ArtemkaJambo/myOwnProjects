const reviews = [
    {
        id: 1,
        greeting: 'Теорія часу Past Simple',
        beginningTheory: 'Past Simple (Простий Минулий Час) використовується для опису дій або станів, що відбувалися в минулому і завершилися. Цей час є одним із основних граматичних часів в англійській мові.',
        text: '',
    },
    {
        id: 2,
        greeting: 'Формування',
        beginningTheory: '1. Стверджувальні речення',
        text: 'Для утворення стверджувальних речень використовується друга форма дієслова (Past Simple):' ,
        textContinue: 'Для правильних дієслів додається закінчення -ed:',
        OneMoreText: 'play → played',
        SecondMoreText: 'work → worked'
    },
    {
        id: 3,
        greeting: '',
        beginningTheory: 'Неправильні дієслова мають унікальні форми, які потрібно запамятати:',
        text: 'go → went',
        textContinue: 'see → saw',

    },
    {
        id: 4,
        beginningTheory: 'Приклад:',
        text: 'I visited my grandparents last weekend. (Я відвідав своїх бабусю і дідуся минулих вихідних.)',
        textContinue: 'She saw a movie yesterday. (Вона дивилася фільм вчора.)',

    },
    {
        id: 5,
        greeting: '',
        beginningTheory: '2. Заперечні речення',
        text: 'Для утворення заперечних речень використовується допоміжне дієслово did та інфінітив без частки to основного дієслова:',
        OneMoreText: 'I did not (didnt) visit my grandparents last weekend.',
        SecondMoreText: 'She did not (didnt) see a movie yesterday.'
        
    },
    {
        id: 6,
        greeting: '',
        beginningTheory: '3. Питальні речення',
        text: 'Питальні речення утворюються шляхом перенесення допоміжного дієслова did на початок речення:',
        OneMoreText: 'Did you visit your grandparents last weekend?',
        SecondMoreText: 'Did she see a movie yesterday?'
    },
    {
        id: 7,
        greeting: '',
        beginningTheory: 'Використання',
        text: '1. Дії, що відбулися в конкретний момент в минулому',
        OneMoreText: 'I visited Paris in 2019. (Я відвідав Париж у 2019 році.)',
        SecondMoreText: 'They watched a new TV show last night. (Вони дивилися нове телешоу вчора ввечері.)'
    },
    {
        id: 8,
        greeting: '',
        beginningTheory: '2. Заперечні речення:',
        text: 'Послідовність дій у минулому',
        textContinue: 'He came home, took a shower, and then went to bed. (Він прийшов додому, прийняв душ і потім ліг спати.)',
        OneMoreText: ''
    },
    {
        id: 9,
        beginningTheory: '3. Завершені дії без акценту на час їх завершення, але з вказівкою на минуле',
        OneMoreText: 'She lived in London for five years. (Вона жила в Лондоні п’ять років.)',
        SecondMoreText: 'They traveled to many countries. (Вони подорожували багатьма країнами.)'
    },
    {
        id: 10,
        beginningTheory: '4. Звички або повторювані дії в минулому',
        OneMoreText: 'When I was a child, I played outside every day. (Коли я був дитиною, я грався на вулиці кожен день.)',
        SecondMoreText: 'He always visited his grandma on Sundays. (Він завжди відвідував бабусю по неділях.)',
    },
    {
        id: 11,
        greeting: 'Маркери часу',
        beginningTheory: 'Типові слова-маркери, які часто вживаються з Past Simple:',
        text: 'yesterday (вчора)',
        textContinue: 'last week/month/year (минулого тижня/місяця/року)',
        OneMoreText: 'in 2010 (у 2010 році)',
        SecondMoreText: 'ago (тому) – two days ago (два дні тому), a year ago (рік тому)',
        ThirdMoreText: 'when (коли) – When I was a child (Коли я був дитиною)'
    },
    {
        id: 12,
        beginningTheory: 'Приклади',
        OneMoreText: 'Стверджувальне речення: He finished his homework an hour ago. (Він закінчив домашнє завдання годину тому.)',
        SecondMoreText: 'Заперечне речення: She did not finish her homework yesterday. (Вона не закінчила домашнє завдання вчора.)',
        ThirdMoreText: 'Питальне речення: Did you finish your homework last night? (Ти закінчив домашнє завдання вчора ввечері?)'
    },
]

const greeting = document.getElementById('greeting')
const beginningTheory = document.getElementById('beginningTheory')
const info = document.getElementById('info')
const textContinue = document.getElementById('text-continue')
const OneMoreText = document.getElementById('one-more-text')
const SecondMoreText = document.getElementById('second-more-text')
const ThirdMoreText = document.getElementById('third-more-text')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
   showPerson()
})

function showPerson() {
    const item = reviews[currentItem]
    greeting.textContent = item.greeting
    beginningTheory.textContent = item.beginningTheory
    info.textContent = item.text
    textContinue.textContent = item.textContinue
    OneMoreText.textContent = item.OneMoreText
    SecondMoreText.textContent = item.SecondMoreText
    ThirdMoreText.textContent = item.ThirdMoreText
}
// Progress buttons

const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const buttonContinue = document.getElementById('buttonContinue')

let activeIndex = 1

nextBtn.addEventListener('click', function() {
    activeIndex++
    if (activeIndex > circles.length) {
        activeIndex = circles.length - 1
    }
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    updateUI()
    showPerson()
})
prevBtn.addEventListener('click', () => {
    activeIndex--
    if (activeIndex < 1) {
        activeIndex = 1
    }
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    updateUI()
    showPerson()
})

function updateUI() {
    circles.forEach((circle, index) => {
        if (activeIndex > index) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    if (activeIndex === 1) {
        prevBtn.disabled = true
        buttonContinue.style.display = 'none'
    } else if (activeIndex === circles.length) {
        buttonContinue.style.display = 'block'
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false
        nextBtn.disabled = false
        buttonContinue.style.display = 'none'
    }
}