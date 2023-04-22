import { teamInfo } from './team-info';

import ldSvgIcon from '../images/icons.svg';
import ghSvgIcon from '../images/icons.svg';

const teamCardContainer = document.querySelector('.modal-team__list');
const teamCard = createTeamCardItems(teamInfo);
teamCardContainer.insertAdjacentHTML('beforeend', teamCard);

export function createTeamCardItems(teamInfo) {
  return teamInfo
    .map(({ nameDev, position, photo170x1, photo170x2, ldLink, ghLink }) => {
      return ` <li class="modal-team__item">
            <div class="modal-team__img-container">
              <img class="modal-team__img"
                srcset="${photo170x1} 1x, ${photo170x2} 2x"
                src='${photo170x1}' alt='${nameDev}' width="200" height="150" />
            </div>
            <h2 class="team__name">${nameDev}</h2>
            <p class="team__profession">${position}</p>
            <ul class="team__socials list">
              <li><a class="team__social" href="${ghLink}" target="_blank"
                  rel="noreferrer noopener" aria-label="GitHub">
                  <svg class="team-icon" width="30" height="30">
                    <use href="${ghSvgIcon}#icon-github"></use>
                  </svg>
                </a></li>
              <li><a class="team__social" href="${ldLink}"
                  target="_blank" rel="noreferrer noopener" aria-label="Linkedin">
                  <svg class="team-icon" width="30" height="30">
                    <use href="${ldSvgIcon}#icon-linkedin"></use>
                  </svg>
                </a></li>
            </ul>
          </li>`;
    })
    .join('');
}

console.log('from render', teamInfo[0].photo);
