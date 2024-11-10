const main = document.querySelector(".main");
const btnMenu = document.querySelector(".nav__btn-menu");
const menu = document.querySelector(".nav__list-container");
const header = document.querySelector(".header__container");
const overlay = document.querySelector(".overlay");

// (function () {
//   main.style.paddingTop = `calc(3em)`;
// })(); смена функциональности меню (это старый вариант)

let isMenuOpen = false;

const openMenu = () => {
  overlay.classList.add("jsOverlay");
  menu.classList.remove("nav--close");
  header.classList.remove("jsMenuClose");
  isMenuOpen = true;
};

export const closeMenu = () => {
  overlay.classList.remove("jsOverlay");
  menu.classList.add("nav--close");
  header.classList.add("jsMenuClose");
  isMenuOpen = false;
};

export const toggleMenu = () => {
  if (isMenuOpen) return closeMenu();
  if (!isMenuOpen) return openMenu();
};
