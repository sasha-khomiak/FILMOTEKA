import getTrendingFilms from './js/fetchAPI';
import getDataFromAPI from './js/fetch_by_keyword';

// виводимо трендові фільми
async function showTrendingFilms() {
  let trendingFilms = await getTrendingFilms();
  // console.log(trendingFilms);
}
showTrendingFilms();
