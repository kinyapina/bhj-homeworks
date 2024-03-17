const textarea = document.getElementById('editor');
const clear = document.querySelector('.clear');

textarea.value = '';

textarea.oninput = () => {
  localStorage.setItem('textarea', JSON.stringify(textarea.value));
}

clear.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(textarea);
  textarea.value = '';
})

window.onload = () => {
  textarea.value = JSON.parse(localStorage.getItem('textarea'));
}



/* 
if (location.reload()) {
  textarea.innerText = localStorage.setItem;
} */