const form = document.getElementById('form');
const progress = document.getElementById('progress');
progress.value = 0;

const requestURL = 'https://students.netoservices.ru/nestjs-backend/upload';

form.addEventListener('submit', (event) => {
  let formData = new FormData(form);
  let request = new XMLHttpRequest();

  request.open('POST',)
})


