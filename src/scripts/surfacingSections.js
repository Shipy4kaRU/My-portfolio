// SURFACING SECTIONS
const allParts = Array.from(document.querySelectorAll("section"));
// allParts.splice(0, 2); //удаляю первые 2 секции для того, чтобы observer их не учитывал

const getSurfacing = function (entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("part--hidden");
  observer.unobserve(entry.target);
};

const surfacingObserver = new IntersectionObserver(getSurfacing, {
  root: null,
  threshold: 0.02,
});

const surfacingSections = () => {
  allParts.forEach(function (part) {
    // Проверяем, если элемент уже в поле видимости
    const rect = part.getBoundingClientRect();
    console.log(rect);
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // получается что хоть кусочек если в поле видимости, то этот элемент уже не скрывается
    // console.log(window.innerHeight);
    // console.log(isVisible);

    if (isVisible) {
      part.classList.remove("part--hidden");
      surfacingObserver.unobserve(part); // Отключаем наблюдение за видимым элементом
    } else {
      part.classList.add("part--hidden"); // Добавляем класс, если элемент не виден
      surfacingObserver.observe(part); // Начинаем наблюдение за элементом
    }
  });
};

export default surfacingSections;
