const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
  modal.classList.add('open-modal');
});
closeBtn.addEventListener('click', function () {
  modal.classList.remove('open-modal');
});

let eyeIcon = document.getElementById('eyeicon');
let password = document.getElementById('password');

// const setDesc = document.querySelector('.set-desc')
// setDesc.addEventListener('click', function() {
// })

const notifications = document.querySelector('.notifications');
const buttons = document.querySelectorAll('.buttons .btn');

const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-graduation-cap',
    text: 'Не забувай повторювати вивчені слова',
  },
};

const removeToast = (toast) => {
  toast.classList.add('hide');
  if (toast.timeoutID) clearTimeout(toast.timeoutID);
  setTimeout(() => toast.remove(), 500);
};

const createToasts = (id) => {
  const { icon, text } = toastDetails[id];
  const toast = document.createElement('li');
  toast.className = `toast ${id}`;

  toast.innerHTML = `<div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;

  notifications.appendChild(toast);
  toast.timeoutID = setTimeout(() => removeToast(toast), toastDetails.timer);
};
buttons.forEach((btn) => {
  btn.addEventListener('click', () => createToasts(btn.id));
});

// window.addEventListener('DOMContentLoaded', () => {
//   createToasts('success');
// });

// carts generations
const navBox = document.querySelectorAll('nav ul li');

const filterGoods = (filterClass) => {
  navBox.forEach((item) => item.classList.remove('activeGood'));
  const active = document.querySelector(`[data-f=${filterClass}]`);
  if (active) active.classList.add('activeGood');

  filterBox.forEach((item) => {
    item.classList.remove('hideGoods');
    if (item.dataset.f !== filterClass && filterClass !== 'all') {
      item.classList.add('hideGoods');
    }
  });
}


document.querySelector('.nav-container').addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return;

  let filterClass = event.target.dataset.f;
  filterGoods(filterClass);
  window.location.hash = event.target.dataset.f;
});



let carts = document.getElementById('block-cover');

// localStorage.clear()

// let currentWordsForLearn = JSON.parse(localStorage.getItem('totalCount')) || []
let currentWordsForLearn = []
let cartsItemsDate = [
  {
    id: 'firstID',
    className: 'easy',
    words: '11 слів',
    hard: 'Легкий',
    colorCircle: 'green',
    img: 'images/petIMG.png',
    cartName: 'Домашні тварини',
  },
  {
    id: 'SecondID',
    className: 'easy',
    words: '30 слів',
    hard: 'Легкий',
    colorCircle: 'green',
    img: 'images/beginnerIMg.png',
    cartName: 'Топ 30 для початківців',
  },
  {
    id: 'ThirdID',
    className: 'middle',
    words: '14    слів',
    hard: 'Середній',
    colorCircle: 'orange',
    img: 'images/girlbodyIMG.png',
    cartName: 'Частини тіла',
  },
  {
    id: 'FourID',
    className: 'middle',
    words: '15 слів',
    hard: 'Середній',
    colorCircle: 'orange',
    img: 'images/dogIMG.jpg',
    cartName: 'Неправильні дієслова',
  },
  {
    id: 'FiveID',
    className: 'hard',
    words: '20 слів',
    hard: 'Складний',
    colorCircle: 'red',
    img: 'images/girlIMG.png',
    cartName: 'Емоції',
  },
  {
    id: 'SixID',
    className: 'hard',
    words: '25 слів',
    hard: 'Складний',
    colorCircle: 'red',
    img: 'images/ieltsIMG.jfif',
    cartName: 'Топ 30 слів для IELTS',
  },
 
];

let generateSet = () => {
  carts.innerHTML = cartsItemsDate
    .map((x) => {
      let {id, className, words, hard, img, cartName} = x;
      let circleClass = '';
      
      if (hard === 'Легкий') {
        circleClass = 'green';
      } else if (hard === 'Середній') {
        circleClass = 'orange';
      } else if (hard === 'Складний') {
        circleClass = 'red';
      } else {
        circleClass = 'orange';
      }

      let wordCount = parseInt(words)

      return ` <div class="div col-auto box" data-f="${className}" >

                <div class="container-item">
                        <div class="container-in-item">
                            <div>${words}</div>
                            <div class="container-with-circle">
                                <div class="${circleClass}"></div>
                                <div>${hard}</div>
                            </div>
                        </div>
                    <img height="200" width="300" src="${img}" alt="">
                    <div class="about-set-item">${cartName}</div>
                    <button class="learnSet"  onclick="increment(${wordCount}, '${cartName}', '${id}')">Вивчити</button>
                    </div>

            </div>`;
    })
    .join('');
   
};

generateSet();

const learnButton = document.getElementById('learnSet')
// const learnWordsCount = document.getElementById('learn-words')
const filterBox = document.querySelectorAll('.box');

let totalWords = currentWordsForLearn.map((x) => x.count).reduce((x,y) => x + y, 0)
// learnWordsCount.innerHTML = totalWords;

const increment = (wordCount, cartName, id) => {
    if (cartName === undefined) return;
    let selectedItem = currentWordsForLearn.find(item => item.cartName === cartName);
    if (selectedItem) {
      selectedItem.item++;
      
      if (selectedItem.item >= 1) {
        console.log('елементів більше ніж один');
        return
      }

    } else {
      currentWordsForLearn.push({
        id: id,
        count: wordCount,
        cartName: cartName,
        item: 1,
      });
    } 

  totalWords += wordCount,
  // learnWordsCount.innerHTML = totalWords
  console.log(currentWordsForLearn);
  console.log(cartName);
  console.log(id);

  
  localStorage.setItem('totalCount', JSON.stringify(currentWordsForLearn)) || []
  selectSets(id);
};

function selectSets(id) {
  if (id === 'firstID') {
     window.location.href = 'setPet/setPet.html'
  } else if (id === 'SecondID') {
    window.location.href = 'topForBeginners/topForBeginners.html'
  } else if (id === 'ThirdID') {
    window.location.href = 'bodyParts/bodyParts.html'
  } else if (id === 'FourID') {
    window.location.href = 'irregularVerbs/irregularVerbs.html'
  } else if (id === 'FiveID') {
    window.location.href = 'emotions/emotions.html'
  } else if (id === 'SixID') {
    window.location.href = 'IETELS/ietels.html'
  }
}

if (window.location.hash) {
  console.log(window.location.hash);
  filterGoods(window.location.hash.slice(1));
}
