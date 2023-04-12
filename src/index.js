import getTrendingFilms from './js/fetchAPI';

// виводимо трендові фільми
async function showTrendingFilms() {
  let trendingFilms = await getTrendingFilms();
  console.log(trendingFilms);
}
showTrendingFilms();
