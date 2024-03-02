const requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const message = 'Спасибо, ваш голос засчитан!';
let btns;

let xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
    let response = (xhr.response).data;

    pollTitle.innerHTML = response.title;

    for (let i = 0; i <= response.answers.length - 1; i++) {
      pollAnswers.insertAdjacentHTML('afterbegin', ` <button class="poll__answer"> ${response.answers[i]} </button> `);
    }

    btns = document.querySelectorAll('.poll__answer');

    if (btns.length !== 0) {
      for (i in btns) {
        btns[i].addEventListener('click', () => {
          alert(message);
        })
      }
    }
  }
})


console.log(btns)









/* if (btn.length !== 0) {
  for (let i = 0; i <= btn.length - 1; i++) {
    btn.addEventListener('click', (event) => {
      alert('11111111112223548')
    })
  }
} */











