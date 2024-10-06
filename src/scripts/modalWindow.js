const btnDisploma = document.querySelector(".js-education__btn-click");
const body = document.querySelector(".body");
const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".modal__btn");

export const showModalWindow = function (img, alt) {
  console.log(img);
  const pictureElement = document.getElementById("picture");
  if (pictureElement) {
    pictureElement.remove();
  }
  modalWindow.insertAdjacentHTML(
    "beforeend",
    `<picture id='picture'>
              <!-- Проверка на поддержку WebP для десктопа -->
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcset="
                  ./img/${img}Desk.webp,
                  ./img/${img}Desk@2x.webp 2x,
                  ./img/${img}Desk@3x.webp 3x,
                  ./img/${img}Desk@4x.webp 4x
                "
              />
              <source
                media="(min-width: 1280px)"
                srcset="
                  ./img/${img}Desk.jpg,
                  ./img/${img}Desk@2x.jpg 2x,
                  ./img/${img}Desk@3x.jpg 3x,
                  ./img/${img}Desk@4x.jpg 4x
                "
              />

              <!-- Проверка на поддержку WebP для планшетов -->
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcset="
                  ./img/${img}Tablet.webp,
                  ./img/${img}Tablet@2x.webp 2x,
                  ./img/${img}Tablet@3x.webp 3x,
                  ./img/${img}Tablet@4x.webp 4x
                "
              />
              <source
                media="(min-width: 768px)"
                srcset="
                  ./img/${img}Tablet.jpg,
                  ./img/${img}Tablet@2x.jpg 2x,
                  ./img/${img}Tablet@3x.jpg 3x,
                  ./img/${img}Tablet@4x.jpg 4x
                "
              />

              <!-- Проверка на поддержку WebP для мобильных устройств -->
              <source
                type="image/webp"
                media="(max-width: 767.9px)"
                srcset="
                  ./img/${img}Mobile.webp,
                  ./img/${img}Mobile@2x.webp 2x,
                  ./img/${img}Mobile@3x.webp 3x,
                  ./img/${img}Mobile@4x.webp 4x
                "
              />
              <source
                media="(max-width: 767.9px)"
                srcset="
                  ../img/${img}Mobile.jpg,
                  ../img/${img}Mobile@2x.jpg 2x,
                  ./img/${img}Mobile@3x.jpg  3x,
                  ./img/${img}Mobile@4x.jpg  4x
                "
              />
              <img src="./img/${img}Desk.jpg" alt="${alt}" class='modal__img' />
            </picture>`
  );
  overlay.style.display = "block";
  modalWindow.show();
};

export const hideModalWindow = function () {
  overlay.style.display = "none";
  modalWindow.close();
};
