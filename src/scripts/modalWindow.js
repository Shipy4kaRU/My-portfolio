const btnDisploma = document.querySelector(".js-education__btn-click");
const body = document.querySelector(".body");
const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".modal__btn");

export const showModalWindow = function (img, alt) {
  overlay.style.display = "block";
  modalWindow.show();
};

export const hideModalWindow = function () {
  overlay.style.display = "none";
  modalWindow.close();
};

btnDisploma.addEventListener("click", showModalWindow);

overlay.addEventListener("click", hideModalWindow);

btnCloseModal.addEventListener("click", hideModalWindow);
