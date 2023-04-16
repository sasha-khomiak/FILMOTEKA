// функція отримання фільму по id
import { getMovieByID } from './getMovieByID';

// функція формування модального вікна
import { markupModal } from './markupModal';

// функція получения ключа трейлера
import { getKeyTrailerByID } from './getKeyTrailerByID';




export { movie_id, handleClickFilms, keyTrailer };
let movie_id = null; //  змінна ID фильма
let keyTrailer = null; // змінна ключа трейлера

//-----ФУНКЦІЯ ОБРОБКИ КЛІКУ ПО ФІЛЬМУ-----//
//export let movie_id = null;
function handleClickFilms() {
  // створюємо обʼєкт ко кліках якого будемо слухати
  const gallery = document.querySelector('.gallery');

  // вішаємо слухача події клік
  gallery.addEventListener('click', onClick);
}
// функція обробник кліка
function onClick(evt) {
  // скасовуємо за замовчанням (зоб не спрацьовувала подія кліку по лінку)
  evt.preventDefault();
  // якщо клікнули деінде крім картинки то виходимо з функції
  if (evt.target.tagName !== 'IMG') {
    return;
  }

  // Якщо клікнули по картинці, то беремо з події таргета значення атрибута data-id

  movie_id = evt.target.dataset.id;

  //функція отримання ключа трейлера в змінну та рендер розмітки після цього


  // функція обробник кліка
  function onClick(evt) {
    // скасовуємо за замовчанням (зоб не спрацьовувала подія кліку по лінку)
    evt.preventDefault();
    // якщо клікнули деінде крім картинки то виходимо з функції
    if (evt.target.tagName !== 'IMG') {
      return;
    }
    // Якщо клікнули по картинці, то беремо з події таргета значення атрибута data-id

    movie_id = evt.target.dataset.id;
    // console.log(movie_id);
    getMovieByID(evt.target.dataset.id)
      .then(response => markupModal(response))
      .catch(error => {
        return;
      });


  async function renderByID(movie_id) {
    keyTrailer = await getKeyTrailerByID(movie_id);
    const arrayForRenderModal = await getMovieByID(movie_id);
    markupModal(arrayForRenderModal);

  }
  renderByID(movie_id);
}
handleClickFilms();
