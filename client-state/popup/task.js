const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (document.cookie !== 'hided=yes') {
  window.setTimeout(() => {
    modal.classList.add('modal_active');
    console.log(document.cookie);
  }, 2000)
}

const closePopup = modalClose.addEventListener('click', (event) => {
  event.preventDefault();
  if (modal.classList.remove('modal_active')) {
    document.cookie = 'hided=yes';
  }
  console.log(document.cookie);
})
/* 
window.onload = () => {
  if (document.cookie === 'hided=yes') {
    document.cookie = 'hided=yes; max-age=-1';
  }
} */
