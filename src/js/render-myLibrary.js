//? імпорт функцій 
import { getFromStorage } from "./localStorage";
import { getMovieByID } from "./getMovieByID";
import layOutListOfMyLib from "./layOutListMyLibrary";
import { Notify } from 'notiflix';
import { clearPage } from './fetch_by_keyword';


//! функція рендеру розмітки бібліотеки
function renderMyLib() {
    // знаходимо кнопки в хедері
    const buttonWatched = document.querySelector('#watched');
    const buttonQueue = document.querySelector('#queue');
    // змінна для ід фільмів
    let filmsId = null;
    //   let arrMovies = [];
    // вішаємо кліки на кнопки
    buttonWatched.addEventListener('click', clickBtnWatched);
    buttonQueue.addEventListener('click', clickBtnQueue);
  
    // if(buttonQueue.classList.contains('btn-nav-active') && buttonQueue.classList.contains('btn-nav-active')){
  
    // }
    // ! функція кліку по кнопці ватч
    async function clickBtnWatched(e) {
      e.preventDefault();
      clearPage();
      // додавання і забирання класів
      buttonWatched.classList.add('btn-nav-active');
      buttonQueue.classList.remove('btn-nav-active');
      // доставання ід масива та їх перебор з локального сховища
      if (localStorage.getItem('idWatched') === null || localStorage.getItem('idWatched').length ===0 ){
        console.log(2);
        Notify.failure('Sorry... You did not add any movie to your Watchlist');
        return;
      }
      getFromStorage('idWatched').map(id => {
        getMovieByID(id)
          .then(movie => {
            let arrMovies = [];
            arrMovies.push(movie);
            return arrMovies;
          })
          .then(layOutListOfMyLib);
      });
    }
  
    // ! функція кліку по кнопці черга
    function clickBtnQueue(e) {
      e.preventDefault();
      clearPage();
      // додавання та забирання класів
      buttonQueue.classList.add('btn-nav-active');
      buttonWatched.classList.remove('btn-nav-active');
  
      if (localStorage.getItem('idQueue') === null) {
        Notify.failure('Sorry... You did not add any movie to your Queue');
        return;
      }
      // доставання ід масива та їх перебор з локального сховища
      getFromStorage('idQueue').map(id => {
        getMovieByID(id)
          .then(movie => {
            let arrMovies = [];
            arrMovies.push(movie);
            return arrMovies;
          })
          .then(layOutListOfMyLib);
      });
    }
  }
  // ? експорт функції рендеру
  export { renderMyLib };
  