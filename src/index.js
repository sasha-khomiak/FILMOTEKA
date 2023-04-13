//------ВИВОДИМО ТРЕНДОВІ ФІЛЬМИ ПРИ СТАРТІ------//
import getTrendingFilms from './js/getTrendingFilms';
import layOutListOfFilms from './js/layOutListOfFilms';

async function showTrendingFilms() {
  let trendingFilms = await getTrendingFilms();

  console.log(trendingFilms);
  layOutListOfFilms(trendingFilms);
}
showTrendingFilms();

//------ПОШУК ФІЛЬМІВ ЗА ПОШУКОВИМ ЗАПИТОМ------//
