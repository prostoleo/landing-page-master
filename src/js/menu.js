const btnOpen = document.querySelector('.header__menu');
const btnClose = document.querySelector('.header__main-close');
const menu = document.querySelector('.header__main');

const openMenu = () => menu.classList.add('open');
const closeMenu = () => menu.classList.remove('open');

btnOpen.addEventListener('click', openMenu);

btnClose.addEventListener('click', closeMenu);
