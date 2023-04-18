//! функція для переглянутих

import { movieId } from './markupModal';
import { addAndRemoveToLocalStorage, getFromStorage } from './localStorage';
export { onClickToWatched, onClickToQueue };

let arrayWatched = [];
let arrayQueue = [];
let btnWatchedText = document.querySelector('.btn-add-watched');
let btnQueueText = document.querySelector('.btn-add-queue');
let keyWatched = 'idWatched';
let keyQueue = 'idQueue';

function onClickToWatched(e) {
  e.preventDefault();
  btnWatchedText = e.currentTarget;
  arrayWatched = getFromStorage(keyWatched);
  if (arrayWatched === null) {
    arrayWatched = [];
  }
  console.log(keyWatched);

  // прибирання додавання класса на кнопку
  btnWatchedText.classList.toggle('card-btn-active');
  // перевірка на знаходження в масиві переглянутих
  if (arrayWatched.includes(movieId)) {
    btnWatchedText.innerText = 'add to watch';
    // видалення з масиву та видалення з локал стореджу черги
    arrayWatched.splice(arrayWatched.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyWatched, arrayWatched);

    return;
  }
  btnWatchedText.innerText = 'remove from Watched';

  // додавання до масиву переглянутих та в локал стордж
  arrayWatched.push(movieId);
  addAndRemoveToLocalStorage(keyWatched, arrayWatched);
}

//! функція для черги
function onClickToQueue(e) {
  e.preventDefault();
  btnQueueText = e.currentTarget;
  arrayQueue = getFromStorage(keyQueue);
  if (arrayQueue === null) {
    arrayQueue = [];
  }
  console.log(keyQueue);

  // прибирання додавання класса на кнопку
  btnQueueText.classList.toggle('card-btn-active');

  // перевірка на знаходження в масиві черги
  if (arrayQueue.includes(movieId)) {
    btnQueueText.innerText = 'add to Queue';
    // видалення з масиву та видалення з локал стореджу переглянутих
    arrayQueue.splice(arrayQueue.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyQueue, arrayQueue);
    return;
  }

  btnQueueText.innerText = 'remove from Queue';
  // додавання до масиву черги та в локал стордж
  arrayQueue.push(movieId);
  addAndRemoveToLocalStorage(keyQueue, arrayQueue);
}
