const movieCardList = document.querySelector('.movie-card__list');

export function myLibraryBg() {
  movieCardList.innerHTML = `<div class="library">
       <div class="library-bg">
        <div class="library-bg__image"></div>
        <p class="library-bg__message">Oops! You have nothing here!</p>
        <p class="library-bg__message">Аdd some movie!</p>
      </div>
      </div>`;
  movieCardList.classList.add('library');
}



