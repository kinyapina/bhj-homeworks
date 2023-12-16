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

  clickTime.push(Date.now());

  let firstClickTime = clickTime[0];
  let lastClickTime = clickTime[clickTime.length - 1];


  let clickSpeed = (clickTime.length / (lastClickTime - firstClickTime) * 1000).toFixed(2);

  if (firstClickTime === lastClickTime) {
    clickSpeed = (clickTime.length / (firstClickTime) * 1000).toFixed(2);
  }

  document.getElementById('clicker__speed').textContent = clickSpeed;
}