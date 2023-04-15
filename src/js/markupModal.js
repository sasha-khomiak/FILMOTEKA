//const main = document.querySelector('main');
export { markupModal };

function markupModal(response) {
  let tempGenres = [];

  response.genres.forEach(genre => {
    tempGenres.push(genre.name);
  });
  let tempGenresString = tempGenres.join(', ');

  let modalString = `<div data-modal class="backdrop">
  <div class="modal-window">
    <div class="modal-close">
    <button type="button" class="close-button">X</button>
     
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
            src="https://www.youtube.com/embed/tHjUvdbKKuY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            class="video-frame"
          ></iframe>
        </div>

        <div class="card-button">
          <button class="btn-add-watched card-btn" type="submit">
            add to Watched
          </button>
          <button class="btn-add-queue card-btn" type="submit">
            add to Queue
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
  const backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', onClose);

  function onClose(evt) {
    evt.preventDefault();
    divModal.innerHTML = '';
    divModal.remove();
    //може тут треба зняти слухача натиску кнопки  закриття і еатиску бекдропа????
  }
}
