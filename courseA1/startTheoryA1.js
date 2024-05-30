const reviews = [
    {
        id: 1,
        greeting: 'Привіт! Це наш перший урок англійської, тому давай почнемо з теорії. А почнемо ми наше вивчення англійської з першого часу — Present Simple.',
        beginningTheory: 'Почнемо з початку. Що таке часи в англійській мові?',
        text: 'Часи в англійській мові – це граматичні категорії, які виражають час дії або стану. В англійській мові є три основні часи: теперішній (Present), минулий (Past) і майбутній (Future). Кожен з них може мати чотири аспекти, які вказують на тривалість або завершеність дії',
    },
    {
        id: 2,
        greeting: '',
        beginningTheory: 'Present Simple — це один із основних часів в англійській мові, який використовується для вираження регулярних або звичних дій, загальних істин, розкладів і фактів. Використовується для опису дій, які повторюються регулярно (щодня, щотижня і т.д.).',
        text: 'Приклад: I go to the gym every morning. Я ходжу до спортзалу щоранку' ,
    },
    {
        id: 3,
        greeting: 'Загальні істини та факти:',
        beginningTheory: 'Використовується для вираження загальновідомих фактів або істин.',
        text: 'Приклад: The Earth orbits the Sun. Земля обертається навколо Сонця.',
    },
    {
        id: 4,
        greeting: 'Розклади та графіки:',
        beginningTheory: 'Використовується для опису розкладів, програм або графіків, зокрема, транспорту.',
        text: 'Приклад: The train leaves at 6 PM. Поїзд відправляється о 18:00.',
    },
    {
        id: 5,
        greeting: '',
        beginningTheory: 'Структура Present Simple',
        text: 'Утверджувальні речення:',
        textContinue: 'Форма дієслова: Для всіх осіб, крім третьої особи однини (he, she, it), використовується базова форма дієслова. Для третьої особи однини додається закінчення -s або -es.',
        OneMoreText: 'I/You/We/They play football.',
        SecondMoreText: 'He/She/It plays football.'
    },
    {
        id: 6,
        greeting: '',
        beginningTheory: 'Тепер поговоримо коли використовується do/does або is/are',
        text: 'В часі Present Simple в англійській мові використання допоміжних дієслів "do/does" та "is/are" залежить від типу речення (утверджувальне, заперечне або питальне) та від того, чи використовується основне дієслово або дієслово "to be".',
        textContinue: '',
        OneMoreText: '',
        SecondMoreText: ''
    },
    {
        id: 7,
        greeting: '',
        beginningTheory: 'Використання "do/does"',
        text: 'Утверджувальні речення:',
        textContinue: 'Утверджувальні речення в Present Simple не потребують "do" або "does". Використовується тільки основне дієслово.',
        OneMoreText: 'I/You/We/They play football.',
        SecondMoreText: 'He/She/It plays football.'
    },
    {
        id: 8,
        greeting: '',
        beginningTheory: 'Заперечні речення:',
        text: 'Форма: Для утворення заперечення використовується допоміжне дієслово do/does (для третьої особи однини) + not (скорочено don’t/doesn’t) + базова форма дієслова.',
        textContinue: 'I/You/We/They do not (dont) play football',
        OneMoreText: 'He/She/It does not (doesnt) play football.',
        SecondMoreText: ''
    },
    {
        id: 9,
        greeting: '',
        beginningTheory: 'Питальні речення:',
        text: 'Форма: Для утворення питання допоміжне дієслово do/does ставиться на початок речення, потім йде підмет і базова форма дієслова.',
        textContinue: 'Do I/you/we/they play football?',
        OneMoreText: 'Does he/she/it play football?',
        SecondMoreText: ''
    },
    {
        id: 10,
        greeting: 'Використання "is/are" (дієслово "to be")',
        beginningTheory: 'Утверджувальні речення:',
        text: 'Для утверджувальних речень з дієсловом "to be" використовується "am" для першої особи однини, "is" для третьої особи однини, і "are" для другої особи однини та всіх множин.',
        textContinue: '',
        OneMoreText: 'I am a student.',
        SecondMoreText: 'He/She/It is a teacher.',
        ThirdMoreText: 'You/We/They are friends.'
    },
    {
        id: 11,
        greeting: 'Заперечні речення:',
        beginningTheory: 'Утверджувальні речення:',
        text: 'Для утворення заперечних речень з дієсловом "to be" додається "not" після "am/is/are".',
        textContinue: '',
        OneMoreText: 'I am not a student.',
        SecondMoreText: 'He/She/It is not (isnt) a teacher.',
        ThirdMoreText: 'You/We/They are not (arent) friends.'
    },
    {
        id: 12,
        greeting: 'Питальні речення:',
        beginningTheory: '',
        text: 'Для утворення питальних речень з дієсловом "to be" "am/is/are" ставиться на початок речення перед підметом.',
        textContinue: '',
        OneMoreText: 'Am I a student?',
        SecondMoreText: 'Is he/she/it a teacher?',
        ThirdMoreText: 'Are you/we/they friends?'
    },
    {
        id: 13,
        greeting: '',
        beginningTheory: 'Приклади',
        text: 'Утверджувальні речення:',
        textContinue: '',
        OneMoreText: '',
        SecondMoreText: 'В основних реченнях: He plays tennis on weekends.',
        ThirdMoreText: 'З дієсловом "to be": She is a doctor.'
    },
    {
        id: 14,
        greeting: '',
        beginningTheory: 'Приклади',
        text: 'Заперечні речення:',
        textContinue: '',
        OneMoreText: '',
        SecondMoreText: 'В основних реченнях: They do not (dont) like fast food.',
        ThirdMoreText: 'З дієсловом "to be": He is not (isnt) at home.'
    },
    {
        id: 15,
        greeting: '',
        beginningTheory: 'Приклади',
        text: 'Питальні речення:',
        textContinue: '',
        OneMoreText: '',
        SecondMoreText: 'В основних реченнях: Do you speak French?',
        ThirdMoreText: 'З дієсловом "to be": Are they here?'
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