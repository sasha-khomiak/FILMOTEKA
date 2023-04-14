import getMovieByID from './getMovieByID';
import markupModal from './markupModal';
///
//-----ФУНКЦІЯ ОБРОБКИ КЛІКУ ПО ФІЛЬМУ-----//
//export let movie_id = null;
export default function handleClickFilms() {
  // створюємо обʼєкт ко кліках якого будемо слухати
  const gallery = document.querySelector('.gallery');

  // віщаємо слухача події клік
  gallery.addEventListener('click', onClick);

  // функція обробник кліка
  function onClick(evt) {
    // скасовуємо за замовчанням (зоб не спрацьовувала подія кліку по лінку)
    evt.preventDefault();
    // якщо клікнули деінде крім картинки то виходимо з функції
    if (evt.target.tagName !== 'IMG') {
      return;
    }
    // Якщо клікнули по картинці, то беремо з події таргета значення атрибута data-id
    console.log(evt.target.dataset.id);
    // const movie_id = evt.target.dataset.id;
    //getMovieByID(evt.target.dataset.id).then(response => markupModal(response));

    getMovieByID(evt.target.dataset.id).then(response => {
      //console.log(response);
      markupModal(response);
    });

    // console.log(`movie_id = ${movie_id}`);
    // створюємо обʼєкт бекдропа модалки
    ////const backdrop = document.querySelector('.backdrop');///
    // прибираємо клас прихованості, щоб показати модалку
    ////backdrop.classList.remove('is-hidden');
    // тут може бути функція динамічного підверстування модалки
  }
}
handleClickFilms();
