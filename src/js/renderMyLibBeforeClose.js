import { clearPage } from './fetch_by_keyword';
import { getFromStorageAndRender } from './getFromStorageAndRender';
export { renderBeforeCloseModalOnMyLib };

// пошук кнопки my library
const btnLib = document.querySelector('.js-library');

// ф-ція рендеру розмітки після закриття модалки на сторінці my library
function renderBeforeCloseModalOnMyLib() {
  // перевірка на активний клас
  if (btnLib.classList.contains('btn--current')) {
    clearPage(); // очищення сторінки
    getFromStorageAndRender(); // виклик ф-ції откримання масиву обʼєктів по id з локального сховища та їх рендер
  }
}
