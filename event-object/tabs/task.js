const tabList = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');

const clearActiveClass = () => {
  for (let i = 0; i <= tabList.length - 1; i++) {
    tabList[i].classList.remove('tab_active');
    tabContent[i].classList.remove('tab__content_active');
  }
}

const addActiveClass = (index) => {
  tabList[index].classList.add('tab_active');
  tabContent[index].classList.add('tab__content_active');
}

for (let i = 0; i <= tabList.length - 1; i++) {
  tabList[i].addEventListener('click', function () {
    clearActiveClass();
    addActiveClass(i);
  })
}