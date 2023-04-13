export default async function layOutListOfFilms(arrayOfFilms) {
  const gallery = document.querySelector('.gallery'); // галерея

  let marrkup = arrayOfFilms
    .map(
      item => `
        <div class="film-card">
        <a href="#">
          <div class="thumb">
            <img src="https://image.tmdb.org/t/p/w500/${item.poster_path}" alt="film1" loading="lazy" />
          </div>
        </a>
        <div class="info">
          <p class="film-name">${item.title}</p>
          <p class="film-info">Drama, Action | ${item.release_date}</p>
        </div>
      </div>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', marrkup);
}
