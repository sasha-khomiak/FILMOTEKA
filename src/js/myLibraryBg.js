const movieCardList = document.querySelector('.movie-card__list');

export default async function myLibraryBg() {
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
