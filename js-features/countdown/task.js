//Таймер обратного отсчёта

const timer = function () {
  const timerStart = document.getElementById("timer");

  if (timerStart.textContent < 1) {
    alert('Вы победили в конкурсе!');
  } else {
    timerStart.textContent -= 1;
  }

  clearInterval(timer);
  return;
}

setInterval(timer, 1000);