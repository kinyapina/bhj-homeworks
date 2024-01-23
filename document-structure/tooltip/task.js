const links = document.querySelectorAll('.has-tooltip');
let tooltip;

const createTooltip = (link) => {
  console.log(tooltip);

  if (tooltip) {
    tooltip.remove();
    tooltip = undefined;
    return;
  }

  tooltip = document.createElement('div');

  const title = link.getAttribute('title');
  tooltip.textContent = title;

  tooltip.classList.add('tooltip');

  console.log(link.offsetLeft, link.offsetTop);
  console.log(tooltip.getBoundingClientRect().top);

  /* tooltip.style.left = link.offsetLeft;
  tooltip.style.top = link.offsetTop + 10; */

  link.appendChild(tooltip);
  tooltip.classList.add('tooltip_active');

  tooltip.style.cssText += `
    top: ${link.offsetTop + 15}px;
    left: ${link.offsetLeft + 10}px;
  `;
}

for (let i = 0; i <= links.length - 1; i++) {
  links[i].addEventListener('click', function (event) {
    event.preventDefault();

    createTooltip(links[i]);
  })
}