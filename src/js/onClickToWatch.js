//! функція для переглянутих

import { movieId } from './markupModal';
import { addAndRemoveToLocalStorage } from './localStorage';

let arrayWatched = [];
let arrayQueue = [];
function onClickToWatched(e) {
  console.log(movieId);
  e.preventDefault();
  // змінні
  var btnWatchedText = document.querySelector('.btn-add-watched');
  let btnWatched = e.currentTarget;
  let keyWatched = 'idWatched';
  // прибирання додавання класса на кнопку
  btnWatched.classList.toggle('card-btn-movieIdactive');
  // перевірка на знаходження в масиві переглянутих
  if (arrayWatched.includes(movieId)) {
    btnWatchedText.innerText = 'add to watch';
    // видалення з масиву та видалення з локал стореджу черги
    arrayWatched.splice(arrayWatched.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyWatched, arrayWatched);

    // console.log(arrayWatched);
    return;
  }
  btnWatchedText.innerText = 'remove from Watched';

  // додавання до масиву переглянутих та в локал стордж
  arrayWatched.push(movieId);
  addAndRemoveToLocalStorage(keyWatched, arrayWatched);
  console.log(arrayWatched);
}

//! функція для черги
function onClickToQueue(e) {
  e.preventDefault();
  //змінні
  var btnQuequeText = document.querySelector('.btn-add-queue');
  // card-btn-active
  let btnQueue = e.currentTarget;
  let keyQueue = 'idQueue';
  // прибирання додавання класса на кнопку
  btnQueue.classList.toggle('card-btn-active');
  // перевірка на знаходження в масиві черги
  if (arrayQueue.includes(movieId)) {
    btnQuequeText.innerText = 'add to Queue';
    // видалення з масиву та видалення з локал стореджу переглянутих
    arrayQueue.splice(arrayQueue.indexOf(movieId), 1);
    addAndRemoveToLocalStorage(keyQueue, arrayQueue);
    // console.log(arrayQueue);
    return;
  }
  btnQuequeText.innerText = 'remove from Queue';
  // btnQuequeText.classList.add('card-btn-active')

  // додавання до масиву черги та в локал стордж
  arrayQueue.push(movieId);
  addAndRemoveToLocalStorage(keyQueue, arrayQueue);

  console.log(arrayQueue);
}

export { onClickToWatched, onClickToQueue };
