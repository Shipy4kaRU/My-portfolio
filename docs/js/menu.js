var main=document.querySelector(".main"),btnMenu=document.querySelector(".nav__btn-menu"),menu=document.querySelector(".nav__list-container"),header=document.querySelector(".header__container"),overlay=document.querySelector(".overlay"),isMenuOpen=!1,openMenu=function(){overlay.classList.add("jsOverlay"),menu.classList.remove("nav--close"),header.classList.remove("jsMenuClose")},closeMenu=function(){overlay.classList.remove("jsOverlay"),menu.classList.add("nav--close"),header.classList.add("jsMenuClose")},toggleMenu=function(){isMenuOpen&&closeMenu(),isMenuOpen||openMenu(),isMenuOpen=!isMenuOpen};export{closeMenu,toggleMenu};
//# sourceMappingURL=menu.js.map
