//? імпорт функцій 
import { getFromStorage } from "./localStorage";
import { getMovieByID } from "./getMovieByID";
import layOutListOfMyLib from "./layOutListMyLibrary";
import { Notify } from 'notiflix';
import { clearPage } from './fetch_by_keyword';
let arrMoviesQueue = [];
let arrMoviesWatch = [];
export {clickBtnWatched, clickBtnQueue}
//! функція рендеру розмітки бібліотеки

    // buttonQueue.addEventListener('click', );
  
    // ! функція кліку по кнопці ватч
 function clickBtnWatched(e) {
      e.preventDefault();
      clearPage();
      arrMoviesWatch = [];
      // додавання і забирання класів
      document.querySelector('#watched').classList.add('btn-nav-active');
      document.querySelector('#queue').classList.remove('btn-nav-active');
      // доставання ід масива та їх перебор з локального сховища
      if (localStorage.getItem('idWatched') === null || localStorage.getItem('idWatched').length ===0 ){
       
        Notify.failure('Sorry... You did not add any movie to your Watchlist');
        return;
      }
      getFromStorage('idWatched').map(id => {
        getMovieByID(id)
          .then(movie => {
            arrMoviesWatch.push(movie);
            return arrMoviesWatch;
          })
          .then(result => {
            clearPage()
            layOutListOfMyLib(result)
          });
      });
    }
  
    // ! функція кліку по кнопці черга
    function clickBtnQueue(e) {
      e.preventDefault();
      clearPage();
      // додавання та забирання класів
      document.querySelector('#queue').classList.add('btn-nav-active');
      document.querySelector('#watched').classList.remove('btn-nav-active');
  
      if (localStorage.getItem('idQueue') === null) {
        Notify.failure('Sorry... You did not add any movie to your Queue');
        return;
      }
      // доставання ід масива та їх перебор з локального сховища
      getFromStorage('idQueue').map(id => {
        getMovieByID(id)
          .then(movie => {
            arrMoviesQueue = [];
            arrMoviesQueue.push(movie);
            return arrMoviesQueue;
          })
          .then(layOutListOfMyLib);
      });
    }

  