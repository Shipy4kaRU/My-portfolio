const btnsTheme = document.querySelectorAll(".nav__btn-theme");
const darkThemeStylesheet = document.getElementById("darkTheme");
const lightThemeStylesheet = document.getElementById("lightTheme");

const setThemeToLocalStorage = function (theme) {
  if (localStorage.getItem("theme") === `${theme}`) return;
  localStorage.setItem("theme", `${theme}`);
  checkThemeFromLocalStorage();
};

export const checkThemeFromLocalStorage = function () {
  const theme = localStorage.getItem("theme");
  btnsTheme.forEach((btn) => btn.classList.remove("nav__btn--active"));
  document
    .querySelector(`.nav__btn-theme--${theme ? theme : "system"}`)
    .classList.add("nav__btn--active");
  if (matchMedia("(prefers-color-scheme: dark-theme)")) {
    if (theme === "dark") {
      lightThemeStylesheet.media = "none";
      darkThemeStylesheet.media = "all";
    }
    if (theme === "light") {
      darkThemeStylesheet.media = "none";
      lightThemeStylesheet.media = "all";
    }
    if (theme === "system" || !theme) {
      localStorage.clear("theme");
      darkThemeStylesheet.media = "(prefers-color-scheme : dark)";
      lightThemeStylesheet.media = "(prefers-color-scheme : light)";
    }
  } else return;
};

export const changeTheme = function (e) {
  if (!e) return;
  let theme;
  if (e.target.closest(".nav__btn-theme")) {
    theme = e.target.closest(".nav__btn-theme").dataset.theme;
    setThemeToLocalStorage(theme);
  }
};
