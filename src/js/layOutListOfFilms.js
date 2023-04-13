import { genres } from './genres.js';

export default async function layOutListOfFilms(arrayOfFilms) {
  // console.log('genres', genres);

  const gallery = document.querySelector('.gallery'); // галерея

  let markup = arrayOfFilms
    .map(item => {
      const { poster_path, title, name, first_air_date, release_date } = item;

      let a = '';
      if (title !== undefined) {
        a = title;
      }
      if (name !== undefined) {
        a = name;
      }

      let date = '';

      if (first_air_date !== undefined) {
        // checkDate(first_air_date, release_data)
        date = first_air_date;
        // console.log('f', date);
      }
      if (release_date !== undefined) {
        date = release_date;
        // console.log('r', date);
      }
      // if(date === ``){
      //   return;
      // }
      date = date.substring(0, 4);
      return `
      <div class="film-card">
      <a href="#">
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film1" loading="lazy" />
        </div>
      </a>
      <div class="info">
        <p class="film-name">${a}</p>
        <p class="film-info">Drama, Action | ${date}</p>
      </div>
    </div>`;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
}
