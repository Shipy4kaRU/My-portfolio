const main = document.querySelector(".main");
const btnMenu = document.querySelector(".nav__btn-menu");
const menu = document.querySelector(".nav__list-container");
const header = document.querySelector(".header__container");
const overlay = document.querySelector(".overlay");

// (function () {
//   main.style.paddingTop = `calc(3em)`;
// })(); смена функциональности меню (это старый вариант)

export const closeMenu = () => {
  menu.classList.toggle("nav--close");
  header.classList.toggle("jsMenuClose");
};
