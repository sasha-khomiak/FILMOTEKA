//-----Ф-ІЯ, ЯКА КЕРУЄ ПОЯВОЮ І ЗНИКАННЯМ КНОПОК І ЕЛЕМЕНТІВ В ХЕДЕРІ-----//
import { showTrendingFilms } from "../index";
import { renderMyLib } from "./render-myLibrary";

export default async function headerFunctionality() {
  // створюємо елементи, які в хедері
  const btnHome = document.querySelector('.js-home');
  const btnLibrary = document.querySelector('.js-library');
  const inputQuery = document.querySelector('.js-input-query');
  const libraryButtons = document.querySelector('.js-library-buttons');
  
  const gallery = document.querySelector('.gallery')

  // чіпляємо слухачів на кнопки
  btnHome.addEventListener('click', handleClickBtnHome);
  btnLibrary.addEventListener('click', handleClickBtnLibrary);

  // обробники натискання кнопки Home
  function handleClickBtnHome(evt) {
    evt.preventDefault();

    //робимо Home з активним класом, а Library з неактивним класом
    btnHome.classList.add('btn--current');
    btnLibrary.classList.remove('btn--current');

    //показуємо форму пошуку
    inputQuery.classList.remove('is-hidden');
    //ховаємо блок кнопок медіатеки
    libraryButtons.classList.add('is-hidden');
    libraryButtons.classList.remove('button-active');
    if(gallery.innerHTML === ''){
      showTrendingFilms()
    }
  }

  // обробники натискання кнопки Library
  function handleClickBtnLibrary(evt) {
    evt.preventDefault();

    //робимо Library з активним класом, а Home з неактивним класом
    btnHome.classList.remove('btn--current');
    btnLibrary.classList.add('btn--current');

    //ховаємо форму пошуку
    inputQuery.classList.add('is-hidden');

    //ховаємо блок кнопок медіатеки
    libraryButtons.classList.remove('is-hidden');
    libraryButtons.classList.add('button-active');

    gallery.innerHTML = ''
    renderMyLib()
  }
}

headerFunctionality();
