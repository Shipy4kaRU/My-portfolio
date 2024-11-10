const header = document.querySelector(".header");
const iconDarkTheme = document.querySelector(".js-icon-dark-theme");
const btnTheme = document.querySelector(".header__btn-theme");

export const hoverNavLinks = function (e) {
  const link = e.target;
  if (link.classList.contains("nav__link")) {
    const siblings = Array.from(
      link.closest(".nav__list").querySelectorAll(".nav__link")
    );
    // siblings.push(iconDarkTheme);
    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    });
  }
  // if (link.closest(".js-icon-dark-theme")) {
  //   const siblings = Array.from(document.querySelectorAll(".nav__link"));
  //   siblings.forEach((sibling) => (sibling.style.opacity = this));
  // }
};
