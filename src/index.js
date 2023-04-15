import headerFunctionality from './js/headerFunctionality';

// підключаємо функцію запиту на API трендових фільмів
import getTrendingFilms from './js/getTrendingFilms';

// функція перевірки натискання по фільму
import handleClickFilms from './js/handleClickFilms';

// підключаємо функцію формування верстки галереї і вставкв в макет
import layOutListOfFilms from './js/layOutListOfFilms';

import {getMoreDataFromAPI, clearPage, keyword} from './js/fetch_by_keyword';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
let currentPage = 1;
let response = '';

window.addEventListener('scroll', debounce(onScrollDocument, DEBOUNCE_DELAY));
export async function showTrendingFilms() {
  let trendingFilms = await getTrendingFilms(currentPage);
  // console.log(trendingFilms);
  layOutListOfFilms(trendingFilms);
}
showTrendingFilms();

//--------ПОВЕРНЕННЯ НА ГОЛОВНУ СТОРІНКУ----\\
document.querySelector('.header-link').addEventListener('click', renderMainContent)
function renderMainContent() {
  clearPage();
  showTrendingFilms();
}
//------ПОШУК ФІЛЬМІВ ЗА ПОШУКОВИМ ЗАПИТОМ------//
async function onScrollDocument() {
  const scroll = document.documentElement.getBoundingClientRect();
  if (scroll.bottom < document.documentElement.clientHeight + 150) {
    currentPage += 1;
    if (keyword === '') {
      response = await getTrendingFilms(currentPage);
    } else {
      response = await getMoreDataFromAPI().then(data => data.results);
    }

    layOutListOfFilms(response);
  }
}
