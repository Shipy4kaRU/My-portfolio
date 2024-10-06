var html,projectsList=document.querySelector(".projects__list"),btnsProjects=document.querySelector(".projects__btn-list"),createIconsPath=function(c){c.steck.map(function(n){return"bem"===n||"redux"===n?c.path.push('<li>\n          <svg class="icon" width="15px" height="15px">\n            <use xlink:href="#'.concat(n,'"></use>\n          </svg>\n        </li>')):c.path.push('<li>\n        <svg class="icon" width="20px" height="20px">\n          <use xlink:href="./img/sprite.svg#'.concat(n,'"></use>\n        </svg>\n      </li>'))})},createProject=function(n){var c="",t=("Личный проект"===n.sub&&(c="jsPersonProject"),"Тренировка навыков"===n.sub&&(c="jsTrainingProject"),""),e="";0<n.linkGithubRepository.trim().length&&(t="href='".concat(n.linkGithubRepository,"'")),0<n.linkProject.trim().length&&(e="href='".concat(n.linkProject,"'")),html='<li class="projects__item '.concat(c,'">\n              <div class="projects__card project-card">\n                <div class="project-card__image">\n\n<picture>\n              \x3c!-- Проверка на поддержку WebP для десктопа --\x3e\n              <source\n                type="image/webp"\n                media="(min-width: 1280px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Desk.webp"):"NotFoundDesk.webp",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@2x.webp"):"NotFoundDesk@2x.webp"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@3x.webp"):"NotFoundDesk@3x.webp"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@4x.webp"):"NotFoundDesk@4x.webp",' 4x\n                "\n              />\n              <source\n                media="(min-width: 1280px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Desk.png"):"NotFoundDesk.png",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@2x.png"):"NotFoundDesk@2x.png"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@3x.png"):"NotFoundDesk@3x.png"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@4x.png"):"NotFoundDesk@4x.png",' 4x\n                "\n              />\n\n              \x3c!-- Проверка на поддержку WebP для планшетов --\x3e\n              <source\n                type="image/webp"\n                media="(min-width: 768px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Desk.webp"):"NotFoundDesk.webp",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@2x.webp"):"NotFoundDesk@2x.webp"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@3x.webp"):"NotFoundDesk@3x.webp"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@4x.webp"):"NotFoundDesk@4x.webp",' 4x\n                "\n              />\n              <source\n                media="(min-width: 768px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Desk.png"):"NotFoundDesk.png",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@2x.png"):"NotFoundDesk@2x.png"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@3x.png"):"NotFoundDesk@3x.png"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Desk@4x.png"):"NotFoundDesk@4x.png",' 4x\n                "\n              />\n\n              \x3c!-- Проверка на поддержку WebP для мобильных устройств --\x3e\n              <source\n                type="image/webp"\n                media="(max-width: 767.9px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Mobile.webp"):"NotFoundMobile.webp",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@2x.webp"):"NotFoundMobile@2x.webp"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@3x.webp"):"NotFoundMobile@3x.webp"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@4x.webp"):"NotFoundMobile@4x.webp",' 4x\n                "\n              />\n              <source\n                media="(max-width: 767.9px)"\n                srcset="\n                  ./img/').concat(n.picture?"".concat(n.picture,"Mobile.png"):"NotFoundMobile.png",",\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@2x.png"):"NotFoundMobile@2x.png"," 2x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@3x.png"):"NotFoundMobile@3x.png"," 3x,\n                  ./img/").concat(n.picture?"".concat(n.picture,"Mobile@4x.png"):"NotFoundMobile@4x.png"," 4x\n                \"\n              />\n\n              <img\n                src='./img/").concat(n.picture?"".concat(n.picture,".png"):"NotFoundDesk.png","'\n                alt='Картинка проекта «").concat(n.name,'»\'\n              />\n            </picture>\n\n                </div>\n                <p class="project-card__name">').concat(n.name,'</p>\n                <p class="project-card__caption">').concat(n.sub,'</p>\n                <ul class="projects-card__stack stack-list"></ul>\n                <p class="project-card__desc">\n                  ').concat(n.text,'\n                </p>\n                <ul class="project-card__links links-list">\n                  <li class="links-list__item">\n                    <a ').concat(t,'\n                    } class="links-list__link links-list__link--github ').concat(""===t?"disabled":" ",'">\n                      <div>\n                        <span class="visually-hidden">Github ссылка</span>\n                        <svg\n                          viewBox="0 0 44 44"\n                          fill="none"\n                          xmlns="http://www.w3.org/2000/svg"\n                          width="20px"\n                          height="20px"\n                        >\n                          <g clip-path="url(#a)">\n                            <path\n                              d="M22 .54a22 22 0 0 0-6.96 42.88c1.1.2 1.5-.48 1.5-1.06l-.02-3.74c-6.12 1.33-7.41-2.95-7.41-2.95-1-2.54-2.45-3.22-2.45-3.22-2-1.36.15-1.34.15-1.34 2.21.16 3.37 2.27 3.37 2.27 1.97 3.36 5.15 2.4 6.41 1.83.2-1.42.77-2.4 1.4-2.94-4.9-.55-10.03-2.45-10.03-10.88 0-2.4.86-4.36 2.27-5.9-.25-.55-1-2.79.2-5.82 0 0 1.83-.6 6.04 2.25a21.1 21.1 0 0 1 11 0c4.18-2.84 6.02-2.25 6.02-2.25a8.04 8.04 0 0 1 .22 5.82 8.52 8.52 0 0 1 2.26 5.9c0 8.46-5.14 10.32-10.04 10.86.77.66 1.49 2 1.49 4.07 0 2.94-.03 5.3-.03 6.02 0 .58.38 1.27 1.51 1.05a21.92 21.92 0 0 0 15.1-20.85 22 22 0 0 0-22-22Z"\n                              fill="#D1C4E9"\n                            />\n                          </g>\n                          <defs>\n                            <clipPath id="a">\n                              <path fill="#fff" d="M0 0h44v44h-44z" />\n                            </clipPath>\n                          </defs>\n                        </svg>\n                      </div>\n                    </a>\n                  </li>\n                  <li class="links-list__item">\n                    <a ').concat(e,'\n                    class="links-list__link links-list__link--project ').concat(""===e?"disabled":" ",'">\n                      <div>\n                        <span class="visually-hidden">Ссылка на проект</span>\n                        <svg\n                          xmlns="http://www.w3.org/2000/svg"\n                          viewBox="0 0 16 16"\n                          width="20px"\n                          height="20px"\n                        >\n                          <path\n                            fill="#D1C4E9"\n                            d="M14.9 1.1c-1.4-1.4-3.7-1.4-5.1 0l-4.4 4.3c-1.4 1.5-1.4 3.7 0 5.2 0.1 0.1 0.3 0.2 0.4 0.3l1.5-1.5c-0.1-0.1-0.3-0.2-0.4-0.3-0.6-0.6-0.6-1.6 0-2.2l4.4-4.4c0.6-0.6 1.6-0.6 2.2 0s0.6 1.6 0 2.2l-1.3 1.3c0.4 0.8 0.5 1.7 0.4 2.5l2.3-2.3c1.5-1.4 1.5-3.7 0-5.1z"\n                          ></path>\n                          <path\n                            fill="#D1C4E9"\n                            d="M10.2 5.1l-1.5 1.5c0 0 0.3 0.2 0.4 0.3 0.6 0.6 0.6 1.6 0 2.2l-4.4 4.4c-0.6 0.6-1.6 0.6-2.2 0s-0.6-1.6 0-2.2l1.3-1.3c-0.4-0.8-0.1-1.3-0.4-2.5l-2.3 2.3c-1.4 1.4-1.4 3.7 0 5.1s3.7 1.4 5.1 0l4.4-4.4c1.4-1.4 1.4-3.7 0-5.1-0.2-0.1-0.4-0.3-0.4-0.3z"\n                          ></path>\n                        </svg>\n                      </div>\n                    </a>\n                  </li>\n                </ul>\n                <ul class="project-card__icons icons-list">\n                  ').concat(n.path.join(""),"\n                </ul>\n              </div>\n            </li>"),projectsList.insertAdjacentHTML("afterbegin",html)},addProjectsToHTML=function(n){n.forEach(function(n){n.path=[],createIconsPath(n),createProject(n)})},showProjects=function(n,c){n=Array.from(n);n.forEach(function(n){return n.classList.remove("hidden")}),n.filter(function(n){return!n.classList.contains("".concat(c))}).forEach(function(n){return n.classList.add("hidden")})};export{addProjectsToHTML,showProjects};
//# sourceMappingURL=projects.js.map
