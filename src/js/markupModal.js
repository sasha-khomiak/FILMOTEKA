//const main = document.querySelector('main');
export { markupModal };

import { movie_id } from './handleClickFilms';
import { addAndRemoveToLocalStorage } from './localStorage';
import { keyTrailer } from './handleClickFilms';
// змінні масивів для черги та переглянутих
let arrayQueue = [];
let arrayWatched = [];

async function markupModal(response) {
  // перевірка наявності даних перед рендером
  console.log('Rendered:', keyTrailer);
  if (keyTrailer === undefined) {
    keyTrailer = 'ES8uSxB3Tnk';
  }
  //
  let tempGenres = [];
  response.genres.forEach(genre => {
    tempGenres.push(genre.name);
  });
  let tempGenresString = tempGenres.join(', ');

  let textWatch = 'add to Watched';
  let textQueue = 'add to Queue';
  let watchClass = 'btn-add-watched card-btn';
  let queueClass = 'btn-add-queue card-btn';

  if (arrayWatched.includes(movie_id)) {
    textWatch = 'remove from Watched';
    watchClass = 'btn-add-watched card-btn card-btn-active';
  }
  if (arrayQueue.includes(movie_id)) {
    textQueue = 'remove from Queue';
    queueClass = 'btn-add-queue card-btn card-btn-active';
  }

  let modalString = `<div data-modal class="backdrop">
  <div class="modal-window" > 
        <!-- Кнопка закриття модалки -->
    <div class="modal-close">
      <button type="button" class="close-button">
        <svg class="close-button__icon" width="30" height="30">
          <use href="./images/icons.svg#icon-close-2"></use>
        </svg>
      </button>
    </div>

    <div class="film-container">
      <div class="cinema-card">
         <img class="card-photo" src="https://image.tmdb.org/t/p/w500/${response.poster_path}" alt="movie cover" />
      </div>

      <div class="card-block">
        <p class="card-title">${response.title}</p>
        <ul class="filter-list list">
          <li class="filter-item">
            <p class="text-description">Vote / Votes</p>
            <p class="text-field">
              <span class="text-filed-rate" id="modal-vote">${response.vote_average}</span> /
              <span class="text-field-total" id="modal-votes">${response.vote_count}</span>
            </p>
          </li>
          <li class="filter-item">
            <p class="text-description">Popularity</p>
            <p class="text-field" id="modal-popularity">${response.popularity}</p>
          </li>
          <li class="filter-item">
            <p class="text-description">Original Title</p>
            <p class="text-field text-title" id="modal-original">
             ${response.original_title}
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
                >${response.overview}</span
              >
              
            </p>
          </li>
        </ul>
        <div class="trailer__container">
          <!-- У лінк додаємо id фільму -->
          <iframe
            src="https://www.youtube.com/embed/${keyTrailer}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="video-frame"
          ></iframe>
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
  document
    .querySelector('.btn-add-watched')
    .addEventListener('click', onClickToWatched);
  document
    .querySelector('.btn-add-queue')
    .addEventListener('click', onClickToQueue);

  //! функція для переглянутих
  function onClickToWatched(e) {
    e.preventDefault();
    // змінні
    var btnWatchedText = document.querySelector('.btn-add-watched');
    let btnWatched = e.currentTarget;
    let keyWatched = 'idWatched';
    // прибирання додавання класса на кнопку
    btnWatched.classList.toggle('card-btn-active');
    // перевірка на знаходження в масиві переглянутих
    if (arrayWatched.includes(movie_id)) {
      btnWatchedText.innerText = 'add to watch';
      // видалення з масиву та видалення з локал стореджу черги
      arrayWatched.splice(arrayWatched.indexOf(movie_id), 1);
      addAndRemoveToLocalStorage(keyWatched, arrayWatched);

      // console.log(arrayWatched);
      return;
    }
    btnWatchedText.innerText = 'remove from Watched';

    // додавання до масиву переглянутих та в локал стордж
    arrayWatched.push(movie_id);
    addAndRemoveToLocalStorage(keyWatched, arrayWatched);

    console.log(arrayWatched);
  }

  //! функція для черги

  function onClickToQueue(e) {
    e.preventDefault();
    //змінні
    var btnQuequeText = document.querySelector('.btn-add-queue');
    // card-btn-active
    let btnQueue = e.currentTarget;
    let keyQueue = 'idQueue';
    // прибирання додавання класса на кнопку
    btnQueue.classList.toggle('card-btn-active');
    // перевірка на знаходження в масиві черги
    if (arrayQueue.includes(movie_id)) {
      btnQuequeText.innerText = 'add to Queue';
      // видалення з масиву та видалення з локал стореджу переглянутих
      arrayQueue.splice(arrayQueue.indexOf(movie_id), 1);
      addAndRemoveToLocalStorage(keyQueue, arrayQueue);
      // console.log(arrayQueue);
      return;
    }
    btnQuequeText.innerText = 'remove from Queue';
    // btnQuequeText.classList.add('card-btn-active')

    // додавання до масиву черги та в локал стордж
    arrayQueue.push(movie_id);
    addAndRemoveToLocalStorage(keyQueue, arrayQueue);

    console.log(arrayQueue);
  }
}
