const form = document.getElementById('signin__form');
const welcomeActive = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signIn = document.getElementById('signin');
const requestURL = 'https://students.netoservices.ru/nestjs-backend/auth';
const errorMessage = 'Неверные логин/пароль';

const welcomePage = () => {
  signIn.classList.remove('signin_active');
  welcomeActive.classList.add('welcome_active');
  userId.innerHTML = localStorage.getItem('userId');
}

if (localStorage.userIdNum !== '') {
  welcomePage();
}

form.addEventListener('submit', () => {
  form.reset();

  const formData = new FormData(form);

  let xhr = new XMLHttpRequest();
  xhr.open('POST', requestURL);
  xhr.responseType = 'json'
  xhr.send(formData);

  xhr.load = (event) => {
    if (xhr.response.success === false) {
      alert(errorMessage);
    }

    if (xhr.response.success === true) {
      let responseID = (xhr.response).user_id;
      userId.innerHTML = responseID;
      userIdNum = localStorage.setItem('userId', responseID);

      welcomePage();
    }
  }
})