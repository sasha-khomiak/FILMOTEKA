import { genres } from './genres.js';
export default async function layOutListOfFilms(arrayOfFilms) {
  // console.log('genres', genres);

  const gallery = document.querySelector('.gallery'); // галерея

  let markup = arrayOfFilms
    .map(item => {
      const {
        poster_path,
        title,
        name,
        first_air_date,
        release_date,
        genre_ids,
      } = item;

      // -----------------------//
      // із нумерованого масиву жанрів отримуємо масив назв жанрів і формуємо стрінг
      let tempGenres = [];

      genre_ids.forEach(genre => {
        genres.forEach(({ id, name }) => {
          if (id === genre) {
            tempGenres.push(name);
            console.log(tempGenres);
          }
        });
      });
      let tempGenresString = tempGenres.join(', ');

      // визначаємо назву нашого фільма і вносимо змінну
      // --------------///

      let correctFilmName = '';
      if (title !== undefined) {
        correctFilmName = title;
      }
      if (name !== undefined) {
        correctFilmName = name;
      }

      // визначаємо дату виходу нашого фільма і лишаємо тільки рік
      let date = '';

      if (first_air_date !== undefined) {
        // checkDate(first_air_date, release_data)
        date = first_air_date;
        // console.log('f', date);
      }

      if (release_date !== undefined) {
        date = release_date;
      }
      let image_src =
        'https://cdn.icon-icons.com/icons2/931/PNG/512/empty_file_icon-icons.com_72420.png';
      if (poster_path !== null) {
        image_src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      }

      date = date.substring(0, 4);

      // рендеремо розмітку
      return `
      <div class="film-card">
      <a href="#">
        <div class="thumb">
          <img src="${image_src}" alt="film1" loading="lazy" />
        </div>
      </a>
      <div class="info">
        <p class="film-name">${correctFilmName}</p>
        <p class="film-info">${tempGenresString} | ${date}</p>
      </div>
    </div>`;
    })
    .join('');

  //  Вставляємо в головний блок верстки
  gallery.insertAdjacentHTML('beforeend', markup);
}
