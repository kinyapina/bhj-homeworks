const links = document.querySelectorAll('.has-tooltip');
let tooltip;

const createTooltip = (link) => {
  if (tooltip) {
    if (tooltip.innerHTML == link.getAttribute('title')) {
      tooltip.classList.toggle('tooltip_active');
      return;
    }
    tooltip.remove();
    tooltip = undefined;
  }

  tooltip = document.createElement('div');
  tooltip.textContent = link.getAttribute('title');
  tooltip.classList.add('tooltip');

  let coords = link.getBoundingClientRect();

  tooltip.style.left = coords.left + 'px';
  tooltip.style.top = coords.bottom + 'px';

  tooltip.classList.add('tooltip_active');
  link.after(tooltip);

  return tooltip;
}

for (let i = 0; i <= links.length - 1; i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault();

    createTooltip(links[i]);
  })
}