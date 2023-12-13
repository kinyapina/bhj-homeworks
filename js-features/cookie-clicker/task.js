let cookieCounter = 0;
let clickTime = [];
let clickInterval = [];

document.getElementById('cookie').onclick = function (event) {
  cookieCounter++;

  let img = document.getElementById('cookie');

  if (cookieCounter % 2) {
    img.width = 300;
  } else {
    img.width = 200;
  }

  document.getElementById('clicker__counter').textContent = cookieCounter;

  //ЗАДАНИЕ СО **
  clickTime.push(new Date().getTime());

  /*
  for (let i = 0; i < clickTime.length - 1; i++) {
    clickInterval.push(clickTime[i + 1] - clickTime[i]);
  }
  console.log(`Интервалы между кликами ${clickInterval}`);
  */

  let clickSpeed = (clickTime.reduce((acc, item) => acc + item, 0)) / 1000 / clickTime.length;

  console.log(`Количество кликов ${clickTime.length}`);
  console.log(`Скорость клика ${clickSpeed}`);

}