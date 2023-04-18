// функція створення повідолення у разі віжсутності
// результатів пошуку
const movieCardList = document.querySelector('.movie-card__list');
export {warnMessage, warnMessageOnMyLib, warnMessageOnWatched, warnMessageOnQueue}

function warnMessage() {
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! There is no film with a such name!</p>
        <p class="library-bg__message">But we have something more!</p>
        <p class="library-bg__message">Scroll down!</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}


function warnMessageOnMyLib(){
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! You have not selected sections :((</p>
        <p class="library-bg__message">Please select a section Watched or Queue</p>
        <p class="library-bg__message">in the right corner of your screen</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}

function warnMessageOnWatched(){
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! You don't have any movies in this section :((</p>
        <p class="library-bg__message">Please return to the main screen and</p>
        <p class="library-bg__message">add your favorite movies</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}

function warnMessageOnQueue(){
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! You don't have any movies in this section :((</p>
        <p class="library-bg__message">Please return to the main screen and</p>
        <p class="library-bg__message">add the movies you would like to watch</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}