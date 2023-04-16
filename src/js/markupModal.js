//const main = document.querySelector('main');
export { markupModal, movieId };
import {addAndRemoveToLocalStorage} from './localStorage';
import {onClickToWatched, onClickToQueue} from './onClickToWatch'
import {getKeyTrailerByID} from './getKeyTrailerByID'
import { getMovieByID } from './getMovieByID';

// змінні масивів для черги та переглянутих
let arrayQueue = [];
let arrayWatched = [];
let movieId;



async function markupModal(id) {
  movieId = id;
   // запрос на сервер для отримання ключа трейлера
  let trailerId = await getKeyTrailerByID(id)
  // console.log(trailerId);
  // рендер розмітки по ід
  let movieInfo = await getMovieByID(id);
  // console.log(movieInfo);

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

  if (arrayWatched.includes(movieId)) {
    textWatch = 'remove from Watched';
    watchClass = 'btn-add-watched card-btn card-btn-active';
  }
  if (arrayQueue.includes(movieId)) {
    textQueue = 'remove from Queue';
    queueClass = 'btn-add-queue card-btn card-btn-active';
  }

  let modalString = `<div data-modal class="backdrop">
  <div class="modal-window" > 
    <div class="modal-close">
    <button type="button" class="close-button">X</button>
     
    </div>
    <div class="film-container">
      <div class="cinema-card">
         <img class="card-photo" src="https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}" alt="movie cover" />
      </div>

      <div class="card-block">
        <p class="card-title">${movieInfo.title}</p>
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
  document.getElementsByTagName('body')[0].appendChild(divModal);
  //Закрытие модалки
  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', onClose);

  // тут треба додати слухача на закриття по кліку на бекдроп!!!!
  // тільки от при натисканні на модалку теж закривається
  // const backdrop = document.querySelector('.backdrop');
  // backdrop.addEventListener('click', onClose);

  function onClose(evt) {
    evt.preventDefault();
    divModal.remove();
    //може тут треба зняти слухача натиску кнопки  закриття і еатиску бекдропа????
  }

  //!?-------------------------- ФУНКЦІОНАЛ ЛОКАЛ СТОРЕДЖ----------------------------\\

  // додаємо слухачів на кнопки в модалці
  document.querySelector('.btn-add-watched').addEventListener('click', onClickToWatched);
  document.querySelector('.btn-add-queue').addEventListener('click', onClickToQueue);

  

  
}
