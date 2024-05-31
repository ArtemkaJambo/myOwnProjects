const reviews = [
    {
        id: 1,
        greeting: '',
        beginningTheory: 'Формування Present Perfect',
        text: 'Present Perfect утворюється за допомогою допоміжного дієслова "have" в теперішньому часі (have/has) та основного дієслова у формі минулого причастя (Past Participle).',
   
    },
    {
        id: 2,
        greeting: '',
        beginningTheory: 'Для підметів I, you, we, they: використовуємо "have"',
        OneMoreText: 'I have eaten.',
        SecondMoreText: 'They have gone.'
    },
    {
        id: 3,
        beginningTheory: 'Для підметів he, she, it: використовуємо "has"',
        OneMoreText: 'She has finished.',
        SecondMoreText: 'It has started.'
    },
    {
        id: 4,
        beginningTheory: 'Вживання Present Perfect',
        OneMoreText: 'Дія, що відбулася в минулому, але має результат у теперішньому',
        SecondMoreText: 'I have lost my keys. (Я загубив ключі і досі їх не знайшов.)'
    },
    {
        id: 5,
        greeting: '',
        beginningTheory: 'Дії, що почалися в минулому і тривають до теперішнього моменту',
        textContinue: 'She has lived in London for five years. (Вона живе в Лондоні вже пять років.)'
    },
    {
        id: 6,
        beginningTheory: 'Досвід або події, що трапилися протягом життя до теперішнього моменту',
        text: 'He has traveled to many countries. (Він відвідав багато країн.)',
    },
    {
        id: 7,
        beginningTheory: 'Повторювані дії в невизначений час у минулому',
        text: 'We have visited that museum several times. (Ми відвідували цей музей кілька разів.)',
    },
    {
        id: 8,
        beginningTheory: 'Маркери часу для Present Perfect',
        text: 'Заперечні речення:',
        textContinue: 'Часто використовуються наступні слова і фрази, що вказують на вживання Present Perfect:',
        OneMoreText: 'I/You/We/They do not (dont) play football',
        SecondMoreText: 'already (вже), yet (ще), just (щойно), ever (коли-небудь), never (ніколи)',
        ThirdMoreText: 'recently (недавно), so far (досі), up to now (до цього часу), since (з якогось часу), for (протягом)'
    },
    {
        id: 9,
        greeting: '',
        beginningTheory: 'Приклади',
        text: 'Позитивні речення:',
        OneMoreText: 'I have already eaten breakfast. (Я вже поснідав.)',
        SecondMoreText: 'She has just left. (Вона щойно пішла.)'
    },
    {
        id: 10,
        beginningTheory: 'Негативні речення:',
        OneMoreText: 'They have not finished their homework yet. (Вони ще не закінчили свою домашню роботу.)',
        SecondMoreText: 'He has never been to Paris. (Він ніколи не був у Парижі.)',
    },
    {
        id: 11,
        beginningTheory: 'Питальні речення:',
        OneMoreText: 'Have you ever seen a ghost? (Чи бачив ти коли-небудь привида?)',
        SecondMoreText: 'Has she done her project? (Вона зробила свій проект?)',
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