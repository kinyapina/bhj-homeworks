const reveal = document.querySelectorAll('.reveal');

const isVisible = (...element) => {
  for (let i = 0; i <= reveal.length - 1; i++) {
    const { top, bottom } = element[i].getBoundingClientRect();

    if (bottom > 0 && top < window.innerHeight) {
      element[i].classList.add('reveal_active');
    }
  }
}

isVisible(...reveal);