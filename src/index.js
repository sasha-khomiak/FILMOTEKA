//------ВИВОДИМО ТРЕНДОВІ ФІЛЬМИ ПРИ СТАРТІ------//
import getTrendingFilms from './js/getTrendingFilms';
import layOutListOfFilms from './js/layOutListOfFilms';
import { getDataFromAPI } from './js/fetch_by_keyword';
import { keyword } from './js/fetch_by_keyword';


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
    if(keyword === ''){
      response = await getTrendingFilms(page);
    
    }else{
    response = await  getDataFromAPI(keyword, page).then(data => data.results)
      
    }
    
    layOutListOfFilms(response);
  }
}


