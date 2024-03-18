const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (document.cookie !== 'hided=yes') {
  window.setTimeout(() => {
    modal.classList.add('modal_active');
  }, 2000)
}

const closePopup = modalClose.addEventListener('click', (event) => {
  modal.classList.remove('modal_active');
  document.cookie = 'hided=yes';
})