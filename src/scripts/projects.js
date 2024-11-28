const projectsList = document.querySelector(".projects__list");
const btnsProjects = document.querySelector(".projects__btn-list");

const createIconsPath = function (project) {
  project.steck.map((icon) => {
    if (icon === "redux") {
      return project.path.push(
        `<li>
          <svg class="skill__icon-svg--redux" width="15px" height="15px">
            <use xlink:href="#${icon}"></use>
          </svg>
        </li>`
      );
    }
    if (icon === "react-router")
      return project.path
        .push(`<li><svg width="800px" height="800px" viewBox="0 -58 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" class='skill__icon-svg'>
	<g>
		<path d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z" fill="currentColor">

</path>
		<path d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z" fill="#D0021B">

</path>
	</g>
</svg></li>`);
    if (icon === "bem") {
      return project.path.push(
        `<li>
          <svg class="icon" width="15px" height="15px">
            <use xlink:href="#${icon}"></use>
          </svg>
        </li>`
      );
    }
    if (icon === "vite")
      return project.path.push(
        `<li>
        <svg width="800px" height="800px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" class='skill__icon-svg'><title>file_type_vite</title><path d="M29.8836 6.146L16.7418 29.6457c-.2714.4851-.9684.488-1.2439.0052L2.0956 6.1482c-.3-.5262.1498-1.1635.746-1.057l13.156 2.3516a.7144.7144 0 00.2537-.0004l12.8808-2.3478c.5942-.1083 1.0463.5241.7515 1.0513z" fill="url(#paint0_linear)"/><path d="M22.2644 2.0069l-9.7253 1.9056a.3571.3571 0 00-.2879.3294l-.5982 10.1038c-.014.238.2045.4227.4367.3691l2.7077-.6248c.2534-.0585.4823.1647.4302.4194l-.8044 3.9393c-.0542.265.1947.4918.4536.4132l1.6724-.5082c.2593-.0787.5084.1487.4536.414l-1.2784 6.1877c-.08.387.4348.598.6495.2662L16.5173 25 24.442 9.1848c.1327-.2648-.096-.5667-.387-.5106l-2.787.5379c-.262.0505-.4848-.1934-.4109-.4497l1.8191-6.306c.074-.2568-.1496-.5009-.4118-.4495z" fill="url(#paint1_linear)"/><defs id="defs50"><linearGradient id="paint0_linear" x1="6.0002" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#41D1FF" id="stop38"/><stop offset="1" stop-color="#BD34FE" id="stop40"/></linearGradient><linearGradient id="paint1_linear" x1="194.651" y1="8.8182" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.07142 0 0 .07142 1.3398 1.8944)"><stop stop-color="#FFEA83" id="stop43"/><stop offset=".0833" stop-color="#FFDD35" id="stop45"/><stop offset="1" stop-color="#FFA800" id="stop47"/></linearGradient></defs></svg>
      </li>`
      );
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
                      ? `${project.picture}Desk.webp`
                      : `NotFoundDesk.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@2x.webp`
                      : `NotFoundDesk@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@3x.webp`
                      : `NotFoundDesk@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@4x.webp`
                      : `NotFoundDesk@4x.webp`
                  } 4x
                "
              />
              <source
                media="(min-width: 1280px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk.png`
                      : `NotFoundDesk.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@2x.png`
                      : `NotFoundDesk@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@3x.png`
                      : `NotFoundDesk@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@4x.png`
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
                      ? `${project.picture}Desk.webp`
                      : `NotFoundDesk.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@2x.webp`
                      : `NotFoundDesk@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@3x.webp`
                      : `NotFoundDesk@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@4x.webp`
                      : `NotFoundDesk@4x.webp`
                  } 4x
                "
              />
              <source
                media="(min-width: 768px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk.png`
                      : `NotFoundDesk.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@2x.png`
                      : `NotFoundDesk@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@3x.png`
                      : `NotFoundDesk@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Desk@4x.png`
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
                      ? `${project.picture}Mobile.webp`
                      : `NotFoundMobile.webp`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@2x.webp`
                      : `NotFoundMobile@2x.webp`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@3x.webp`
                      : `NotFoundMobile@3x.webp`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@4x.webp`
                      : `NotFoundMobile@4x.webp`
                  } 4x
                "
              />
              <source
                media="(max-width: 767.9px)"
                srcset="
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile.png`
                      : `NotFoundMobile.png`
                  },
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@2x.png`
                      : `NotFoundMobile@2x.png`
                  } 2x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@3x.png`
                      : `NotFoundMobile@3x.png`
                  } 3x,
                  ./img/${
                    project.picture
                      ? `${project.picture}Mobile@4x.png`
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
                style = '${
                  project.picture
                    ? ""
                    : "background-color: var(--substrate-color);filter: brightness(.8);object-fit: contain; "
                }'
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
