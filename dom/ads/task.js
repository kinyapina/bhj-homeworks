const rotator = document.querySelectorAll('.rotator__case');
const rotatorSpeedArr = [...rotator].map(element => parseInt(element.getAttribute('data-speed')));

const playRotator = () => {
  const rotatorActive = document.querySelector('.rotator__case_active');

  rotatorActive.closest('span').style.color = rotatorActive.closest('span').dataset.color;

  const nextRotatorActive = rotatorActive.nextElementSibling || rotator[0];

  nextRotatorActive.classList.add('rotator__case_active');
  rotatorActive.classList.remove('rotator__case_active');

  setTimeout(playRotator, rotatorSpeedArr[0]);
}

setTimeout(playRotator, rotatorSpeedArr[0]);