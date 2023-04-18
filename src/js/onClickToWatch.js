//! функція для переглянутих
import { movieId } from './markupModal';
import { addAndRemoveToLocalStorage, getFromStorage } from './localStorage';
import { getMovieByID } from './getMovieByID';
import layOutListOfMyLib from './layOutListMyLibrary';
export { onClickToWatched, onClickToQueue, arrOfFilms };

let arrOfFilms = [];
let btnWatchedText = document.querySelector('.btn-add-watched');
let btnQueueText = document.querySelector('.btn-add-queue');
let keyWatched = 'idWatched';
let keyQueue = 'idQueue';

function onClickToWatched(e) {
  e.preventDefault();
  btnWatchedText = e.currentTarget;
  arrOfFilms = getFromStorage(keyWatched);
  if (arrOfFilms === null) {
    arrOfFilms = [];
  }
  // прибирання додавання класса на кнопку
  btnWatchedText.classList.toggle('card-btn-active');

  // перевірка на знаходження в масиві переглянутих
  if (arrOfFilms.includes(movieId)) {
    btnWatchedText.innerText = 'add to watch';
    // видалення з масиву та видалення з локал стореджу черги
    arrOfFilms.splice(arrOfFilms.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyWatched, arrOfFilms);
    

    return;
  }
  btnWatchedText.innerText = 'remove from Watched';

  // додавання до масиву переглянутих та в локал стордж
  arrOfFilms.push(movieId);
  addAndRemoveToLocalStorage(keyWatched, arrOfFilms);
  
}

//! функція для черги
function onClickToQueue(e) {
  e.preventDefault();
  btnQueueText = e.currentTarget;
  arrOfFilms = getFromStorage(keyQueue);
  if (arrOfFilms === null) {
    arrOfFilms = [];
  }

  // прибирання додавання класса на кнопку
  btnQueueText.classList.toggle('card-btn-active');

  // перевірка на знаходження в масиві черги
  if (arrOfFilms.includes(movieId)) {
    btnQueueText.innerText = 'add to Queue';
    // видалення з масиву та видалення з локал стореджу переглянутих
    arrOfFilms.splice(arrOfFilms.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyQueue, arrOfFilms);
    return;
  }

  btnQueueText.innerText = 'remove from Queue';
  // додавання до масиву черги та в локал стордж
  arrOfFilms.push(movieId);
  addAndRemoveToLocalStorage(keyQueue, arrOfFilms);
}
