const requestURL = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
const imgLoader = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', requestURL);
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
  if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
    imgLoader.classList.remove('loader_active');
    let response = (xhr.response).response.Valute;

    let key;

    for (key in response) {
      items.insertAdjacentHTML('afterbegin', ` <div class="item"> <div class="item__code"> ${response[key].CharCode} </div> <div class="item__value"> ${response[key].Value} </div> <div class="item__currency">руб.</div> </div> `);
    }
  }
})
