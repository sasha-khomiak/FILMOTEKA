export default async function layOutListOfMyLib(arrayFilms) {
  const gallery = document.querySelector('.gallery');
  // let tempGenresString = tempGenres.join(', ');

  // console.log('отримав', arrayFilms);
  arrayFilms.map(item => {
    console.log(item);
    const {
      genres,
      poster_path,
      backdrop_path,
      id,
      title,
      name,
      first_air_date,
      release_date,
    } = item;

    const dataCard = `
      <div class="film-card" >
      <a href="#">
        <div class="thumb">
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film1" loading="lazy" data-id="${release_date}" />
        </div>
      </a>
      <div class="info">
        <div class="info-container"> 
        <p class="film-name">${title}</p>
        <p class="film-info">${name} | ${id}</p>
        </div>
      </div>
    </div>`;
    gallery.insertAdjacentHTML('beforeend', dataCard);
  });
  // .join(' ');

  // console.log('tut', markup);
}
