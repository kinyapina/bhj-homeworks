const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');

const clearActiveClass = () => {
  for (let i = 0; i <= fontSize.length - 1; i++) {
    bookContent.classList.remove('book_fs-big');
    bookContent.classList.remove('book_fs-small');
    fontSize[i].classList.remove('font-size_active');
  }
}

const addActiveClass = (index) => {
  fontSize[index].classList.add('font-size_active');

  if (fontSize[index].classList.contains('font-size_active') && fontSize[index].getAttribute('data-size') === 'small') {
    bookContent.classList.add('book_fs-small');
  }

  if (fontSize[index].classList.contains('font-size_active') && fontSize[index].getAttribute('data-size') === 'big') {
    bookContent.classList.add('book_fs-big');
  }
}

for (let i = 0; i <= fontSize.length - 1; i++) {
  fontSize[i].addEventListener('click', (event) => {
    event.preventDefault();
    clearActiveClass();
    addActiveClass(i);
  })
}