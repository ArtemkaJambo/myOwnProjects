const nameError = document.getElementById('name-error')
const phoneError = document.getElementById('phone-error')
const emailError = document.getElementById('email-error')
const submitError = document.getElementById('submit-error')
const passwordError = document.getElementById('password-error')

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = "Необхідно вказати ім'я"
        return false;
    }
    if (!name.match(/^[А-Яа-яІіЇїЄєҐґ'’\s]+$/)) {
        nameError.innerHTML = "Напишіть ваше повне ім'я"
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;

    if (phone.length !== 10) {
        phoneError.innerHTML = 'Номер телефону має складатися з 10 цифр'
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Тільки цифри, будь ласка'
        return false
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true 
}
function validateEmail() {
    let email = document.getElementById('contact-email').value

    if (email.length == 0) {
        emailError.innerHTML = 'Вкажіть ваш email'
        return false
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = 'Електронна адреса недійсна' 
        return false
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}
function validatePassword() {
    let password = document.getElementById('contact-password').value
    
    if (password.length <= 5) {
        passwordError.innerHTML = 'Пароль мінімум 5 символа'
        return false
    }

    passwordError.innerHTML = '<i class="fa-regular fa-circle-check"></i>'
    return true
}
function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword()) {
        submitError.style.display = 'block'
        submitError.innerHTML = 'Виправте помилку щоб зареєструватись'
        setTimeout(function(){submitError.style.display = 'none'}, 3000)
        return false
    } else {
        alert('Регистрація пройшла успішно!')
    }
}

//  PASSWORD

let pass = document.getElementById('contact-password')
let msg = document.getElementById('message')
let str = document.getElementById('strenght')

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none'
    }
    if (pass.value.length < 4) {
        str.innerHTML = 'weak'
        pass.style.borderColor = '#ff5925'
        msg.style.color = '#ff5925'
        str.style.color = '#ff5925'
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = 'medium'
        pass.style.borderColor = '#ffc93c'
        msg.style.color = '#ffc93c'
        str.style.color = '#ffc93c'

    } else if (pass.value.length >= 8) {
        str.innerHTML = 'strong'
        pass.style.borderColor = '#26d730'
        msg.style.color = '#26d730'
        str.style.color = '#26d730'
    }
})

const returnToWebsite = document.querySelector('.returnToWebsite')

returnToWebsite.addEventListener('click', function() {
    window.location.href = '../index.html';
})