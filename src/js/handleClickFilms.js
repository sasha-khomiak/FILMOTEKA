
// функція формування модального вікна
import { markupModal } from './markupModal';

// export {  handleClickFilms };
//-----ФУНКЦІЯ ОБРОБКИ КЛІКУ ПО ФІЛЬМУ-----//

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

    movieId = evt.target.dataset.id;
    // console.log(movie_id);
    markupModal(movieId)
     

}
handleClickFilms();