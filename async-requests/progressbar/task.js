const form = document.getElementById('form');
const file = document.getElementById('file');
const progress = document.getElementById('progress');
const inputWrapper = document.querySelector('.input__wrapper');
progress.value = 0;

const requestURL = 'https://students.netoservices.ru/nestjs-backend/upload';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('photo', file.files[0]);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', requestURL);
  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  }
  xhr.send(formData);
})

/* Вопрос
отправляю объект formData по адресу, указаному в задании
сервер в ответ дает ошибку message:"Unexpected field" 
Какое поле ожидает backend для отправки файла картинки?*/

