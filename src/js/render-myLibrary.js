//? імпорт функцій 
import { Notify } from 'notiflix';
import { clearPage } from './fetch_by_keyword';
import { getFromStorageAndRender } from "./getFromStorageAndRender";

export {clickBtnWatched, clickBtnQueue}

    // ! функція кліку по кнопці ватч
 function clickBtnWatched(e) {
      e.preventDefault();
      clearPage();
      // додавання і забирання класів
      document.querySelector('#watched').classList.add('btn-nav-active');
      document.querySelector('#queue').classList.remove('btn-nav-active');
      // доставання ід масива та їх перебор з локального сховища
      if (localStorage.getItem('idWatched') === null || localStorage.getItem('idWatched').length ===0 ){
       
        Notify.failure('Sorry... You did not add any movie to your Watchlist');
        return;
      }
      getFromStorageAndRender();
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
      getFromStorageAndRender();
    }

