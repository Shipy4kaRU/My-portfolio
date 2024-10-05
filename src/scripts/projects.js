const projectsList = document.querySelector(".projects__list");
const btnsProjects = document.querySelector(".projects__btn-list");

const createIconsPath = function (project) {
  project.steck.map((icon) => {
    if (icon === "bem" || icon === "redux") {
      return project.path.push(
        `<li>
          <svg class="icon" width="20px" height="20px">
            <use xlink:href="#${icon}"></use>
          </svg>
        </li>`
      );
    }
    return project.path.push(
      `<li>
        <svg class="icon" width="20px" height="20px">
          <use xlink:href="./img/sprite.svg#${icon}"></use>
        </svg>
      </li>`
    );
  });
};

let html;
const createProject = function (project) {
  let classOfProject = "";
  if (project.sub === "Личный проект") {
    classOfProject = "jsPersonProject";
  }
  if (project.sub === "Тренировка навыков") {
    classOfProject = "jsTrainingProject";
  }
  let githubLink = "";
  let projectLink = "";
  if (project.linkGithubRepository.trim().length > 0) {
    githubLink = `href='${project.linkGithubRepository}'`;
  }
  if (project.linkProject.trim().length > 0) {
    projectLink = `href='${project.linkProject}'`;
  }
  html = `<li class="projects__item ${classOfProject}">
              <div class="projects__card project-card">
                <div class="project-card__image">

<picture>
              <!-- Проверка на поддержку WebP для десктопа -->
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.webp`
                      : `NotFoundDesk.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.webp`
                      : `NotFoundDesk@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.webp`
                      : `NotFoundDesk@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.webp`
                      : `NotFoundDesk@4x.webp`
                  } 4x
                "
              />
              <source
                media="(min-width: 1280px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.png`
                      : `NotFoundDesk.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.png`
                      : `NotFoundDesk@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.png`
                      : `NotFoundDesk@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.png`
                      : `NotFoundDesk@4x.png`
                  } 4x
                "
              />

              <!-- Проверка на поддержку WebP для планшетов -->
              <source
                type="image/webp"
                media="(min-width: 768px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.webp`
                      : `NotFoundDesk.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.webp`
                      : `NotFoundDesk@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.webp`
                      : `NotFoundDesk@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.webp`
                      : `NotFoundDesk@4x.webp`
                  } 4x
                "
              />
              <source
                media="(min-width: 768px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.png`
                      : `NotFoundDesk.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.png`
                      : `NotFoundDesk@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.png`
                      : `NotFoundDesk@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.png`
                      : `NotFoundDesk@4x.png`
                  } 4x
                "
              />

              <!-- Проверка на поддержку WebP для мобильных устройств -->
              <source
                type="image/webp"
                media="(max-width: 767.9px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.webp`
                      : `NotFoundMobile.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.webp`
                      : `NotFoundMobile@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.webp`
                      : `NotFoundMobile@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.webp`
                      : `NotFoundMobile@4x.webp`
                  } 4x
                "
              />
              <source
                media="(max-width: 767.9px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}.png`
                      : `NotFoundMobile.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}@2x.png`
                      : `NotFoundMobile@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@3x.png`
                      : `NotFoundMobile@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}@4x.png`
                      : `NotFoundMobile@4x.png`
                  } 4x
                "
              />

              <img
                src='./img/${
                  project.picture
                    ? `${project.picture}.png`
                    : `NotFoundDesk.png`
                }'
                alt='Картинка проекта «${project.name}»'
              />
            </picture>

                </div>
                <p class="project-card__name">${project.name}</p>
                <p class="project-card__caption">${project.sub}</p>
                <ul class="projects-card__stack stack-list"></ul>
                <p class="project-card__desc">
                  ${project.text}
                </p>
                <ul class="project-card__links links-list">
                  <li class="links-list__item">
                    <a ${githubLink}
                    } class="links-list__link links-list__link--github ${
                      githubLink === "" ? "disabled" : " "
                    }">
                      <div>
                        <span class="visually-hidden">Github ссылка</span>
                        <svg
                          viewBox="0 0 44 44"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                        >
                          <g clip-path="url(#a)">
                            <path
                              d="M22 .54a22 22 0 0 0-6.96 42.88c1.1.2 1.5-.48 1.5-1.06l-.02-3.74c-6.12 1.33-7.41-2.95-7.41-2.95-1-2.54-2.45-3.22-2.45-3.22-2-1.36.15-1.34.15-1.34 2.21.16 3.37 2.27 3.37 2.27 1.97 3.36 5.15 2.4 6.41 1.83.2-1.42.77-2.4 1.4-2.94-4.9-.55-10.03-2.45-10.03-10.88 0-2.4.86-4.36 2.27-5.9-.25-.55-1-2.79.2-5.82 0 0 1.83-.6 6.04 2.25a21.1 21.1 0 0 1 11 0c4.18-2.84 6.02-2.25 6.02-2.25a8.04 8.04 0 0 1 .22 5.82 8.52 8.52 0 0 1 2.26 5.9c0 8.46-5.14 10.32-10.04 10.86.77.66 1.49 2 1.49 4.07 0 2.94-.03 5.3-.03 6.02 0 .58.38 1.27 1.51 1.05a21.92 21.92 0 0 0 15.1-20.85 22 22 0 0 0-22-22Z"
                              fill="#D1C4E9"
                            />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <path fill="#fff" d="M0 0h44v44h-44z" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li class="links-list__item">
                    <a ${projectLink}
                    class="links-list__link links-list__link--project ${
                      projectLink === "" ? "disabled" : " "
                    }">
                      <div>
                        <span class="visually-hidden">Ссылка на проект</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          width="20px"
                          height="20px"
                        >
                          <path
                            fill="#D1C4E9"
                            d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"
                          ></path>
                          <path
                            fill="#D1C4E9"
                            d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"
                          ></path>
                        </svg>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul class="project-card__icons icons-list">
                  ${project.path.join("")}
                </ul>
              </div>
            </li>`;
  projectsList.insertAdjacentHTML("afterbegin", html);
};

export const addProjectsToHTML = function (projects) {
  projects.forEach((project) => {
    project.path = [];
    createIconsPath(project);
    createProject(project);
  });
};

export const showProjects = function (allProjects, type) {
  const projectsArr = Array.from(allProjects);
  projectsArr.forEach((project) => project.classList.remove("hidden"));
  const hideProjects = projectsArr.filter(
    (project) => !project.classList.contains(`${type}`)
  );
  hideProjects.forEach((project) => project.classList.add("hidden"));
};
