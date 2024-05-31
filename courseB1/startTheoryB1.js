const reviews = [
    {
        id: 1,
        greeting: '',
        beginningTheory: 'Present Perfect Continuous використовується в англійській мові для вираження дій, які почалися в минулому і тривають до теперішнього моменту або нещодавно завершилися, залишаючи свій результат в теперішньому.',   
    },
    {
        id: 2,
        greeting: '',
        beginningTheory: 'Формування Present Perfect Continuous',
        OneMoreText: 'Present Perfect Continuous формується за допомогою допоміжного дієслова "to have" у формі Present Perfect (have/has) + been + дієслова з закінченням -ing.',
        SecondMoreText: 'They have gone.'
    },
    {
        id: 3,
        beginningTheory: 'Структура речення:',
        textContinue: 'Стверджувальне речення:',
        OneMoreText: 'I/We/You/They have been + дієслово-ing',
        SecondMoreText: 'He/She/It has been + дієслово-ing'
    },
    {
        id: 4,
        beginningTheory: 'Приклад:',
        OneMoreText: 'I have been reading a book. (Я читав книгу.)',
        SecondMoreText: 'She has been playing the piano. (Вона грала на піаніно.)',
        ThirdMoreText: 'They have been watching TV. (Вони дивилися телевізор.)'
    },
    {
        id: 5,
        greeting: '',
        beginningTheory: 'Заперечне речення:',
        OneMoreText: 'I/We/You/They have not (havent) been + дієслово-ing',
        SecondMoreText: 'He/She/It has not (hasnt) been + дієслово-ing'
    },
    {
        id: 6,
        beginningTheory: 'Приклад:',
        OneMoreText: 'I/We/You/They have not (havent) been + дієслово-ing',
        SecondMoreText: 'He/She/It has not (hasnt) been + дієслово-ing'
    },
    {
        id: 7,
        beginningTheory: 'Приклад:',
        OneMoreText: 'I havent been reading a book. (Я не читав книгу.)',
        SecondMoreText: 'She hasnt been playing the piano. (Вона не грала на піаніно.)',
        ThirdMoreText: 'They havent been watching TV. (Вони не дивилися телевізор.)'
    },
    {
        id: 8,
        beginningTheory: 'Питальне речення:',
        OneMoreText: 'Have I/we/you/they been + дієслово-ing?',
        SecondMoreText: 'Has he/she/it been + дієслово-ing?',
    },
    {
        id: 9,
        beginningTheory: 'Приклади',
        text: 'Позитивні речення:',
        OneMoreText: 'I have already eaten breakfast. (Я вже поснідав.)',
        SecondMoreText: 'She has just left. (Вона щойно пішла.)'
    },
    {
        id: 10,
        beginningTheory: 'Приклад:',
        OneMoreText: 'Have you been reading a book? (Ти читав книгу?)',
        SecondMoreText: 'Has she been playing the piano? (Вона грала на піаніно?)',
        ThirdMoreText: 'Have they been watching TV? (Вони дивилися телевізор?)'
    },
    {
        id: 11,
        beginningTheory: 'Вживання Present Perfect Continuous',
        text: 'Дії, що почалися в минулому і тривають до теперішнього моменту:',
        OneMoreText: 'I have been living here for five years. (Я живу тут пять років.)',
        SecondMoreText: 'She has been working since morning. (Вона працює з ранку.)',
    },
    {
        id: 12,
        beginningTheory: 'Дії, що нещодавно завершилися з видимим результатом у теперішньому:',
        OneMoreText: 'They have been running, and now they are tired. (Вони бігали, і тепер вони втомлені.)',
        SecondMoreText: 'He has been painting the room; it looks much better now. (Він фарбував кімнату; тепер вона виглядає набагато краще.)',
    },
    {
        id: 13,
        beginningTheory: 'Сигнальні слова для Present Perfect Continuous',
        text: 'Деякі слова та фрази часто вказують на те, що потрібно використовувати Present Perfect Continuous:',
        OneMoreText: 'for (протягом), since (з), all day/week/month/year (весь день/тиждень/місяць/рік)',
        SecondMoreText: 'recently (нещодавно), lately (останнім часом), how long (як довго)',
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