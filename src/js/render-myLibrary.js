//? імпорт функцій 
import { Notify } from 'notiflix';
import { clearPage } from './fetch_by_keyword';
import { getFromStorageAndRender } from "./getFromStorageAndRender";
import { warnMessageOnQueue, warnMessageOnWatched } from './myLibraryBg';
import {getFromStorage} from './localStorage'

export {clickBtnWatched, clickBtnQueue}

    // ! функція кліку по кнопці ватч
 function clickBtnWatched(e) {
      e.preventDefault();
      clearPage();
      // додавання і забирання класів
      document.querySelector('#watched').classList.add('btn-nav-active');
      document.querySelector('#queue').classList.remove('btn-nav-active');
      // доставання ід масива та їх перебор з локального сховища
      if (getFromStorage('idWatched').length < 1){
        console.log(1);
        Notify.failure('Sorry... You did not add any movie to your Watchlist');
        warnMessageOnWatched()
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
  
      if (getFromStorage('idQueue').length < 1) {
        Notify.failure('Sorry... You did not add any movie to your Queue');
        warnMessageOnQueue()
        return;
      }
      // доставання ід масива та їх перебор з локального сховища
      getFromStorageAndRender();
    }

