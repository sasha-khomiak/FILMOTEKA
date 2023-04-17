//-----Ф-ІЯ, ЯКА КЕРУЄ ПОЯВОЮ І ЗНИКАННЯМ КНОПОК І ЕЛЕМЕНТІВ В ХЕДЕРІ-----//
import { showTrendingFilms } from '../index';
import { renderMyLib } from './render-myLibrary';

export default async function headerFunctionality() {
  // створюємо елементи, які в хедері
  // кнопка home
  const btnHome = document.querySelector('.js-home');
  // кнопка library
  const btnLibrary = document.querySelector('.js-library');
  // поле пошуку input
  const inputQuery = document.querySelector('.js-input-query');
  // блок кнопок бібліотеки
  const libraryButtons = document.querySelector('.js-library-buttons');

  const gallery = document.querySelector('.gallery');

  // чіпляємо слухачів на кнопки home і library
  btnHome.addEventListener('click', handleClickBtnHome);
  btnLibrary.addEventListener('click', handleClickBtnLibrary);
  document
    .querySelector('.header-link')
    .addEventListener('click', handleClickBtnHome);

  // обробники натискання кнопки Home
  function handleClickBtnHome(evt) {
    evt.preventDefault();

    // робимо Home з активним класом, а Library з неактивним класом
    // зміна виду кнопок
    btnHome.classList.add('btn--current');
    btnLibrary.classList.remove('btn--current');

    //показуємо форму пошуку
    inputQuery.classList.remove('is-hidden');
    //ховаємо блок кнопок медіатеки і забираємо клас button-active
    libraryButtons.classList.add('is-hidden');
    libraryButtons.classList.remove('button-active');
    if (gallery.innerHTML === '') {
      showTrendingFilms();
    }
  }

  // обробники натискання кнопки Library
  function handleClickBtnLibrary(evt) {
    evt.preventDefault();

    //робимо Library з активним класом, а Home з неактивним класом
    // зміна виду кнопок
    btnHome.classList.remove('btn--current');
    btnLibrary.classList.add('btn--current');

    //ховаємо форму пошуку
    inputQuery.classList.add('is-hidden');

    //показуємо блок кнопок медіатеки і додаємо клас button-active
    libraryButtons.classList.remove('is-hidden');
    libraryButtons.classList.add('button-active');

    gallery.innerHTML = '';
    renderMyLib();
  }
}

headerFunctionality();
