const buttonTitle = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__item');

buttonTitle.addEventListener('click', function () {
  list.classList.toggle('dropdown__list_active');
})

for (let i = 0; i <= listItems.length - 1; i++) {
  listItems[i].addEventListener('click', function (event) {
    event.preventDefault();
    buttonTitle.innerHTML = listItems[i].textContent;
    list.classList.remove('dropdown__list_active');
  })
}