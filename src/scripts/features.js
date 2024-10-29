const featureListSide = document.querySelector(".feature__list--side");
const featureListSoft = document.querySelector(".feature__list--soft");

const createFeature = (feature) => {
  if (feature.title === "end") {
    const html = `<li class="feature__item">
                <div class="feature__content">
                  <p class="feature__text">
                    ${feature.text}
                  </p>
                </div>
              </li>`;
    if (feature.type === "side")
      return featureListSide.insertAdjacentHTML("beforeend", html);
    if (feature.type === "soft")
      return featureListSoft.insertAdjacentHTML("beforeend", html);
  }
  const html =
    feature.type === "side"
      ? `<li class="feature__item">
                <details class="feature__dropdown feature__dropdown--side">
                  <summary class="feature__summary">${feature.title}</summary>
                  <div class="feature__content">
                    <p class="feature__text">
                      ${feature.text}
                    </p>
                  </div>
                </details>
              </li>`
      : `<li class="feature__item">
                <details class="feature__dropdown feature__dropdown--soft">
                  <summary class="feature__summary">${feature.title}</summary>
                  <div class="feature__content">
                    <p class="feature__text">
                      ${feature.text}
                    </p>
                  </div>
                </details>
              </li>`;
  feature.type === "side"
    ? featureListSide.insertAdjacentHTML("beforeend", html)
    : featureListSoft.insertAdjacentHTML("beforeend", html);
};

const createAllFeatures = (featuresList) => {
  featuresList.forEach((feature) => createFeature(feature));
};

export default createAllFeatures;
