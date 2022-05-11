const menuToggle = document.querySelector('.header__menu-toggle');
const headerMenu = document.querySelector('.header__menu');

menuToggle.addEventListener('click', () => {
   headerMenu.classList.toggle('active');
});