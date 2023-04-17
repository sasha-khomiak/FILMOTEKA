//? імпорт функцій
import { getFromStorage } from './localStorage';
import { getMovieByID } from './getMovieByID';
import layOutListOfMyLib from './layOutListMyLibrary';
import layOutListOfFilms from './layOutListOfFilms';
// // idQueue, idWatched
// btn-nav-active

//! функція рендеру розмітки бібліотеки
function renderMyLib() {
  // знаходимо кнопки в хедері
  const buttonWatched = document.querySelector('#watched');
  const buttonQueue = document.querySelector('#queue');
  // змінна для ід фільмів
  let filmsId = null;
  let arrMovies = [];
  // вішаємо кліки на кнопки
  buttonWatched.addEventListener('click', clickBtnWatched);
  buttonQueue.addEventListener('click', clickBtnQueue);

  // if(buttonQueue.classList.contains('btn-nav-active') && buttonQueue.classList.contains('btn-nav-active')){

  // }
  // ! функція кліку по кнопці ватч
  function clickBtnWatched(e) {
    e.preventDefault();
    // додавання і забирання класів
    buttonWatched.classList.add('btn-nav-active');
    buttonQueue.classList.remove('btn-nav-active');
    // доставання ід масива та їх перебор з локального сховища
    // console.log(getFromStorage('idWatched'));
    getFromStorage('idWatched').map(id => {
      getMovieByID(id).then(movie => {
        // console.log(movie);
        arrMovies.push(movie);
      });
    });
    layOutListOfMyLib(arrMovies);
    // console.log("передаю:",arrMovies);
  }

  // ! функція кліку по кнопці черга
  function clickBtnQueue(e) {
    e.preventDefault();
    // додавання та забирання класів
    buttonQueue.classList.add('btn-nav-active');
    buttonWatched.classList.remove('btn-nav-active');
    // доставання ід масива та їх перебор з локального сховища
    getFromStorage('idQueue').map(id => {
      filmsId = id;
      // console.log('queue', filmsId);
      // виклик функції запиту по ід та рендер розмітки
      getMovieByID(filmsId).then(a => console.log(a));
    });
  }
}
// ? експорт функції рендеру
export { renderMyLib };
