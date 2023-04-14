import headerFunctionality from './js/headerFunctionality';

// підключаємо функцію запиту на API трендових фільмів
import getTrendingFilms from './js/getTrendingFilms';

// підключаємо функцію формування верстки галереї і вставкв в макет
import layOutListOfFilms from './js/layOutListOfFilms';

import { getDataFromAPI } from './js/fetch_by_keyword';
import { keyword } from './js/fetch_by_keyword';
//import getDataFromAPI from './js/fetch_by_keyword';
//import { keyword } from './js/fetch_by_keyword';

import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
let page = 1;
let response = '';

window.addEventListener('scroll', debounce(onScrollDocument, DEBOUNCE_DELAY));
export async function showTrendingFilms() {
  let trendingFilms = await getTrendingFilms(page);
  // console.log(trendingFilms);
  layOutListOfFilms(trendingFilms);
}
showTrendingFilms();

//------ПОШУК ФІЛЬМІВ ЗА ПОШУКОВИМ ЗАПИТОМ------//
async function onScrollDocument() {
  const scroll = document.documentElement.getBoundingClientRect();
  if (scroll.bottom < document.documentElement.clientHeight + 150) {
    page += 1;
    if (keyword === '') {
      response = await getTrendingFilms(page);
    } else {
      response = await getDataFromAPI(keyword, page).then(data => data.results);
      //response = await getDataFromAPI(keyword, page);
    }

    layOutListOfFilms(response);
  }
}
