var btnDisploma=document.querySelector(".js-education__btn-click"),body=document.querySelector(".body"),modalWindow=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnCloseModal=document.querySelector(".modal__btn"),showModalWindow=function(e,n){var o=localStorage.getItem("theme"),c="dark"===o?!0:!1,o=(o&&"system"!==o||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(c=!0),document.getElementById("picture"));o&&o.remove(),modalWindow.insertAdjacentHTML("beforeend",'<picture id=\'picture\'>\n              \x3c!-- Проверка на поддержку WebP для десктопа --\x3e\n              <source\n                type="image/webp"\n                media="(min-width: 1280px)"\n                srcset="\n                  ./img/'.concat(e,"Desk.webp,\n                  ./img/").concat(e,"Desk@2x.webp 2x,\n                  ./img/").concat(e,"Desk@3x.webp 3x,\n                  ./img/").concat(e,'Desk@4x.webp 4x\n                "\n              />\n              <source\n                media="(min-width: 1280px)"\n                srcset="\n                  ./img/').concat(e,"Desk.jpg,\n                  ./img/").concat(e,"Desk@2x.jpg 2x,\n                  ./img/").concat(e,"Desk@3x.jpg 3x,\n                  ./img/").concat(e,'Desk@4x.jpg 4x\n                "\n              />\n\n              \x3c!-- Проверка на поддержку WebP для планшетов --\x3e\n              <source\n                type="image/webp"\n                media="(min-width: 768px)"\n                srcset="\n                  ./img/').concat(e,"Tablet.webp,\n                  ./img/").concat(e,"Tablet@2x.webp 2x,\n                  ./img/").concat(e,"Tablet@3x.webp 3x,\n                  ./img/").concat(e,'Tablet@4x.webp 4x\n                "\n              />\n              <source\n                media="(min-width: 768px)"\n                srcset="\n                  ./img/').concat(e,"Tablet.jpg,\n                  ./img/").concat(e,"Tablet@2x.jpg 2x,\n                  ./img/").concat(e,"Tablet@3x.jpg 3x,\n                  ./img/").concat(e,'Tablet@4x.jpg 4x\n                "\n              />\n\n              \x3c!-- Проверка на поддержку WebP для мобильных устройств --\x3e\n              <source\n                type="image/webp"\n                media="(max-width: 767.9px)"\n                srcset="\n                  ./img/').concat(e,"Mobile.webp,\n                  ./img/").concat(e,"Mobile@2x.webp 2x,\n                  ./img/").concat(e,"Mobile@3x.webp 3x,\n                  ./img/").concat(e,'Mobile@4x.webp 4x\n                "\n              />\n              <source\n                media="(max-width: 767.9px)"\n                srcset="\n                  ../img/').concat(e,"Mobile.jpg,\n                  ../img/").concat(e,"Mobile@2x.jpg 2x,\n                  ./img/").concat(e,"Mobile@3x.jpg  3x,\n                  ./img/").concat(e,'Mobile@4x.jpg  4x\n                "\n              />\n              <img src="./img/').concat(e,'Desk.jpg" alt="').concat(n,"\" class='modal__img' ").concat(c?"style=' filter: brightness(.8)'":"","/>\n            </picture>")),overlay.style.display="block",modalWindow.show()},hideModalWindow=function(){overlay.style.display="none",modalWindow.close()};export{showModalWindow,hideModalWindow};
//# sourceMappingURL=modalWindow.js.map
