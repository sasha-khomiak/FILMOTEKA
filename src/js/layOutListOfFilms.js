import { genres } from './genres.js';

import posterPlug from '../images/poster-plug.jpg';

export default async function layOutListOfFilms(arrayOfFilms) {
  // ('genres', genres);
  // ("отрм",arrayOfFilms);
  const gallery = document.querySelector('.gallery'); // галерея
  let markup = arrayOfFilms
    .map(item => {
      // (item);
      const {
        poster_path,
        id,
        title,
        name,
        first_air_date,
        release_date,
        genre_ids,
        overview,
      } = item;

      // -----------------------//
      // із нумерованого масиву жанрів отримуємо масив назв жанрів і формуємо стрінг
      let tempGenres = [];

      genre_ids.forEach(genre => {
        genres.forEach(({ id, name }) => {
          if (id === genre) {
            tempGenres.push(name);
            // (tempGenres);
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
        // ('f', date);
      }

      if (release_date !== undefined) {
        date = release_date;
      }
      let image_src = posterPlug;
      if (poster_path !== null) {
        image_src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      }

      date = date.substring(0, 4);

      // рендеремо розмітку
      return `
      <div class="film-card" >
      <a href="#">
        <div class="thumb">
           <img src="${image_src}" alt="${correctFilmName}" loading="lazy" data-id="${id}" />
        </div>
      </a>
      <div class="info">
        <div class="info-container"> 
        <p class="film-name">${correctFilmName}</p>
        <p class="film-info">${tempGenresString} | ${date}</p>
        </div>
      </div>
    </div>`;
    })
    .join('');
  //  Вставляємо в головний блок верстки
  gallery.insertAdjacentHTML('beforeend', markup);
}
