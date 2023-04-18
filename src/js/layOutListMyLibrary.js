// імпорт заглушки для фільмів
import posterPlug from '../images/poster-plug.jpg';
// експорт ф-ції рендеру розмітки сторінки My Library
export default async function layOutListOfMyLib(arrayFilms) {
  // знаходження блоку "gallery"
  const gallery = document.querySelector('.gallery');
  // перебір масиву та витягання з нього елементів
  arrayFilms.map(item => {
    const {
      genres,
      poster_path,
      backdrop_path,
      id,
      title,
      name,
      release_date,
    } = item; // деструктуризація елементів масиву

    let genresArray = []; // створення пустого масиву
    let date = release_date.substring(0, 4); // форматування дати(2023-03-01 => 2023)

    // додавання жанрів до масиву жанрів для подальшого рендеру
    genres.map(genre => {
      genresArray.push(genre.name);
    });
    let genresString = genresArray.join(', '); // перетворення масиву в строку

    let posterLink;
    // перевірка на наявність постеру
    if (poster_path === null) {
      posterLink = posterPlug;
    } else {
      posterLink = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    }
    // рендер розмітки
    const dataCard = `
      <div class="film-card" >
      <a href="#">
        <div class="thumb">
          <img src="${posterLink}" alt="film1" loading="lazy" data-id="${id}" />
        </div>
      </a>
      <div class="info">
        <div class="info-container"> 
        <p class="film-name">${title}</p>
        <p class="film-info">${genresString} | ${date}</p>
        </div>
      </div>
    </div>`;
    gallery.insertAdjacentHTML('beforeend', dataCard); // додавання розмітки до блоку gallery
  });
}
