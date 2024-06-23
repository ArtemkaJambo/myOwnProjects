// MODAL SCREEN 
const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function() {
    modal.classList.add('open-modal')
})
closeBtn.addEventListener('click', function() {
    modal.classList.remove('open-modal')
})

// ARROW
let arrow = document.getElementById('arrow')
window.addEventListener('scroll', () => {
    let position = window.scrollY;
    if (position <= 5) {
        arrow.classList.toggle('fade-in')
        arrow.classList.toggle('fade-out')
    } 
})

// COURSES
function getTab(element) {
    const active = document.querySelector('.active')
    const visible = document.querySelector('.content-visible')
    const tabContent = document.getElementById(element.href.split('#')[1])
    
    active.classList.toggle('active')
    visible.classList.toggle('content-visible')
    element.classList.add('active')
    tabContent.classList.add('content-visible')
}
document.addEventListener('click', e => {
    if (e.target.matches('.tab-item a')) {
        getTab(e.target)
    }
})
// notification
