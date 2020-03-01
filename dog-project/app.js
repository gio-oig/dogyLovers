const position = new Mouse();

let cursore = document.querySelector('.cursore');
const listItems = document.querySelectorAll('.main-ul li');

window.addEventListener('mousemove', changeSpanLocation);

function changeSpanLocation(e) {
  position.changeLocation(e.pageX, e.pageY);
}

listItems.forEach(link => {
  link.addEventListener('mousemove', () => {
    cursore.classList.add('grow');
    link.firstChild.classList.add('hoverd-link');
  });
  link.addEventListener('mouseleave', () => {
    cursore.classList.remove('grow');
    link.firstChild.classList.remove('hoverd-link');
  });
  link.addEventListener('click', () => {
    link.firstChild.classList.add('active-page');
  });
});
