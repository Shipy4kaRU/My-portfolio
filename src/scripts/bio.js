// IT'S NOT BEING USED

const bioImgWrapper = document.querySelector(".bio__picture-wrapper");
const bio = document.querySelector(".bio");

export const toKnowBioHeight = function () {
  bioImgWrapper.innerHTML = "";
  return bio.clientHeight;
};

export const toSetBioPicture = function (bioHeight) {
  bioImgWrapper.innerHTML = `<img src="../img/BioPhoto.jpg" alt="Мое фото" class='bio__img'/>`;
  const bioImg = document.querySelector(".bio__img");
  bioImg.style.maxHeight = `${bioHeight}px`;
  bioImg.style.Wigth = `100%`;
};
