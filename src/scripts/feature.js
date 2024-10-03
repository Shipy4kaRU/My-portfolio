const featureSummary = document.querySelectorAll(".feature__summary");
const featureBtn = document.querySelector(".feature__button");
const featuresDropdown = document.querySelectorAll(".feature__dropdown");
const featuresSoft = document.querySelectorAll(".feature__dropdown--soft");

export const setFeatureSummaryRotate = function () {
  featureSummary.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.target.classList.toggle("expended");
    });
  });
};

let isActive = {
  Soft: 0,
  Side: 0,
};
export const openMenuFeatures = function (e) {
  if (!e) return;
  const dataset = e.target.dataset.feature;
  const targets = document.querySelectorAll(`.feature__dropdown--${dataset}`);
  if (!isActive[`${dataset}`]) {
    e.target.innerHTML = `Свернуть все`;
    targets.forEach((feature) => {
      feature.setAttribute("open", " ");
    });
    return (isActive[`${dataset}`] = true);
  }
  if (isActive[`${dataset}`]) {
    e.target.innerHTML = `Раскрыть все`;
    targets.forEach((feature) => {
      feature.removeAttribute("open");
    });
    return (isActive[`${dataset}`] = false);
  }
};
