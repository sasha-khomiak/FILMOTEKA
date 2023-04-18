// імпорти
import axios from 'axios';
import { Notify } from 'notiflix';
import layOutListOfFilms from './layOutListOfFilms';
import { showTrendingFilms } from '../index';
import { warnMessage } from './myLibraryBg';

// змінні
const API_KEY = 'f051ac50d3bfe0c3fd75f02c1ff7b688';
const BASE_URL = 'https://api.themoviedb.org/';
const searchInput = document.querySelector('.search-field-js');
const gallery = document.querySelector('.gallery');
let keyword = ``;
let page = 1;

// експорт
export { getDataFromAPI, keyword, getMoreDataFromAPI, page, clearPage };

// вішання слухача на поле інпуту
searchInput.addEventListener('submit', onSubmitGetAndRender);

// функція запиту по ключу та пошуку
async function getDataFromAPI(keyword) {
  try {
    page = 1;
    const data = await axios

      .get(`${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}`)

      .then(response => {
        return response.data;
      });
    // (data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
// фінкція запиту на сервер з наступною сторінкою
async function getMoreDataFromAPI() {
  try {
    page += 1;
    const data = await axios
      .get(
        `${BASE_URL}3/search/movie?api_key=${API_KEY}&query='${keyword}&page=${page}'`
      )
      .then(response => {
        return response.data;
      });
    // (data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

// ф-ція кліку на пошук та рендер розмітки
function onSubmitGetAndRender(evt) {
  evt.preventDefault();
  keyword = evt.currentTarget.elements.query.value;

  // (keyword);
  getDataFromAPI(keyword).then(data => {
    // якщо нічого не знайшло, виводимо сповіщення, додаткова секція та рендер трендів
    if (data.results.length === 0) {
      Notify.failure(
        'Whoops... We did not found any movie, watch a movie from trends'
      );
      clearPage();
      searchInput.reset();
      warnMessage(); // додаткова секія
      showTrendingFilms();
      return;
    }
    // сповіщення з кількістю знайдених фільмів
    Notify.success(
      `Congrats! We have found ${data.total_results} movies according to your request `
    );
    // (data);
    clearPage(); // виклик ф-ції очищення сторінки
    layOutListOfFilms(data.results); // рендер розмітки знайдених фільмів
    searchInput.reset(); // очистка поля пошуку
  });
}
//функція очищення сторінки
function clearPage() {
  gallery.innerHTML = '';
  const movieCardList = document.querySelector('.movie-card__list');
  movieCardList.innerHTML = '';
}
