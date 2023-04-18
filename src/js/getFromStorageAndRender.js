// експорт
export { getFromStorageAndRender };
// імпорти
import { getFromStorage } from './localStorage'; // функція що забирає масив id з локального сховища
import { getMovieByID } from './getMovieByID'; // ф-ція що виконує запит на сервер по id
import layOutListOfMyLib from './layOutListMyLibrary'; // рендер розмітки сторінки My Library
// змінні
let key;
let keyWatched = 'idWatched';
let keyQueue = 'idQueue';
let arrMovies = [];

// пошук кнопок перегляду і черги
const btnWatch = document.querySelector('#watched');
const btnQueue = document.querySelector('#queue');

// ф-ція отримання масиву id та обʼєктів, виклик ф-ції рендеру розмітки
function getFromStorageAndRender() {
  // перевірка на активний клас у кнопок черги та перегляду
  if (btnWatch.classList.contains('btn-nav-active')) {
    key = keyWatched;
  }
  if (btnQueue.classList.contains('btn-nav-active')) {
    key = keyQueue;
  }

  // функції
  getFromStorage(key).map(id => {
    getMovieByID(id)
      .then(movie => {
        arrMovies = [];
        arrMovies.push(movie);
        return arrMovies;
      })
      .then(layOutListOfMyLib);
  });
}
