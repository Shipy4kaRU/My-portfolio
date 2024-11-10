const btnList = document.querySelector(".nav__list");
const navigationContainer = document.querySelector(".header__container");
const header = document.querySelector(".header");
const bioSect = document.querySelector(".bio");

// HEADER WIDTH

export const toKnowHeaderHeight = function () {
  return header.clientHeight;
};

// SCROLL TO SECTION

export const scrollTo = function (e) {
  if (!e) return;
  e.preventDefault();
  if (!e.target.closest(".nav__item")) return;
  try {
    const href = e.target.getAttribute("href");
    //document.querySelector(`${href}`).scrollIntoView({ behavior: "smooth" });
    const section = document.querySelector(`${href}`);
    // it's for Firefox
    if (href === "#skills") {
      // console.log("TRUE");
      return window.scrollBy({
        top: section.getBoundingClientRect().top - toKnowHeaderHeight() + 5,
        behavior: "smooth",
      });
    }
    window.scrollBy({
      top: section.getBoundingClientRect().top - toKnowHeaderHeight() - 1,
      behavior: "smooth",
    });
  } catch {
    console.log("Такой секции нет.");
  }
};

// STICKY NAVIGATION

const getStickyNav = function (entries) {
  const entry = entries[0];
  if (entry.isIntersecting) navigationContainer.style.position = "absolute";
  else navigationContainer.style.position = "fixed";
};

export const stickyNavObserver = new IntersectionObserver(getStickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${toKnowHeaderHeight()}px`,
});
