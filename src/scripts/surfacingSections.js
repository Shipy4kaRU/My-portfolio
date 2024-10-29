// SURFACING SECTIONS
const allParts = Array.from(document.querySelectorAll("section"));
allParts.splice(0, 2); //удаляю первые 2 секции для того, чтобы observer их не учитывал

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
    surfacingObserver.observe(part);
    part.classList.add("part--hidden");
  });
};

export default surfacingSections;
