//const main = document.querySelector('main');
export { markupModal, movieId };
import { getFromStorage } from './localStorage';
import { onClickToWatched, onClickToQueue } from './onClickToWatch';
import { getKeyTrailerByID } from './getKeyTrailerByID';
import { getMovieByID } from './getMovieByID';
import posterPlug from '../images/poster-plug.jpg';
import { renderBeforeCloseModalOnMyLib } from './renderMyLibBeforeClose';

// змінні масивів для черги та переглянутих

let movieId;
let arrayWatched;
let arrayQueue;


if (localStorage.getItem('idWatched')) {
  arrayWatched = getFromStorage('idWatched');
}
if (localStorage.getItem('idQueue')) {
  arrayQueue = getFromStorage('idQueue');
}

async function markupModal(id) {
  movieId = id;
  // запрос на сервер для отримання ключа трейлера
  let trailerId = await getKeyTrailerByID(id);
  // (trailerId);
  // рендер розмітки по ід
  let movieInfo = await getMovieByID(id);
  // (movieInfo);

  // перевірка наявності даних перед рендером
  let trailerToLayout = '';
  if (trailerId !== undefined) {
    trailerToLayout = `<div class="trailer__container">
    <!-- У лінк додаємо id фільму -->
    <iframe
      src="https://www.youtube.com/embed/${trailerId}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class="video-frame"
    ></iframe>
  </div>`;
  }

  //
  let tempGenres = [];
  movieInfo.genres.forEach(genre => {
    tempGenres.push(genre.name);
  });
  let tempGenresString = tempGenres.join(', ');

  let textWatch = 'add to Watched';
  let textQueue = 'add to Queue';
  let watchClass = 'btn-add-watched card-btn';
  let queueClass = 'btn-add-queue card-btn';

  arrayWatched = getFromStorage('idWatched');
  if (arrayWatched === null) {
    arrayWatched = [];
  }

  arrayQueue = getFromStorage('idQueue');
  if (arrayQueue === null) {
    arrayQueue = [];
  }

  if (arrayWatched.includes(movieId)) {
    textWatch = 'remove from Watched';
    watchClass = 'btn-add-watched card-btn card-btn-active';
  }
  if (arrayQueue.includes(movieId)) {
    textQueue = 'remove from Queue';
    queueClass = 'btn-add-queue card-btn card-btn-active';
  }

  let image_src = posterPlug;
  if (movieInfo.poster_path !== null) {
    image_src = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;
  }

  let modalString = `<div data-modal class="backdrop">
  <div class="modal-window" > 
    <div class="modal-close">
    <button type="button" class="close-button-movie-btn js-close-btn">
    <span class="leftright-movie-btn"></span>
            <span class="rightleft-movie-btn"></span>
     
            <span class="visually-hidden" aria-hidden="true">Close, button</span>
    </div>
    <div class="film-container">
      <div class="cinema-card">
         <img class="card-photo" src="${image_src}" alt="${movieInfo.tagline}" />

      </div>

      <div class="card-block">
        <p class="card-title">${movieInfo.title}</p>
        <div class="scroll-block">
        <ul class="filter-list list">
          <li class="filter-item">
            <p class="text-description">Vote / Votes</p>
            <p class="text-field">
              <span class="text-filed-rate" id="modal-vote">${movieInfo.vote_average}</span> /
              <span class="text-field-total" id="modal-votes">${movieInfo.vote_count}</span>
            </p>
          </li>
          <li class="filter-item">
            <p class="text-description">Popularity</p>
            <p class="text-field" id="modal-popularity">${movieInfo.popularity}</p>
          </li>
          <li class="filter-item">
            <p class="text-description">Original Title</p>
            <p class="text-field text-title" id="modal-original">
             ${movieInfo.original_title}
            </p>
          </li>
          <li class="filter-item">
            <p class="text-description">Genre</p>
            <p class="text-field" id="modal-genre">${tempGenresString}</p>
          </li>
        </ul>
        <ul class="card-descriotion list">
          <li>
            <p class="text-title">About</p>
          </li>
          <li>
            <p class="text-content">
              <span id="modal-content" class="md-modal-content"
                >${movieInfo.overview}</span
              >
              
            </p>
          </li>
        </ul>
        ${trailerToLayout} 
         </div>
        <div class="card-button">
          <button class="${watchClass}" type="submit">
            ${textWatch}
          </button>
          <button class="${queueClass}" type="submit">
            ${textQueue}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
  const divModal = document.createElement('div');
  divModal.innerHTML = modalString;
  //
  window.addEventListener('keydown', onEscKeyFilmPress);
  //
  document.getElementsByTagName('body')[0].appendChild(divModal);
  document.querySelector('body').classList.add('fixed-body');
  document.querySelector('#scrollToTopBtn').classList.add('visually-hidden');

  //Закрытие модалки
  const closeButton = document.querySelector('.js-close-btn');
  const filmBackdrop = document.querySelector('.backdrop');

  closeButton.addEventListener('click', onClose);
  filmBackdrop.addEventListener('click', onFilmBackdropClick);

  function onClose(evt) {
    // evt.preventDefault(); ----> так не працює
    // divModal.innerHTML = '';
    window.removeEventListener('keydown', onEscKeyFilmPress);
    document.querySelector('body').classList.remove('fixed-body');
    document
      .querySelector('#scrollToTopBtn')
      .classList.remove('visually-hidden');
    renderBeforeCloseModalOnMyLib()

    divModal.remove();
  }

  function onFilmBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }

  function onEscKeyFilmPress(e) {
    if (e.code === 'Escape') {
      onClose();
    }
  }

  //!?-------------------------- ФУНКЦІОНАЛ ЛОКАЛ СТОРЕДЖ----------------------------\\

  // додаємо слухачів на кнопки в модалці
  document
    .querySelector('.btn-add-watched')
    .addEventListener('click', onClickToWatched);
  document
    .querySelector('.btn-add-queue')
    .addEventListener('click', onClickToQueue);
}

